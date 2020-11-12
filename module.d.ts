//**/ import { obuBoundingBox, obeEntity, obiItemStack, obLocation, obuVector } from '../../../dict/classes'; /*
import { obbBlock, obuBoundingBox, obeEntity, obiItemStack, obLocation, obuVector, obeItem, obcCommandSender, obOfflinePlayer } from '../core/dict/classes'; //*/

type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
type HasLocation = obLocation | SerialLocation | IsPhysical;
type HasVector = obuVector | SerialVector | HasLocation;

type isContainer = obbBlock | obeEntity | obiItemStack | SerialEntity | SerialItemStack;
type IsPhysical = obbBlock | obeEntity | SerialEntity;

type SerialBoundingBox = { class: 'BoundingBox', min: SerialVector, max: SerialVector };
type SerialEntity = { class: 'Entity', nbt: SerialNBTTagCompound, type: string };
type SerialItemStack = { class: 'ItemStack', nbt: SerialNBTTagCompound, type: string };
type SerialLocation = { class: 'Location', pitch: number, world: string, x: number, y: number, yaw: number, z: number };
type SerialNBTTag = SerialNBTTagByte | SerialNBTTagByteArray | SerialNBTTagCompound | SerialNBTTagDouble | SerialNBTTagFloat | SerialNBTTagInt | SerialNBTTagIntArray | SerialNBTTagList | SerialNBTTagLong | SerialNBTTagLongArray | SerialNBTTagShort | SerialNBTTagString
type SerialNBTTagByte = { class: 'NBTTagByte', value: number };
type SerialNBTTagByteArray = { class: 'NBTTagByteArray', value: number[] };
type SerialNBTTagCompound = { class: 'NBTTagCompound', value: { [x: string]: SerialNBTTag } };
type SerialNBTTagDouble = { class: 'NBTTagDouble', value: number };
type SerialNBTTagFloat = { class: 'NBTTagFloat', value: number };
type SerialNBTTagInt = { class: 'NBTTagInt', value: number };
type SerialNBTTagIntArray = { class: 'NBTTagIntArray', value: number[] };
type SerialNBTTagList = { class: 'NBTTagList', value: SerialNBTTag[] };
type SerialNBTTagLong = { class: 'NBTTagLong', value: number };
type SerialNBTTagLongArray = { class: 'NBTTagLongArray', value: number[] };
type SerialNBTTagShort = { class: 'NBTTagShort', value: number };
type SerialNBTTagString = { class: 'NBTTagString', value: string };
type SerialVector = { class: 'Vector', x: number, y: number, z: number };

export interface Main {
   /** Extrapolates a Bounding Box from the given input, if applicable. */
   boundingBox (object: HasBoundingBox): obuBoundingBox;
   boundingBox (...args: any[]): void;
   /** Returns a data store for the given input, if applicable. */
   data (object: IsContainer, prefix?: string): any;
   data (...args: any[]): void;
   /** Calculates the distance between two positional objects. If both objects are of type 'HasLocation' and are not in
    * the same world, Infinity will be returned. If "flat" is true, the Y axis will be ignored in the calculation. */
   dist (from: HasVector, to: HasVector, flat?: boolean): number;
   dist (...args: any[]): never;
   /** Drops an item stack at a specific location. If "naturally" is true, will add randomness to the drop akin to
    * the randomness of entity loot drops and mined block drops. */
   drop (location: HasLocation, item: HasItemStack, naturally?: boolean): obeItem;
   drop (...args: any[]): never;
   /** Extrapolates an Item Stack from the given input, if applicable. */
   itemStack (object: HasItemStack): obiItemStack;
   itemStack (...args: any[]): void;
   /** Extrapolates a Location from the given input, if applicable. */
   location (object: HasLocation): obLocation;
   location (...args: any[]): void;
   /** Parses a previously serialized Bounding Box, Entity, Item Stack, Location, or Vector. If the input does not match
    * one of these types, the input itself will be returned instead. */
   parse (object: SerialBoundingBox): obuBoundingBox;
   parse (object: SerialEntity): obeEntity;
   parse (object: SerialItemStack): obiItemStack;
   parse (object: SerialLocation): obLocation;
   parse (object: SerialVector): obuVector;
   parse <X> (object: X): X;
   /**  */
   player (name: string): obOfflinePlayer;
   player (...args: any[]): void;
   /** Returns a list of entities matching the given selector and context. If unspecified, selector will default to '@e'
    * and context will default to console. The console context targets from the spawn point of the main world. */
   select (query: string, context?: obcCommandSender): obeEntity[];
   /** Serializes a Bounding Box, Entity, Item Stack, Location, or Vector. If the input does not match
    * one of these types, the input itself will be returned instead. */
   serialize (object: obuBoundingBox): SerialBoundingBox;
   serialize (object: obeEntity): SerialEntity;
   serialize (object: obiItemStack): SerialItemStack;
   serialize (object: obLocation): SerialLocation;
   serialize (object: obuVector): SerialVector;
   serialize <X> (object: X): X;
   /** Extrapolates a Vector from the given input, if applicable. */
   vector (object: HasVector): obuVector;
   vector (...args: any[]): void;
}