import {
   obbBlock,
   obePlayer,
   obuBoundingBox,
   obeEntity,
   obiItemStack,
   obLocation,
   obuVector,
   obeItem,
   obcCommandSender,
   obOfflinePlayer,
   obpPersistentDataHolder,
   obeLivingEntity,
   obimBlockStateMeta
} from '../../../dict/classes';

import { ValidEntityType, ValidMaterial } from './unions';

type NBTTag = { new (...args: any[]): any; a(value: any): any; }
type InstanceClass <X> = new (...args: any[]) => X;

type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
type HasLocation = obLocation | SerialLocation | IsPhysical;
type HasVector = obuVector | SerialVector | HasLocation;

type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
type IsEntity = obeEntity | obeItem | obePlayer | obOfflinePlayer;
type IsPhysical = obbBlock | IsEntity | SerialEntity;

type SerialBoundingBox = { class: 'BoundingBox', min: SerialVector, max: SerialVector };
type SerialEntity = { class: 'Entity', location: SerialLocation, nbt: SerialNBTTagCompound, type: keyof typeof ValidEntityType, uuid: string };
type SerialItemStack = { amount: number, class: 'ItemStack', nbt: SerialNBTTagCompound, type: keyof typeof ValidMaterial };
type SerialLocation = { class: 'Location', pitch: number, world: string, x: number, y: number, yaw: number, z: number };
type SerialVector = { class: 'Vector', x: number, y: number, z: number };

type SerialNBTTagCompound = { class: 'NBTTagCompound', value: { [x: string]: SerialNBTTag } };

type SerialNBTTag =
   { class: 'NBTTagByte', value: number } |
   { class: 'NBTTagByteArray', value: number[] } |
   { class: 'NBTTagCompound', value: { [x: string]: SerialNBTTag } } |
   { class: 'NBTTagDouble', value: number } |
   { class: 'NBTTagFloat', value: number } |
   { class: 'NBTTagInt', value: number } |
   { class: 'NBTTagIntArray', value: number[] } |
   { class: 'NBTTagList', value: SerialNBTTag[] } |
   { class: 'NBTTagLong', value: number } |
   { class: 'NBTTagLongArray', value: number[] } |
   { class: 'NBTTagShort', value: number } |
   { class: 'NBTTagString', value: string };

type MantleParse = {
   (object: SerialBoundingBox): obuBoundingBox;
   (object: SerialEntity): obeEntity;
   (object: SerialItemStack): obiItemStack;
   (object: SerialLocation): obLocation;
   (object: SerialVector): obuVector;
   <X> (object: X): X;
}

type MantleSerialize = {
   (object: obuBoundingBox): SerialBoundingBox;
   (object: IsEntity): SerialEntity;
   (object: obiItemStack): SerialItemStack;
   (object: obLocation): SerialLocation;
   (object: obuVector): SerialVector;
   <X> (object: X): X;
}

const ArrayList = core.type('java.util.ArrayList');
//@ts-expect-error
const Block: InstanceClass<obbBlock> = core.type('org.bukkit.block.Block');
//@ts-expect-error
const BlockStateMeta: InstanceClass<obimBlockStateMeta> = core.type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = core.type('org.bukkit.util.BoundingBox');
//@ts-expect-error
const CommandSender: InstanceClass<obcCommandSender> = core.type('org.bukkit.command.CommandSender');
//@ts-expect-error
const Entity: InstanceClass<obeEntity> = core.type('org.bukkit.entity.Entity');
const EntityType = core.type('org.bukkit.entity.EntityType');
const ItemStack = core.type('org.bukkit.inventory.ItemStack');
//@ts-expect-error
const LivingEntity: InstanceClass<obeLivingEntity> = core.type('org.bukkit.entity.LivingEntity');
const Location = core.type('org.bukkit.Location');
const Material = core.type('org.bukkit.Material');
const NamespacedKey = core.type('org.bukkit.NamespacedKey');
//@ts-expect-error
const OfflinePlayer: InstanceClass<obOfflinePlayer> = core.type('org.bukkit.OfflinePlayer');
//@ts-expect-error
const PersistentDataHolder: InstanceClass<obpPersistentDataHolder> = core.type('org.bukkit.persistence.PersistentDataHolder');
const PersistentDataType = core.type('org.bukkit.persistence.PersistentDataType');
const SpawnReason = core.type('org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason');
const UUID = core.type('java.util.UUID');
const Vector = core.type('org.bukkit.util.Vector');

//@ts-expect-error
const NMS = `net.minecraft.server.${server.getClass().getCanonicalName().split('.')[3]}`;
//@ts-expect-error
const NBTTagByte: NBTTag = core.type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArray: NBTTag = core.type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompound: NBTTag = core.type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDouble: NBTTag = core.type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloat: NBTTag = core.type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagInt: NBTTag = core.type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArray: NBTTag = core.type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagList: NBTTag = core.type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLong: NBTTag = core.type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArray: NBTTag = core.type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShort: NBTTag = core.type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagString: NBTTag = core.type(`${NMS}.NBTTagString`);

