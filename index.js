// you were meant to defeat the sith, not join them!
const nms = eval(`Packages.net.minecraft.server.${server.getClass().getCanonicalName().split('.')[3]}`);

const UUID = Java.type('java.util.UUID');
const Runnable = Java.extend(Java.type('java.lang.Runnable'));
const ArrayList = Java.type('java.util.ArrayList');
const NBTTagList = nms.NBTTagList;
const SecureRandom = Java.type('java.security.SecureRandom');
const NBTTagCompound = nms.NBTTagCompound;
const NBTTagIntArray = nms.NBTTagIntArray;
const NBTTagByteArray = nms.NBTTagByteArray;

const tasks = [];
const crypto = new SecureRandom();

const _ = {
   access: (object) => {
      if (object === null || typeof object !== 'object') {
         return object;
      } else {
         const output = { _: object };
         Object.entries(object).forEach((entry) => {
            if (toString.apply(entry[1]) === '[foreign HostFunction]') {
               Object.defineProperty(output, entry[0], {
                  get () {
                     const output = (...args) => _.access(entry[1](...args));
                     output.hostFunction = entry[0];
                     return output;
                  }
               });
            } else {
               Object.defineProperty(output, entry[0], {
                  get () {
                     return _.access(entry[1]);
                  }
               });
            }
            let index = undefined;
            entry[0].startsWith('is') && entry[0][2] && (index = 2);
            entry[0].startsWith('get') && entry[0][3] && (index = 3);
            if (index) {
               let key = entry[0].slice(index);
               if (key.length) {
                  let camel = key[0].toLowerCase() + key.slice(1);
                  if (!Object.keys(object).includes(camel)) {
                     try {
                        entry[1]();
                        Object.defineProperty(output, camel, {
                           get () {
                              return _.access(entry[1]());
                           },
                           set (value) {
                              return object[`set${key}`] && object[`set${key}`](value);
                           }
                        });
                     } catch (error) {}
                  }
               }
            }
         });
         const array = _.array(object);
         Object.keys(array).forEach((index) => {
            if (!Object.keys(output).includes(index)) {
               Object.defineProperty(output, index, {
                  get () {
                     return _.access(array[index]);
                  }
               });
            }
         });
         return output;
      }
   },
   array: (object) => {
      const output = [];
      if (typeof object.length === 'number') {
         if (object.length > 0) {
            let index = 0;
            while (output.length < object.length) {
               output.push(object[index++]);
            }
         }
      } else if (typeof object.forEach === 'function') {
         object.forEach((entry) => {
            output.push(entry);
         });
      } else if (typeof object.forEachRemaining === 'function') {
         object.forEachRemaining((entry) => {
            output.push(entry);
         });
      }
      return output;
   },
   base: {
      characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      encode: (string) => {
         let index = 0;
         let result = '';
         while (index < string.length) {
            let a = string.charCodeAt(index++) || 0;
            let b = string.charCodeAt(index++) || 0;
            let c = string.charCodeAt(index++) || 0;
            let d = ((b & 0xf) << 2) | ((c >> 6) & 0x3);
            let e = c & 0x3f;
            b ? c || (e = 64) : (d = e = 64);
            result += _.base.characters.charAt((a >> 2) & 0x3f);
            result += _.base.characters.charAt(((a & 0x3) << 4) | ((b >> 4) & 0xf));
            result += _.base.characters.charAt(d);
            result += _.base.characters.charAt(e);
         }
         return result;
      },
      decode: (string) => {
         let index = 0;
         let result = '';
         while (index < string.length) {
            let a = _.base.characters.indexOf(string.charAt(index++));
            let b = _.base.characters.indexOf(string.charAt(index++));
            let c = _.base.characters.indexOf(string.charAt(index++));
            let d = _.base.characters.indexOf(string.charAt(index++));
            let e = ((b & 0xf) << 4) | ((c >> 2) & 0xf);
            let f = ((c & 0x3) << 6) | (d & 0x3f);
            result += String.fromCharCode(((a & 0x3f) << 2) | ((b >> 4) & 0x3));
            result += e ? String.fromCharCode(e) : '';
            result += f ? String.fromCharCode(f) : '';
         }
         return result;
      }
   },
   camel: (string, separator) => {
      const pascal = _.pascal(string, separator);
      return _.lower(pascal[0]) + pascal.slice(1);
   },
   clamp: (number, min, max) => {
      return number < min ? min : number > max ? max : number;
   },
   collect: (...array) => {
      const output = new ArrayList();
      array.forEach((entry) => {
         output.add(entry);
      });
      return output;
   },
   color: (string) => {
      return string.replace(/(&)/g, '§').replace(/(§§)/g, '&');
   },
   define: (object, consumer) => {
      consumer ||
         (consumer = (entry) => {
            return {
               get: () => {
                  return entry.value;
               },
               set: (value) => {
                  entry.value = value;
               }
            };
         });
      const output = {};
      _.entries(object).forEach((entry) => {
         const info = consumer(entry);
         if (info) {
            Object.defineProperty(output, entry.key, {
               get () {
                  if (info.get) {
                     return info.get();
                  }
               },
               set (value) {
                  if (info.set) {
                     info.set(value);
                  }
               }
            });
         }
      });
      return output;
   },
   dist: (source, target, flat) => {
      if (source.getWorld() !== target.getWorld()) return Infinity;
      var deltaX = source.getX() - target.getX();
      var deltaY = flat ? 0 : source.getY() - target.getY();
      var deltaZ = source.getZ() - target.getZ();
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
   },
   entries: (object) => {
      return _.keys(object).map((key) => {
         return { key: key, value: object[key] };
      });
   },
   extend: (object, ...objects) => {
      return Object.assign(object, ...objects);
   },
   flat: (array) => {
      return array.filter((entry) => {
         return entry;
      });
   },
   interval: (script, period) => {
      const state = { iteration: null };
      const loop = () => {
         try {
            script();
         } catch (error) {
            console.error(error);
         }
         state.iteration = _.timeout(loop, period);
      };
      state.iteration = _.timeout(loop, period);
      const output = { cancel: () => state.iteration.cancel() };
      tasks.push(output);
      return output;
   },
   key: (object, value) => {
      return _.keys(object)[_.values(object).indexOf(value)];
   },
   keys: (object) => {
      return Object.keys(object);
   },
   lower: (string) => {
      return string.toLowerCase();
   },
   match: (object, filter) => {
      switch (typeof filter) {
         case 'undefined':
            return true;
         case 'function':
            return filter(object);
         case 'object':
            switch (_.type(filter)) {
               case 'Array':
                  return filter
                     .map((entry) => {
                        return _.match(object, entry);
                     })
                     .includes(true);
               case 'Object':
                  return !_.keys(filter)
                     .map((key) => {
                        return _.match(object[key], filter[key]);
                     })
                     .includes(false);
               default:
                  return object === filter;
            }
         default:
            return object === filter;
      }
   },
   mirror: (options) => {
      options || (options = {});
      const mirror = _.extend(options.array || [], {
         add: options.add || (() => {}),
         remove: options.remove || (() => {}),
         clear: options.clear || (() => {})
      });
      return {
         get: () => {
            return mirror;
         },
         set: (value) => {
            mirror.clear();
            value.forEach(mirror.add);
         }
      };
   },
   nms: nms,
   object: (array, consumer) => {
      consumer ||
         (consumer = (entry, index) => {
            return { [entry.key || index]: entry.value || entry };
         });
      return _.extend({}, ..._.flat(array.map(consumer)));
   },
   parse: (data) => {
      console.log(core.output(data.value));
      try {
         switch (data.type) {
            case 'None':
               return data.value;
            case 'Int':
            case 'Float':
            case 'Double':
            case 'Long':
            case 'Short':
            case 'Byte':
            case 'String':
               const temp = new NBTTagCompound();
               temp[`set${data.type}`]('x', data.value);
               return temp.get('x');
            case 'End':
               return null;
            case 'List':
               const list = new NBTTagList();
               data.value.forEach((entry) => list.add(_.parse(entry)));
            case 'ByteArray':
               const bytes = new NBTTagByteArray(_.collect());
               data.value.forEach((entry) => bytes.add(_.parse(entry)));
               return bytes;
            case 'IntArray':
               const ints = new NBTTagIntArray(_.collect());
               data.value.forEach((entry) => ints.add(_.parse(entry)));
               return ints;
            case 'Compound':
               const compound = new NBTTagCompound();
               _.entries(data.value).forEach((entry) => compound.set(entry.key, _.parse(entry.value)));
               return compound;
         }
      } catch (error) {
         global.test = data;
         console.log(error.stack);
      }
   },
   pascal: (string, separator) => {
      if (separator) {
         return string
            .split(separator)
            .map((chunk) => {
               return _.pascal(chunk);
            })
            .join('');
      } else {
         return _.upper(string[0]) + string.slice(1);
      }
   },
   player: (target) => {
      let uuid = undefined;
      const players = Object.assign({}, core.data('grakkit/players'));
      if (target instanceof UUID) {
         uuid = target;
      } else if (typeof target === 'string') {
         const online = server.getPlayer(target);
         if (players[target]) {
            uuid = _.uuid(players[target].uuid);
         } else if (online) {
            uuid = online.getUniqueId();
         } else {
            _.array(server.getOfflinePlayers()).forEach((offline) => {
               const stored = offline.getUniqueId();
               if (uuid === undefined && [ stored.toString(), offline.getName() ].includes(target)) uuid = stored;
            });
            if (uuid === undefined) {
               try {
                  uuid = _.uuid(target);
               } catch (error) {
                  uuid = server.getOfflinePlayer(target).getUniqueId();
               }
            }
         }
      } else if (typeof target.uuid === 'string') {
         uuid = _.uuid(target.uuid);
      } else if (typeof target.uuid === 'function') {
         uuid = _.uuid(target.uuid());
      } else if (typeof target.getUniqueId === 'function') {
         uuid = target.getUniqueId();
      } else if (target.constructor === Array) {
         return target.map(_.player);
      } else {
         throw `FrameworkError: Cannot convert ${core.output(target)} to standardized player notation!`;
      }
      return Object.assign(players[uuid.toString()] || { uuid: uuid.toString() }, {
         online: server.getPlayer(uuid),
         offline: server.getOfflinePlayer(uuid)
      });
   },
   rand: (...args) => {
      switch (args.length) {
         case 0:
            return (crypto.nextInt() + 2147483648) / 4294967296;
         case 1:
            if (typeof args[0] === 'number') return _.rand() < args[0];
            else if (args[0].length) return args[0][_.rand(0, args[0].length - 1)];
            else return _.rand(_.keys(args[0]));
         case 2:
            return Math.floor(_.rand() * (args[1] - args[0] + 1)) + args[0];
      }
   },
   raw: (string) => {
      return string.replace(/(&)/g, '&&').replace(/(§)/g, '&');
   },
   serialize: (data) => {
      if ([ null, undefined ].includes(data)) {
         return { type: 'None', value: data };
      } else {
         let value = undefined;
         const type = data.getClass().getCanonicalName().split('NBTTag')[1];
         switch (type) {
            case 'Int':
            case 'Float':
            case 'Double':
            case 'Long':
            case 'Short':
            case 'Byte':
            case 'String':
               value = data[`as${type}`]();
               break;
            case 'End':
               value = null;
               break;
            case 'List':
            case 'ByteArray':
            case 'IntArray':
               value = _.array(data).map(_.serialize);
               break;
            case 'Compound':
               value = _.object(_.array(data.map.entrySet()), (entry) => {
                  return { [entry.getKey()]: _.serialize(entry.getValue()) };
               });
               break;
         }
         return { type: type, value: value };
      }
   },
   simplify: (...context) => {
      let output = null;
      const object = context[0];
      switch (_.type(object)) {
         case 'Array':
            output = [];
            for (let entry of object) {
               if (!context.includes(entry)) {
                  output.push(_.simplify(entry, ...context));
               }
            }
            output = _.flat(output);
            output.length || (output = null);
            break;
         case 'Object':
            output = {};
            for (let key of _.keys(object)) {
               if (!context.includes(object[key])) {
                  output[key] = _.simplify(object[key], ...context);
               }
            }
            output = _.strain(output);
            _.keys(output).length || (output = null);
            break;
         default:
            output = object;
      }
      return output;
   },
   splice: (string, separator, ...index) => {
      return string.split(separator).slice(...index).join(separator);
   },
   strain: (object, consumer) => {
      consumer ||
         (consumer = (entry) => {
            return entry.value;
         });
      return _.object(_.entries(object).filter(consumer));
   },
   timeout: (script, period) => {
      const state = { cancel: false };
      const runnable = new Runnable({ run: () => state.cancel || script() });
      server.getScheduler().runTaskLater(core.plugin, runnable, Math.ceil(period / 50));
      const output = { cancel: () => (state.cancel = true) };
      tasks.push(output);
      return output;
   },
   type: (object) => {
      const type = toString.apply(object).split(' ')[1].slice(0, -1);
      return type === 'Object' ? object.constructor.name : type;
   },
   upper: (string) => {
      return string.toUpperCase();
   },
   uuid: (string) => {
      return string ? UUID.fromString(string) : UUID.randomUUID();
   },
   values: (object) => {
      return Object.values(object);
   }
};

core.event('org.bukkit.event.player.PlayerJoinEvent', (event) => {
   const player = event.getPlayer();
   const address = player.getAddress().getAddress().getHostAddress();
   const name = player.getName();
   const uuid = player.getUniqueId().toString();
   const info = { address: address, name: name, uuid: uuid };
   Object.assign(core.data('grakkit/players'), {
      [address]: info,
      [name]: info,
      [uuid]: info
   });
});

core.event('org.bukkit.event.server.PluginDisableEvent', (event) => {
   event.getPlugin() === core.plugin && tasks.forEach((task) => task.cancel());
});

core.export(_);
