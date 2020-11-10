//**/ import { obuBoundingBox, obeEntity, obiItemStack, obLocation, obuVector } from '../../../dict/classes'; /*
import { obuBoundingBox, obeEntity, obiItemStack, obLocation, obuVector } from '../core/dict/classes'; //*/

type SerialBoundingBox = { class: 'BoundingBox', min: SerialVector, max: SerialVector };
type SerialEntity = { class: 'Entity', nbt: SerialNBTTagCompound, type: string };
type SerialItemStack = { class: 'ItemStack', nbt: SerialNBTTagCompound, type: string };
type SerialLocation = { class: 'Location', pitch: number, world: string, x: number, y: number, yaw: number, z: number };
type SerialNBTTagByte = { class: 'NBTTagByte', value: number };
type SerialNBTTagByteArray = { class: 'NBTTagByteArray', value: SerialNBTTag[] };
type SerialNBTTagCompound = { class: 'NBTTagCompound', value: any };
type SerialNBTTagDouble = { class: 'NBTTagDouble', value: number };
type SerialNBTTagFloat = { class: 'NBTTagFloat', value: number };
type SerialNBTTagInt = { class: 'NBTTagInt', value: number };
type SerialNBTTagIntArray = { class: 'NBTTagIntArray', value: SerialNBTTagInt[] };
type SerialNBTTagList = { class: 'NBTTagList', value: any[] };
type SerialNBTTagLong = { class: 'NBTTagLong', value: number };
type SerialNBTTagLongArray = { class: 'NBTTagLongArray', value: SerialNBTTagLong[] };
type SerialNBTTagShort = { class: 'NBTTagShort', value: number };
type SerialNBTTagString = { class: 'NBTTagString', value: string };
type SerialVector = { class: 'Vector', x: number, y: number, z: number };

export interface Main {
   /** Parses a previously serialized Bounding Box, Entity, Item Stack, Location, or Vector. */
   parse (object: SerialBoundingBox): obuBoundingBox;
   parse (object: SerialEntity): obeEntity;
   parse (object: SerialItemStack): obiItemStack;
   parse (object: SerialLocation): obLocation;
   parse (object: SerialVector): obuVector;
   /** Serializes a Bounding Box, Entity, Item Stack, Location, or Vector. */
   serialize (object: obuBoundingBox): SerialBoundingBox;
   serialize (object: obeEntity): SerialEntity;
   serialize (object: obiItemStack): SerialItemStack;
   serialize (object: obLocation): SerialLocation;
   serialize (object: obuVector): SerialVector;
}