const NMS = `net.minecraft.server.${server.getClass().getCanonicalName().split('.')[3]}`;

const ArrayList = core.type('java.util.ArrayList');
const Block = core.type('org.bukkit.block.Block');
const BlockStateMeta = core.type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = core.type('org.bukkit.util.BoundingBox');
const CommandSender = core.type('org.bukkit.command.CommandSender');
const Entity = core.type('org.bukkit.entity.Entity');
const EntityType = core.type('org.bukkit.entity.EntityType');
const ItemStack = core.type('org.bukkit.inventory.ItemStack');
const Location = core.type('org.bukkit.Location');
const Material = core.type('org.bukkit.Material');
const NamespacedKey = core.type('org.bukkit.NamespacedKey');
const NBTTagByte = core.type(`${NMS}.NBTTagByte`);
const NBTTagByteArray = core.type(`${NMS}.NBTTagByteArray`);
const NBTTagCompound = core.type(`${NMS}.NBTTagCompound`);
const NBTTagDouble = core.type(`${NMS}.NBTTagDouble`);
const NBTTagFloat = core.type(`${NMS}.NBTTagFloat`);
const NBTTagInt = core.type(`${NMS}.NBTTagInt`);
const NBTTagIntArray = core.type(`${NMS}.NBTTagIntArray`);
const NBTTagList = core.type(`${NMS}.NBTTagList`);
const NBTTagLong = core.type(`${NMS}.NBTTagLong`);
const NBTTagShort = core.type(`${NMS}.NBTTagShort`);
const NBTTagString = core.type(`${NMS}.NBTTagString`);
const OfflinePlayer = core.type('org.bukkit.OfflinePlayer');
const PersistentDataContainer = core.type('org.bukkit.persistence.PersistentDataContainer');
const PersistentDataHolder = core.type('org.bukkit.persistence.PersistentDataHolder');
const PersistentDataType = core.type('org.bukkit.persistence.PersistentDataType');
const SpawnReason = core.type('org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason');
const UUID = core.type('java.util.UUID');
const Vector = core.type('org.bukkit.util.Vector');

