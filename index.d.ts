import { obbBlock, obePlayer, obuBoundingBox, obeEntity, obiItemStack, obLocation, obuVector, obeItem, obcCommandSender, obOfflinePlayer } from '../../../dict/classes';
import { ValidEntityType, ValidMaterial } from './minecraft';
declare type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
declare type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
declare type HasLocation = obLocation | SerialLocation | IsPhysical;
declare type HasVector = obuVector | SerialVector | HasLocation;
declare type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
declare type IsEntity = obeEntity | obeItem | obePlayer | obOfflinePlayer;
declare type IsPhysical = obbBlock | IsEntity | SerialEntity;
declare type SerialBoundingBox = {
    class: 'BoundingBox';
    min: SerialVector;
    max: SerialVector;
};
declare type SerialEntity = {
    class: 'Entity';
    location: SerialLocation;
    nbt: SerialNBTTagCompound;
    type: keyof typeof ValidEntityType;
    uuid: string;
};
declare type SerialItemStack = {
    amount: number;
    class: 'ItemStack';
    nbt: SerialNBTTagCompound;
    type: keyof typeof ValidMaterial;
};
declare type SerialLocation = {
    class: 'Location';
    pitch: number;
    world: string;
    x: number;
    y: number;
    yaw: number;
    z: number;
};
declare type SerialVector = {
    class: 'Vector';
    x: number;
    y: number;
    z: number;
};
declare type SerialNBTTagCompound = {
    class: 'NBTTagCompound';
    value: {
        [x: string]: SerialNBTTag;
    };
};
declare type SerialNBTTag = {
    class: 'NBTTagByte';
    value: number;
} | {
    class: 'NBTTagByteArray';
    value: number[];
} | {
    class: 'NBTTagCompound';
    value: {
        [x: string]: SerialNBTTag;
    };
} | {
    class: 'NBTTagDouble';
    value: number;
} | {
    class: 'NBTTagFloat';
    value: number;
} | {
    class: 'NBTTagInt';
    value: number;
} | {
    class: 'NBTTagIntArray';
    value: number[];
} | {
    class: 'NBTTagList';
    value: SerialNBTTag[];
} | {
    class: 'NBTTagLong';
    value: number;
} | {
    class: 'NBTTagLongArray';
    value: number[];
} | {
    class: 'NBTTagShort';
    value: number;
} | {
    class: 'NBTTagString';
    value: string;
};
declare type MantleParse = {
    (object: SerialBoundingBox): obuBoundingBox;
    (object: SerialEntity): obeEntity;
    (object: SerialItemStack): obiItemStack;
    (object: SerialLocation): obLocation;
    (object: SerialVector): obuVector;
    <X>(object: X): X;
};
declare type MantleSerialize = {
    (object: obuBoundingBox): SerialBoundingBox;
    (object: IsEntity): SerialEntity;
    (object: obiItemStack): SerialItemStack;
    (object: obLocation): SerialLocation;
    (object: obuVector): SerialVector;
    <X>(object: X): X;
};
export declare const Main: {
    boundingBox(arg1: HasBoundingBox): obuBoundingBox;
    data(arg1: IsContainer, arg2?: string): any;
    dist(arg1: HasVector, arg2: HasVector, arg3?: boolean): number;
    drop(arg1: HasLocation, arg2: HasItemStack, arg3?: boolean): void;
    itemStack(arg1: HasItemStack): obiItemStack;
    location(arg1: any): obLocation;
    parse: MantleParse;
    player(arg1: string): obOfflinePlayer;
    select(arg1?: string, arg2?: obcCommandSender): obeEntity[];
    serialize: MantleSerialize;
    vector(arg1: HasVector): obuVector;
};
export {};