const parse: MantleParse = (object: SerialBoundingBox | SerialEntity | SerialItemStack | SerialLocation | SerialNBTTag | SerialVector) => {
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
               //@ts-expect-error
               entity.getHandle().load($.parse(object.nbt));
               return entity;
            } catch (error) {
               console.error('An error occured while attempting to parse a serialized entity!');
               console.error(error.stack || error.message || error);
               return null;
            }
         case 'ItemStack':
            const item_stack = new ItemStack(Material[object.type], object.amount).ensureServerConversions();
            //@ts-expect-error
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
}

//@ts-expect-error
const serialize: MantleSerialize = (object: obuBoundingBox | obeEntity | obiItemStack | obLocation | obuVector) => {
   if (object instanceof BoundingBox) {
      return {
         class: 'BoundingBox',
         min: $.serialize(object.getMin()),
         max: $.serialize(object.getMax())
      };
   } else if (object instanceof Entity) {
      //@ts-expect-error
      const nbt: SerialNBTTagCompound = $.serialize(object.getHandle().save(new NBTTagCompound()));
      return {
         class: 'Entity',
         location: $.serialize(object.getLocation()),
         nbt,
         type: object.getType().name(),
         uuid: object.getUniqueId().toString()
      };
   } else if (object instanceof ItemStack) {
      //@ts-expect-error
      const nbt: SerialNBTTagCompound = $.serialize(object.ensureServerConversions().getHandle().getTag());
      return {
         amount: object.getAmount(),
         class: 'ItemStack',
         nbt,
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
   } else if (object instanceof Vector) {
      return { class: 'Vector', x: object.getX(), y: object.getY(), z: object.getZ() };
   } else {
      // force VS code to shut the fuck up
      const nbt: any = object;
      if (nbt instanceof NBTTagByte) {
         return { class: 'NBTTagByte', value: nbt.asByte() };
      } else if (nbt instanceof NBTTagByteArray) {
         return { class: 'NBTTagByteArray', value: [ ...nbt ].map((value) => value.asByte()) };
      } else if (nbt instanceof NBTTagCompound) {
         return {
            class: 'NBTTagCompound',
            value: Object.fromEntries([ ...nbt.getKeys() ].map((key) => [ key, $.serialize(nbt.get(key)) ]))
         };
      } else if (nbt instanceof NBTTagDouble) {
         return { class: 'NBTTagDouble', value: nbt.asDouble() };
      } else if (nbt instanceof NBTTagFloat) {
         return { class: 'NBTTagFloat', value: nbt.asFloat() };
      } else if (nbt instanceof NBTTagInt) {
         return { class: 'NBTTagInt', value: nbt.asInt() };
      } else if (nbt instanceof NBTTagIntArray) {
         return { class: 'NBTTagIntArray', value: [ ...nbt ].map((value) => value.asInt()) };
      } else if (nbt instanceof NBTTagList) {
         return { class: 'NBTTagList', value: [ ...nbt ].map($.serialize) };
      } else if (nbt instanceof NBTTagLong) {
         return { class: 'NBTTagLong', value: nbt.asLong() };
      } else if (nbt instanceof NBTTagLongArray) {
         return { class: 'NBTTagLongArray', value: [ ...nbt ].map((value) => value.asLong()) };
      } else if (nbt instanceof NBTTagShort) {
         return { class: 'NBTTagShort', value: nbt.asShort() };
      } else if (nbt instanceof NBTTagString) {
         return { class: 'NBTTagString', value: nbt.asString() };
      } else {
         return nbt;
      }
   }
}

const $ = {
   boundingBox (arg1: HasBoundingBox) {
      const thing = $.parse(arg1);
      if (thing instanceof Block) {
         const bounds = thing.getBoundingBox();
         if (bounds.getVolume() === 0) {
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
   data (arg1: IsContainer, arg2 = 'default') {
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
            const key = new NamespacedKey(core.plugin, `mantle/data/${arg2}`);
            const type = PersistentDataType.STRING;
            const container = meta.getPersistentDataContainer();
            container.has(key, type) || (container.set(key, type, UUID.randomUUID().toString()), thing.setItemMeta(meta));
            // retroactively add key to serialized item stack input
            arg1 && 'class' in arg1 && arg1.class === 'ItemStack' && Object.assign(arg1, $.serialize(thing));
            return core.data(`${store}/itemStack/${container.get(key, type)}`);
         }
      }
   },
   dist (arg1: HasVector, arg2: HasVector, arg3 = false) {
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
            return Math.sqrt(Math.pow(delta.getX(), 2) + Math.pow(delta.getY(), 2) + Math.pow(delta.getZ(), 2));
         }
      }
   },
   drop (arg1: HasLocation, arg2: HasItemStack, arg3 = false) {
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
   itemStack (arg1: HasItemStack) {
      const stuff = $.parse(arg1);
      if (stuff instanceof Block) {
         const item = new ItemStack(stuff.getType());
         const meta = item.getItemMeta();
         meta instanceof BlockStateMeta && (meta.setBlockState(stuff.getState()), item.setItemMeta(meta));
         return item;
      } else if (stuff instanceof Entity) {
         return stuff instanceof LivingEntity ? stuff.getEquipment().getItemInMainHand() : null;
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
   parse,
   player (arg1: string) {
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
   select (arg1 = '@e', arg2: obcCommandSender = server.getConsoleSender()) {
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
   serialize,
   vector (arg1: HasVector) {
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

export const Main = $;