/** @type {import('./module').Main} */
const $ = {
   boundingBox (arg1) {
      const thing = $.parse(arg1);
      if (thing instanceof Block) {
         const bounds = thing.getBoundingBox();
         if (bounds.volume === 0) {
            // don't use default zero-volume bounding box
            return BoundingBox.of(thing.getLocation(), 0, 0, 0);
         } else {
            return bounds;
         }
      } else if (thing instanceof BoundingBox) {
         return thing;
      } else if (thing instanceof Entity) {
         return thing.getBoundingBox();
      }
   },
   data (arg1, arg2 = 'default') {
      const thing = $.parse(arg1);
      const store = `mantle/${arg2}`;
      if (typeof arg2 !== 'string') {
         throw new TypeError('Argument 2 (if specified) must be of type "string"');
      } else if (thing instanceof Block) {
         return core.data(`${store}/block/${thing.getWorld().getUID().toString()}/${thing.getBlockKey().toString(16)}`);
      } else if (thing instanceof OfflinePlayer) {
         return core.data(`${store}/player/${thing.getUniqueId().toString()}`);
      } else if (thing instanceof Entity) {
         return core.data(`${store}/entity/${thing.getUniqueId().toString()}`);
      } else if (thing instanceof ItemStack) {
         const meta = thing.getItemMeta();
         if (meta instanceof PersistentDataHolder) {
            const key = [ new NamespacedKey(core.plugin, `mantle/data/${arg2}`), PersistentDataType.STRING ];
            const container = meta.getPersistentDataContainer();
            container.has(...key) || (container.set(...key, UUID.randomUUID().toString()), thing.setItemMeta(meta));
            // retroactively add key to serialized item stack input
            arg1 && arg1.class === 'ItemStack' && Object.assign(arg1, $.serialize(thing));
            return core.data(`${store}/itemStack/${container.get(...key)}`);
         }
      }
   },
   dist (arg1, arg2, arg3 = false) {
      const from = $.vector(arg1);
      const to = $.vector(arg2);
      if (from === void 0) {
         throw new TypeError('Argument 1 must be of type "HasVector"');
      } else if (to === void 0) {
         throw new TypeError('Argument 2 must be of type "HasVector"');
      } else if (typeof arg3 !== 'boolean') {
         throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
      } else {
         const fromLocation = $.location(arg1);
         const toLocation = $.location(arg2);
         if (fromLocation && toLocation && fromLocation.getWorld() !== toLocation.getWorld()) {
            return Infinity;
         } else {
            const delta = $.vector(from).subtract(to);
            arg3 && delta.setY(0);
            return Math.sqrt(Math.pow(delta.getX(), 2), Math.pow(delta.getY(), 2), Math.pow(delta.getZ(), 2));
         }
      }
   },
   drop (arg1, arg2, arg3 = false) {
      const location = $.location(arg1);
      const item = $.itemStack(arg2);
      if (location === void 0) {
         throw new TypeError('Argument 1 must be of type "HasLocation"');
      } else if (item === void 0) {
         throw new TypeError('Argument 2 must be of type "HasItemStack"');
      } else if (typeof arg3 !== 'boolean') {
         throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
      } else if (item) {
         location.getWorld()[arg3 ? 'dropItemNaturally' : 'dropItem'](location, item);
      }
   },
   itemStack (arg1) {
      const stuff = $.parse(arg1);
      if (stuff instanceof Block) {
         const item = new ItemStack(stuff.getType());
         const meta = item.getItemMeta();
         meta instanceof BlockStateMeta && (meta.setBlockState(stuff.getState()), item.setItemMeta(meta));
         return item;
      } else if (stuff instanceof Entity) {
         return stuff.getEquipment().getItemInMainHand();
      } else if (stuff instanceof ItemStack) {
         return stuff;
      }
   },
   location (arg1) {
      const stuff = $.parse(arg1);
      if (stuff instanceof Block || stuff instanceof Entity) {
         return stuff.getLocation();
      } else if (stuff instanceof Location) {
         return stuff;
      }
   },
   parse (object) {
      if (object && typeof object.class === 'string') {
         switch (object.class) {
            case 'BoundingBox':
               return BoundingBox.of($.parse(object.min), $.parse(object.max));
            case 'Entity':
               try {
                  let entity = $.select().filter((entity) => object.uuid === entity.getUniqueId().toString())[0];
                  if (!entity) {
                     const location = $.parse(object.location);
                     entity = location.getWorld().spawnEntity(location, EntityType[object.type], SpawnReason.CUSTOM);
                  }
                  entity.getHandle().load($.parse(object.nbt));
                  return entity;
               } catch (error) {
                  console.error('An error occured while attempting to parse a serialized entity!');
                  console.error(error.stack || error.message || error);
                  return null;
               }
            case 'ItemStack':
               const item_stack = new ItemStack(Material[object.type], object.amount).ensureServerConversions();
               item_stack.getHandle().setTag($.parse(object.nbt));
               return item_stack;
            case 'Location':
               return new Location(
                  server.getWorld(UUID.fromString(object.world)),
                  object.x,
                  object.y,
                  object.z,
                  object.yaw,
                  object.pitch
               );
            case 'NBTTagByte':
               return NBTTagByte.a(object.value);
            case 'NBTTagByteArray':
               const nbt_tag_byte_array = new NBTTagByteArray(new ArrayList());
               for (const value of object.value) nbt_tag_byte_array.add(NBTTagByte.a(value));
               return nbt_tag_byte_array;
            case 'NBTTagCompound':
               const nbt_tag_compound = new NBTTagCompound();
               for (const key in object.value) nbt_tag_compound.set(key, $.parse(object.value[key]));
               return nbt_tag_compound;
            case 'NBTTagDouble':
               return NBTTagDouble.a(object.value);
            case 'NBTTagFloat':
               return NBTTagFloat.a(object.value);
            case 'NBTTagInt':
               return NBTTagInt.a(object.value);
            case 'NBTTagIntArray':
               const nbt_tag_int_array = new NBTTagIntArray(new ArrayList());
               for (const value of object.value) nbt_tag_int_array.add(NBTTagInt.a(value));
               return nbt_tag_int_array;
            case 'NBTTagList':
               const nbt_tag_list = new NBTTagList();
               for (const value of object.value) nbt_tag_list.add($.parse(value));
               return nbt_tag_list;
            case 'NBTTagLong':
               return NBTTagLong.a(object.value);
            case 'NBTTagLongArray':
               const nbt_tag_long_array = new NBTTagLongArray(new ArrayList());
               for (const value of object.value) nbt_tag_long_array.add(NBTTagLong.a(value));
               return nbt_tag_long_array;
            case 'NBTTagShort':
               return NBTTagShort.a(object.value);
            case 'NBTTagString':
               return NBTTagString.a(object.value);
            case 'Vector':
               return new Vector(object.x, object.y, object.z);
         }
      }
      return object;
   },
   player (arg1) {
      if (typeof arg1 !== 'string') {
         throw new TypeError('Argument 1 must be of type "string"');
      } else {
         const online = server.getPlayer(arg1);
         if (online) {
            return online;
         } else {
            for (const offline of server.getOfflinePlayers()) {
               if (offline.getName().toLowerCase().startsWith(arg1.toLowerCase())) {
                  return offline;
               }
            }
         }
      }
   },
   select (arg1 = '@e', arg2 = server.getConsoleSender()) {
      const context = $.parse(arg2);
      if (typeof arg1 !== 'string') {
         throw new TypeError('Argument 1 (if specified) must be of type "string"');
      } else if (context instanceof CommandSender) {
         try {
            return [ ...server.selectEntities(context, arg1) ];
         } catch (error) {
            throw new SyntaxError('The provided selector was invalid and could not be parsed.');
         }
      } else {
         throw new TypeError('Argument 2 (if specified) must be of type "HasEntity" or "CommandSender"');
      }
   },
   serialize (object) {
      if (object instanceof BoundingBox) {
         return {
            class: 'BoundingBox',
            min: $.serialize(object.getMin()),
            max: $.serialize(object.getMax())
         };
      } else if (object instanceof Entity) {
         return {
            class: 'Entity',
            location: $.serialize(object.getLocation()),
            nbt: $.serialize(object.getHandle().save(new NBTTagCompound())),
            type: object.getType().name(),
            uuid: object.getUniqueId().toString()
         };
      } else if (object instanceof ItemStack) {
         return {
            amount: object.getAmount(),
            class: 'ItemStack',
            nbt: $.serialize(object.ensureServerConversions().getHandle().getTag()),
            type: object.getType().name()
         };
      } else if (object instanceof Location) {
         return {
            class: 'Location',
            pitch: object.getPitch(),
            world: object.getWorld().getUID().toString(),
            x: object.getX(),
            y: object.getY(),
            yaw: object.getYaw(),
            z: object.getZ()
         };
      } else if (object instanceof NBTTagByte) {
         return { class: 'NBTTagByte', value: object.asByte() };
      } else if (object instanceof NBTTagByteArray) {
         return { class: 'NBTTagByteArray', value: [ ...object ].map((value) => value.asByte()) };
      } else if (object instanceof NBTTagCompound) {
         return {
            class: 'NBTTagCompound',
            value: Object.fromEntries([ ...object.getKeys() ].map((key) => [ key, $.serialize(object.get(key)) ]))
         };
      } else if (object instanceof NBTTagDouble) {
         return { class: 'NBTTagDouble', value: object.asDouble() };
      } else if (object instanceof NBTTagFloat) {
         return { class: 'NBTTagFloat', value: object.asFloat() };
      } else if (object instanceof NBTTagInt) {
         return { class: 'NBTTagInt', value: object.asInt() };
      } else if (object instanceof NBTTagIntArray) {
         return { class: 'NBTTagIntArray', value: [ ...object ].map((value) => value.asInt()) };
      } else if (object instanceof NBTTagList) {
         return { class: 'NBTTagList', value: [ ...object ].map($.serialize) };
      } else if (object instanceof NBTTagLong) {
         return { class: 'NBTTagLong', value: object.asLong() };
      } else if (object instanceof NBTTagLongArray) {
         return { class: 'NBTTagLongArray', value: [ ...object ].map((value) => value.asLong()) };
      } else if (object instanceof NBTTagShort) {
         return { class: 'NBTTagShort', value: object.asShort() };
      } else if (object instanceof NBTTagString) {
         return { class: 'NBTTagString', value: object.asString() };
      } else if (object instanceof Vector) {
         return { class: 'Vector', x: object.getX(), y: object.getY(), z: object.getZ() };
      } else {
         return object;
      }
   },
   vector (arg1) {
      const stuff = $.parse(arg1);
      if (stuff instanceof Block || stuff instanceof Entity) {
         return stuff.getLocation().toVector();
      } else if (stuff instanceof Location) {
         return stuff.toVector();
      } else if (stuff instanceof Vector) {
         return stuff;
      }
   }
};

core.export($);
