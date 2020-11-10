const NMS = `net.minecraft.server.${server.getClass().getCanonicalName().split('.')[3]}`;

const ArrayList = core.type('java.util.ArrayList');
const BoundingBox = core.type('org.bukkit.util.BoundingBox');
const Entity = core.type('org.bukkit.entity.Entity');
const EntityType = core.type('org.bukkit.entity.EntityType');
const ItemStack = core.type('org.bukkit.inventory.ItemStack');
const Location = core.type('org.bukkit.Location');
const Material = core.type('org.bukkit.Material');
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
const UUID = core.type('java.util.UUID');
const Vector = core.type('org.bukkit.util.Vector');

const $ = {
   parse: (object) => {
      if (object && typeof object.class === 'string') {
         switch (object.class) {
            case 'BoundingBox':
               return BoundingBox.of($.parse(object.min), $.parse(object.max));
            case 'Entity':
               const world = server.getWorld(
                  new UUID(object.nbt.value.WorldUUIDMost.value, object.nbt.value.WorldUUIDLeast.value)
               );
               const entity = world.spawnEntity(
                  new Location(
                     world,
                     object.nbt.value.Pos.value[0].value,
                     object.nbt.value.Pos.value[1].value,
                     object.nbt.value.Pos.value[2].value,
                     object.nbt.value.Rotation.value[0].value,
                     object.nbt.value.Rotation.value[1].value
                  ),
                  EntityType[object.type]
               );
               entity.getHandle().load($.parse(object.nbt));
               return entity;
            case 'ItemStack':
               const item_stack = new ItemStack(
                  Material[object.type],
                  object.nbt.value.Count.value
               ).ensureServerConversions();
               item_stack.getHandle().setTag($.parse(object.nbt.value.tag));
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
               for (const item of object.value) nbt_tag_byte_array.add(item);
               return nbt_tag_byte_array;
            case 'NBTTagCompound':
               const nbt_tag_compound = new NBTTagCompound();
               for (const item in object.value) nbt_tag_compound.set(item, $.parse(object.value[item]));
               return nbt_tag_compound;
            case 'NBTTagDouble':
               return NBTTagDouble.a(object.value);
            case 'NBTTagFloat':
               return NBTTagFloat.a(object.value);
            case 'NBTTagInt':
               return NBTTagInt.a(object.value);
            case 'NBTTagIntArray':
               const nbt_tag_int_array = new NBTTagIntArray(new ArrayList());
               for (const item of object.value) nbt_tag_int_array.add(item);
               return nbt_tag_int_array;
            case 'NBTTagList':
               const nbt_tag_list = new NBTTagList();
               for (const item of object.value) nbt_tag_list.add($.parse(item));
               return nbt_tag_list;
            case 'NBTTagLong':
               return NBTTagLong.a(object.value);
            case 'NBTTagLongArray':
               const nbt_tag_long_array = new NBTTagLongArray(new ArrayList());
               for (const item of object.value) nbt_tag_long_array.add(item);
               return nbt_tag_long_array;
            case 'NBTTagShort':
               return NBTTagShort.a(object.value);
            case 'NBTTagString':
               return NBTTagString.a(object.value);
         }
      }
      return object;
   },
   serialize: (object) => {
      if (object instanceof BoundingBox) {
         return {
            class: 'BoundingBox',
            min: $.serialize(object.getMin()),
            max: $.serialize(object.getMax())
         };
      } else if (object instanceof Entity) {
         return {
            class: 'Entity',
            nbt: $.serialize(object.getHandle().save(new NBTTagCompound())),
            type: object.getType().name()
         };
      } else if (object instanceof ItemStack) {
         return {
            class: 'ItemStack',
            nbt: $.serialize(object.ensureServerConversions().getHandle().save(new NBTTagCompound())),
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
   }
};

core.export($);
