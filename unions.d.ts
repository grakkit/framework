import { obMaterial, obeEntityType } from "./../../../dict/classes";

export class ValidEntityType {
   static AREA_EFFECT_CLOUD: obeEntityType;
   /**Mechanical entity with an inventory for placing weapons \/ armor into.*/
   static ARMOR_STAND: obeEntityType;
   /**An arrow projectile; may get stuck in the ground.*/
   static ARROW: obeEntityType;
   static BAT: obeEntityType;
   static BEE: obeEntityType;
   static BLAZE: obeEntityType;
   /**A placed boat.*/
   static BOAT: obeEntityType;
   static CAT: obeEntityType;
   static CAVE_SPIDER: obeEntityType;
   static CHICKEN: obeEntityType;
   static COD: obeEntityType;
   static COW: obeEntityType;
   static CREEPER: obeEntityType;
   static DOLPHIN: obeEntityType;
   static DONKEY: obeEntityType;
   /**Like FIREBALL but with added effects.*/
   static DRAGON_FIREBALL: obeEntityType;
   /**An item resting on the ground.*/
   static DROPPED_ITEM: obeEntityType;
   static DROWNED: obeEntityType;
   /**A flying chicken egg.*/
   static EGG: obeEntityType;
   static ELDER_GUARDIAN: obeEntityType;
   static ENDER_CRYSTAL: obeEntityType;
   static ENDER_DRAGON: obeEntityType;
   /**A flying ender pearl.*/
   static ENDER_PEARL: obeEntityType;
   /**An ender eye signal.*/
   static ENDER_SIGNAL: obeEntityType;
   static ENDERMAN: obeEntityType;
   static ENDERMITE: obeEntityType;
   static EVOKER: obeEntityType;
   static EVOKER_FANGS: obeEntityType;
   /**An experience orb.*/
   static EXPERIENCE_ORB: obeEntityType;
   /**A block that is going to or is about to fall.*/
   static FALLING_BLOCK: obeEntityType;
   /**A flying large fireball, as thrown by a Ghast for example.*/
   static FIREBALL: obeEntityType;
   /**Internal representation of a Firework once it has been launched.*/
   static FIREWORK: obeEntityType;
   /**A fishing line and bobber.*/
   static FISHING_HOOK: obeEntityType;
   static FOX: obeEntityType;
   static GHAST: obeEntityType;
   static GIANT: obeEntityType;
   static GUARDIAN: obeEntityType;
   static HOGLIN: obeEntityType;
   static HORSE: obeEntityType;
   static HUSK: obeEntityType;
   static ILLUSIONER: obeEntityType;
   static IRON_GOLEM: obeEntityType;
   /**An item frame on a wall.*/
   static ITEM_FRAME: obeEntityType;
   /**A leash attached to a fencepost.*/
   static LEASH_HITCH: obeEntityType;
   /**A bolt of lightning.*/
   static LIGHTNING: obeEntityType;
   static LLAMA: obeEntityType;
   static LLAMA_SPIT: obeEntityType;
   static MAGMA_CUBE: obeEntityType;
   static MINECART: obeEntityType;
   static MINECART_CHEST: obeEntityType;
   static MINECART_COMMAND: obeEntityType;
   static MINECART_FURNACE: obeEntityType;
   static MINECART_HOPPER: obeEntityType;
   static MINECART_MOB_SPAWNER: obeEntityType;
   static MINECART_TNT: obeEntityType;
   static MULE: obeEntityType;
   static MUSHROOM_COW: obeEntityType;
   static OCELOT: obeEntityType;
   /**A painting on a wall.*/
   static PAINTING: obeEntityType;
   static PANDA: obeEntityType;
   static PARROT: obeEntityType;
   static PHANTOM: obeEntityType;
   static PIG: obeEntityType;
   static PIGLIN: obeEntityType;
   static PIGLIN_BRUTE: obeEntityType;
   static PILLAGER: obeEntityType;
   static PLAYER: obeEntityType;
   static POLAR_BEAR: obeEntityType;
   /**Primed TNT that is about to explode.*/
   static PRIMED_TNT: obeEntityType;
   static PUFFERFISH: obeEntityType;
   static RABBIT: obeEntityType;
   static RAVAGER: obeEntityType;
   static SALMON: obeEntityType;
   static SHEEP: obeEntityType;
   static SHULKER: obeEntityType;
   /**Bullet fired by SHULKER.*/
   static SHULKER_BULLET: obeEntityType;
   static SILVERFISH: obeEntityType;
   static SKELETON: obeEntityType;
   static SKELETON_HORSE: obeEntityType;
   static SLIME: obeEntityType;
   /**A flying small fireball, such as thrown by a Blaze or player.*/
   static SMALL_FIREBALL: obeEntityType;
   /**A flying snowball.*/
   static SNOWBALL: obeEntityType;
   static SNOWMAN: obeEntityType;
   /**Like ARROW but causes the PotionEffectType.GLOWING effect on all team members.*/
   static SPECTRAL_ARROW: obeEntityType;
   static SPIDER: obeEntityType;
   /**A flying splash potion.*/
   static SPLASH_POTION: obeEntityType;
   static SQUID: obeEntityType;
   static STRAY: obeEntityType;
   static STRIDER: obeEntityType;
   /**A flying experience bottle.*/
   static THROWN_EXP_BOTTLE: obeEntityType;
   static TRADER_LLAMA: obeEntityType;
   static TRIDENT: obeEntityType;
   static TROPICAL_FISH: obeEntityType;
   static TURTLE: obeEntityType;
   /**An unknown entity without an Entity Class*/
   static UNKNOWN: obeEntityType;
   static VEX: obeEntityType;
   static VILLAGER: obeEntityType;
   static VINDICATOR: obeEntityType;
   static WANDERING_TRADER: obeEntityType;
   static WITCH: obeEntityType;
   static WITHER: obeEntityType;
   static WITHER_SKELETON: obeEntityType;
   /**A flying wither skull projectile.*/
   static WITHER_SKULL: obeEntityType;
   static WOLF: obeEntityType;
   static ZOGLIN: obeEntityType;
   static ZOMBIE: obeEntityType;
   static ZOMBIE_HORSE: obeEntityType;
   static ZOMBIE_VILLAGER: obeEntityType;
   static ZOMBIFIED_PIGLIN: obeEntityType;
}

export class ValidMaterial {
   static ACACIA_BOAT: obMaterial;
   /**BlockData: Switch*/
   static ACACIA_BUTTON: obMaterial;
   /**BlockData: Door*/
   static ACACIA_DOOR: obMaterial;
   /**BlockData: Fence*/
   static ACACIA_FENCE: obMaterial;
   /**BlockData: Gate*/
   static ACACIA_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static ACACIA_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static ACACIA_LOG: obMaterial;
   static ACACIA_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static ACACIA_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static ACACIA_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static ACACIA_SIGN: obMaterial;
   /**BlockData: Slab*/
   static ACACIA_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static ACACIA_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static ACACIA_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static ACACIA_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static ACACIA_WOOD: obMaterial;
   /**BlockData: RedstoneRail*/
   static ACTIVATOR_RAIL: obMaterial;
   static AIR: obMaterial;
   static ALLIUM: obMaterial;
   static ANCIENT_DEBRIS: obMaterial;
   static ANDESITE: obMaterial;
   /**BlockData: Slab*/
   static ANDESITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static ANDESITE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static ANDESITE_WALL: obMaterial;
   /**BlockData: Directional*/
   static ANVIL: obMaterial;
   static APPLE: obMaterial;
   static ARMOR_STAND: obMaterial;
   static ARROW: obMaterial;
   /**BlockData: Directional*/
   static ATTACHED_MELON_STEM: obMaterial;
   /**BlockData: Directional*/
   static ATTACHED_PUMPKIN_STEM: obMaterial;
   static AZURE_BLUET: obMaterial;
   static BAKED_POTATO: obMaterial;
   /**BlockData: Bamboo*/
   static BAMBOO: obMaterial;
   static BAMBOO_SAPLING: obMaterial;
   /**BlockData: Directional*/
   static BARREL: obMaterial;
   static BARRIER: obMaterial;
   /**BlockData: Orientable*/
   static BASALT: obMaterial;
   static BAT_SPAWN_EGG: obMaterial;
   static BEACON: obMaterial;
   static BEDROCK: obMaterial;
   /**BlockData: Beehive*/
   static BEE_NEST: obMaterial;
   static BEE_SPAWN_EGG: obMaterial;
   static BEEF: obMaterial;
   /**BlockData: Beehive*/
   static BEEHIVE: obMaterial;
   static BEETROOT: obMaterial;
   static BEETROOT_SEEDS: obMaterial;
   static BEETROOT_SOUP: obMaterial;
   /**BlockData: Ageable*/
   static BEETROOTS: obMaterial;
   /**BlockData: Bell*/
   static BELL: obMaterial;
   static BIRCH_BOAT: obMaterial;
   /**BlockData: Switch*/
   static BIRCH_BUTTON: obMaterial;
   /**BlockData: Door*/
   static BIRCH_DOOR: obMaterial;
   /**BlockData: Fence*/
   static BIRCH_FENCE: obMaterial;
   /**BlockData: Gate*/
   static BIRCH_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static BIRCH_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static BIRCH_LOG: obMaterial;
   static BIRCH_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static BIRCH_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static BIRCH_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static BIRCH_SIGN: obMaterial;
   /**BlockData: Slab*/
   static BIRCH_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static BIRCH_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static BIRCH_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static BIRCH_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static BIRCH_WOOD: obMaterial;
   /**BlockData: Rotatable*/
   static BLACK_BANNER: obMaterial;
   /**BlockData: Bed*/
   static BLACK_BED: obMaterial;
   static BLACK_CARPET: obMaterial;
   static BLACK_CONCRETE: obMaterial;
   static BLACK_CONCRETE_POWDER: obMaterial;
   static BLACK_DYE: obMaterial;
   /**BlockData: Directional*/
   static BLACK_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static BLACK_SHULKER_BOX: obMaterial;
   static BLACK_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static BLACK_STAINED_GLASS_PANE: obMaterial;
   static BLACK_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static BLACK_WALL_BANNER: obMaterial;
   static BLACK_WOOL: obMaterial;
   static BLACKSTONE: obMaterial;
   /**BlockData: Slab*/
   static BLACKSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static BLACKSTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static BLACKSTONE_WALL: obMaterial;
   /**BlockData: Furnace*/
   static BLAST_FURNACE: obMaterial;
   static BLAZE_POWDER: obMaterial;
   static BLAZE_ROD: obMaterial;
   static BLAZE_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static BLUE_BANNER: obMaterial;
   /**BlockData: Bed*/
   static BLUE_BED: obMaterial;
   static BLUE_CARPET: obMaterial;
   static BLUE_CONCRETE: obMaterial;
   static BLUE_CONCRETE_POWDER: obMaterial;
   static BLUE_DYE: obMaterial;
   /**BlockData: Directional*/
   static BLUE_GLAZED_TERRACOTTA: obMaterial;
   static BLUE_ICE: obMaterial;
   static BLUE_ORCHID: obMaterial;
   /**BlockData: Directional*/
   static BLUE_SHULKER_BOX: obMaterial;
   static BLUE_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static BLUE_STAINED_GLASS_PANE: obMaterial;
   static BLUE_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static BLUE_WALL_BANNER: obMaterial;
   static BLUE_WOOL: obMaterial;
   static BONE: obMaterial;
   /**BlockData: Orientable*/
   static BONE_BLOCK: obMaterial;
   static BONE_MEAL: obMaterial;
   static BOOK: obMaterial;
   static BOOKSHELF: obMaterial;
   static BOW: obMaterial;
   static BOWL: obMaterial;
   /**BlockData: Waterlogged*/
   static BRAIN_CORAL: obMaterial;
   static BRAIN_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static BRAIN_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static BRAIN_CORAL_WALL_FAN: obMaterial;
   static BREAD: obMaterial;
   /**BlockData: BrewingStand*/
   static BREWING_STAND: obMaterial;
   static BRICK: obMaterial;
   /**BlockData: Slab*/
   static BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static BRICK_WALL: obMaterial;
   static BRICKS: obMaterial;
   /**BlockData: Rotatable*/
   static BROWN_BANNER: obMaterial;
   /**BlockData: Bed*/
   static BROWN_BED: obMaterial;
   static BROWN_CARPET: obMaterial;
   static BROWN_CONCRETE: obMaterial;
   static BROWN_CONCRETE_POWDER: obMaterial;
   static BROWN_DYE: obMaterial;
   /**BlockData: Directional*/
   static BROWN_GLAZED_TERRACOTTA: obMaterial;
   static BROWN_MUSHROOM: obMaterial;
   /**BlockData: MultipleFacing*/
   static BROWN_MUSHROOM_BLOCK: obMaterial;
   /**BlockData: Directional*/
   static BROWN_SHULKER_BOX: obMaterial;
   static BROWN_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static BROWN_STAINED_GLASS_PANE: obMaterial;
   static BROWN_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static BROWN_WALL_BANNER: obMaterial;
   static BROWN_WOOL: obMaterial;
   /**BlockData: BubbleColumn*/
   static BUBBLE_COLUMN: obMaterial;
   /**BlockData: Waterlogged*/
   static BUBBLE_CORAL: obMaterial;
   static BUBBLE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static BUBBLE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static BUBBLE_CORAL_WALL_FAN: obMaterial;
   static BUCKET: obMaterial;
   /**BlockData: Ageable*/
   static CACTUS: obMaterial;
   /**BlockData: Cake*/
   static CAKE: obMaterial;
   /**BlockData: Campfire*/
   static CAMPFIRE: obMaterial;
   static CARROT: obMaterial;
   static CARROT_ON_A_STICK: obMaterial;
   /**BlockData: Ageable*/
   static CARROTS: obMaterial;
   static CARTOGRAPHY_TABLE: obMaterial;
   /**BlockData: Directional*/
   static CARVED_PUMPKIN: obMaterial;
   static CAT_SPAWN_EGG: obMaterial;
   /**BlockData: Levelled*/
   static CAULDRON: obMaterial;
   static CAVE_AIR: obMaterial;
   static CAVE_SPIDER_SPAWN_EGG: obMaterial;
   /**BlockData: Chain*/
   static CHAIN: obMaterial;
   /**BlockData: CommandBlock*/
   static CHAIN_COMMAND_BLOCK: obMaterial;
   static CHAINMAIL_BOOTS: obMaterial;
   static CHAINMAIL_CHESTPLATE: obMaterial;
   static CHAINMAIL_HELMET: obMaterial;
   static CHAINMAIL_LEGGINGS: obMaterial;
   static CHARCOAL: obMaterial;
   /**BlockData: Chest*/
   static CHEST: obMaterial;
   static CHEST_MINECART: obMaterial;
   static CHICKEN: obMaterial;
   static CHICKEN_SPAWN_EGG: obMaterial;
   /**BlockData: Directional*/
   static CHIPPED_ANVIL: obMaterial;
   static CHISELED_NETHER_BRICKS: obMaterial;
   static CHISELED_POLISHED_BLACKSTONE: obMaterial;
   static CHISELED_QUARTZ_BLOCK: obMaterial;
   static CHISELED_RED_SANDSTONE: obMaterial;
   static CHISELED_SANDSTONE: obMaterial;
   static CHISELED_STONE_BRICKS: obMaterial;
   /**BlockData: Ageable*/
   static CHORUS_FLOWER: obMaterial;
   static CHORUS_FRUIT: obMaterial;
   /**BlockData: MultipleFacing*/
   static CHORUS_PLANT: obMaterial;
   static CLAY: obMaterial;
   static CLAY_BALL: obMaterial;
   static CLOCK: obMaterial;
   static COAL: obMaterial;
   static COAL_BLOCK: obMaterial;
   static COAL_ORE: obMaterial;
   static COARSE_DIRT: obMaterial;
   static COBBLESTONE: obMaterial;
   /**BlockData: Slab*/
   static COBBLESTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static COBBLESTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static COBBLESTONE_WALL: obMaterial;
   static COBWEB: obMaterial;
   /**BlockData: Cocoa*/
   static COCOA: obMaterial;
   static COCOA_BEANS: obMaterial;
   static COD: obMaterial;
   static COD_BUCKET: obMaterial;
   static COD_SPAWN_EGG: obMaterial;
   /**BlockData: CommandBlock*/
   static COMMAND_BLOCK: obMaterial;
   static COMMAND_BLOCK_MINECART: obMaterial;
   /**BlockData: Comparator*/
   static COMPARATOR: obMaterial;
   static COMPASS: obMaterial;
   /**BlockData: Levelled*/
   static COMPOSTER: obMaterial;
   /**BlockData: Waterlogged*/
   static CONDUIT: obMaterial;
   static COOKED_BEEF: obMaterial;
   static COOKED_CHICKEN: obMaterial;
   static COOKED_COD: obMaterial;
   static COOKED_MUTTON: obMaterial;
   static COOKED_PORKCHOP: obMaterial;
   static COOKED_RABBIT: obMaterial;
   static COOKED_SALMON: obMaterial;
   static COOKIE: obMaterial;
   static CORNFLOWER: obMaterial;
   static COW_SPAWN_EGG: obMaterial;
   static CRACKED_NETHER_BRICKS: obMaterial;
   static CRACKED_POLISHED_BLACKSTONE_BRICKS: obMaterial;
   static CRACKED_STONE_BRICKS: obMaterial;
   static CRAFTING_TABLE: obMaterial;
   static CREEPER_BANNER_PATTERN: obMaterial;
   /**BlockData: Rotatable*/
   static CREEPER_HEAD: obMaterial;
   static CREEPER_SPAWN_EGG: obMaterial;
   /**BlockData: Directional*/
   static CREEPER_WALL_HEAD: obMaterial;
   /**BlockData: Switch*/
   static CRIMSON_BUTTON: obMaterial;
   /**BlockData: Door*/
   static CRIMSON_DOOR: obMaterial;
   /**BlockData: Fence*/
   static CRIMSON_FENCE: obMaterial;
   /**BlockData: Gate*/
   static CRIMSON_FENCE_GATE: obMaterial;
   static CRIMSON_FUNGUS: obMaterial;
   /**BlockData: Orientable*/
   static CRIMSON_HYPHAE: obMaterial;
   static CRIMSON_NYLIUM: obMaterial;
   static CRIMSON_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static CRIMSON_PRESSURE_PLATE: obMaterial;
   static CRIMSON_ROOTS: obMaterial;
   /**BlockData: Sign*/
   static CRIMSON_SIGN: obMaterial;
   /**BlockData: Slab*/
   static CRIMSON_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static CRIMSON_STAIRS: obMaterial;
   /**BlockData: Orientable*/
   static CRIMSON_STEM: obMaterial;
   /**BlockData: TrapDoor*/
   static CRIMSON_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static CRIMSON_WALL_SIGN: obMaterial;
   static CROSSBOW: obMaterial;
   static CRYING_OBSIDIAN: obMaterial;
   static CUT_RED_SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static CUT_RED_SANDSTONE_SLAB: obMaterial;
   static CUT_SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static CUT_SANDSTONE_SLAB: obMaterial;
   /**BlockData: Rotatable*/
   static CYAN_BANNER: obMaterial;
   /**BlockData: Bed*/
   static CYAN_BED: obMaterial;
   static CYAN_CARPET: obMaterial;
   static CYAN_CONCRETE: obMaterial;
   static CYAN_CONCRETE_POWDER: obMaterial;
   static CYAN_DYE: obMaterial;
   /**BlockData: Directional*/
   static CYAN_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static CYAN_SHULKER_BOX: obMaterial;
   static CYAN_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static CYAN_STAINED_GLASS_PANE: obMaterial;
   static CYAN_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static CYAN_WALL_BANNER: obMaterial;
   static CYAN_WOOL: obMaterial;
   /**BlockData: Directional*/
   static DAMAGED_ANVIL: obMaterial;
   static DANDELION: obMaterial;
   static DARK_OAK_BOAT: obMaterial;
   /**BlockData: Switch*/
   static DARK_OAK_BUTTON: obMaterial;
   /**BlockData: Door*/
   static DARK_OAK_DOOR: obMaterial;
   /**BlockData: Fence*/
   static DARK_OAK_FENCE: obMaterial;
   /**BlockData: Gate*/
   static DARK_OAK_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static DARK_OAK_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static DARK_OAK_LOG: obMaterial;
   static DARK_OAK_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static DARK_OAK_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static DARK_OAK_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static DARK_OAK_SIGN: obMaterial;
   /**BlockData: Slab*/
   static DARK_OAK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static DARK_OAK_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static DARK_OAK_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static DARK_OAK_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static DARK_OAK_WOOD: obMaterial;
   static DARK_PRISMARINE: obMaterial;
   /**BlockData: Slab*/
   static DARK_PRISMARINE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static DARK_PRISMARINE_STAIRS: obMaterial;
   /**BlockData: DaylightDetector*/
   static DAYLIGHT_DETECTOR: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_BRAIN_CORAL: obMaterial;
   static DEAD_BRAIN_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_BRAIN_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static DEAD_BRAIN_CORAL_WALL_FAN: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_BUBBLE_CORAL: obMaterial;
   static DEAD_BUBBLE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_BUBBLE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static DEAD_BUBBLE_CORAL_WALL_FAN: obMaterial;
   static DEAD_BUSH: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_FIRE_CORAL: obMaterial;
   static DEAD_FIRE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_FIRE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static DEAD_FIRE_CORAL_WALL_FAN: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_HORN_CORAL: obMaterial;
   static DEAD_HORN_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_HORN_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static DEAD_HORN_CORAL_WALL_FAN: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_TUBE_CORAL: obMaterial;
   static DEAD_TUBE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static DEAD_TUBE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static DEAD_TUBE_CORAL_WALL_FAN: obMaterial;
   static DEBUG_STICK: obMaterial;
   /**BlockData: RedstoneRail*/
   static DETECTOR_RAIL: obMaterial;
   static DIAMOND: obMaterial;
   static DIAMOND_AXE: obMaterial;
   static DIAMOND_BLOCK: obMaterial;
   static DIAMOND_BOOTS: obMaterial;
   static DIAMOND_CHESTPLATE: obMaterial;
   static DIAMOND_HELMET: obMaterial;
   static DIAMOND_HOE: obMaterial;
   static DIAMOND_HORSE_ARMOR: obMaterial;
   static DIAMOND_LEGGINGS: obMaterial;
   static DIAMOND_ORE: obMaterial;
   static DIAMOND_PICKAXE: obMaterial;
   static DIAMOND_SHOVEL: obMaterial;
   static DIAMOND_SWORD: obMaterial;
   static DIORITE: obMaterial;
   /**BlockData: Slab*/
   static DIORITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static DIORITE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static DIORITE_WALL: obMaterial;
   static DIRT: obMaterial;
   /**BlockData: Dispenser*/
   static DISPENSER: obMaterial;
   static DOLPHIN_SPAWN_EGG: obMaterial;
   static DONKEY_SPAWN_EGG: obMaterial;
   static DRAGON_BREATH: obMaterial;
   static DRAGON_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static DRAGON_HEAD: obMaterial;
   /**BlockData: Directional*/
   static DRAGON_WALL_HEAD: obMaterial;
   static DRIED_KELP: obMaterial;
   static DRIED_KELP_BLOCK: obMaterial;
   /**BlockData: Dispenser*/
   static DROPPER: obMaterial;
   static DROWNED_SPAWN_EGG: obMaterial;
   static EGG: obMaterial;
   static ELDER_GUARDIAN_SPAWN_EGG: obMaterial;
   static ELYTRA: obMaterial;
   static EMERALD: obMaterial;
   static EMERALD_BLOCK: obMaterial;
   static EMERALD_ORE: obMaterial;
   static ENCHANTED_BOOK: obMaterial;
   static ENCHANTED_GOLDEN_APPLE: obMaterial;
   static ENCHANTING_TABLE: obMaterial;
   static END_CRYSTAL: obMaterial;
   static END_GATEWAY: obMaterial;
   static END_PORTAL: obMaterial;
   /**BlockData: EndPortalFrame*/
   static END_PORTAL_FRAME: obMaterial;
   /**BlockData: Directional*/
   static END_ROD: obMaterial;
   static END_STONE: obMaterial;
   /**BlockData: Slab*/
   static END_STONE_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static END_STONE_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static END_STONE_BRICK_WALL: obMaterial;
   static END_STONE_BRICKS: obMaterial;
   /**BlockData: EnderChest*/
   static ENDER_CHEST: obMaterial;
   static ENDER_EYE: obMaterial;
   static ENDER_PEARL: obMaterial;
   static ENDERMAN_SPAWN_EGG: obMaterial;
   static ENDERMITE_SPAWN_EGG: obMaterial;
   static EVOKER_SPAWN_EGG: obMaterial;
   static EXPERIENCE_BOTTLE: obMaterial;
   /**BlockData: Farmland*/
   static FARMLAND: obMaterial;
   static FEATHER: obMaterial;
   static FERMENTED_SPIDER_EYE: obMaterial;
   static FERN: obMaterial;
   static FILLED_MAP: obMaterial;
   /**BlockData: Fire*/
   static FIRE: obMaterial;
   static FIRE_CHARGE: obMaterial;
   /**BlockData: Waterlogged*/
   static FIRE_CORAL: obMaterial;
   static FIRE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static FIRE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static FIRE_CORAL_WALL_FAN: obMaterial;
   static FIREWORK_ROCKET: obMaterial;
   static FIREWORK_STAR: obMaterial;
   static FISHING_ROD: obMaterial;
   static FLETCHING_TABLE: obMaterial;
   static FLINT: obMaterial;
   static FLINT_AND_STEEL: obMaterial;
   static FLOWER_BANNER_PATTERN: obMaterial;
   static FLOWER_POT: obMaterial;
   static FOX_SPAWN_EGG: obMaterial;
   /**BlockData: Ageable*/
   static FROSTED_ICE: obMaterial;
   /**BlockData: Furnace*/
   static FURNACE: obMaterial;
   static FURNACE_MINECART: obMaterial;
   static GHAST_SPAWN_EGG: obMaterial;
   static GHAST_TEAR: obMaterial;
   static GILDED_BLACKSTONE: obMaterial;
   static GLASS: obMaterial;
   static GLASS_BOTTLE: obMaterial;
   /**BlockData: Fence*/
   static GLASS_PANE: obMaterial;
   static GLISTERING_MELON_SLICE: obMaterial;
   static GLOBE_BANNER_PATTERN: obMaterial;
   static GLOWSTONE: obMaterial;
   static GLOWSTONE_DUST: obMaterial;
   static GOLD_BLOCK: obMaterial;
   static GOLD_INGOT: obMaterial;
   static GOLD_NUGGET: obMaterial;
   static GOLD_ORE: obMaterial;
   static GOLDEN_APPLE: obMaterial;
   static GOLDEN_AXE: obMaterial;
   static GOLDEN_BOOTS: obMaterial;
   static GOLDEN_CARROT: obMaterial;
   static GOLDEN_CHESTPLATE: obMaterial;
   static GOLDEN_HELMET: obMaterial;
   static GOLDEN_HOE: obMaterial;
   static GOLDEN_HORSE_ARMOR: obMaterial;
   static GOLDEN_LEGGINGS: obMaterial;
   static GOLDEN_PICKAXE: obMaterial;
   static GOLDEN_SHOVEL: obMaterial;
   static GOLDEN_SWORD: obMaterial;
   static GRANITE: obMaterial;
   /**BlockData: Slab*/
   static GRANITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static GRANITE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static GRANITE_WALL: obMaterial;
   static GRASS: obMaterial;
   /**BlockData: Snowable*/
   static GRASS_BLOCK: obMaterial;
   static GRASS_PATH: obMaterial;
   static GRAVEL: obMaterial;
   /**BlockData: Rotatable*/
   static GRAY_BANNER: obMaterial;
   /**BlockData: Bed*/
   static GRAY_BED: obMaterial;
   static GRAY_CARPET: obMaterial;
   static GRAY_CONCRETE: obMaterial;
   static GRAY_CONCRETE_POWDER: obMaterial;
   static GRAY_DYE: obMaterial;
   /**BlockData: Directional*/
   static GRAY_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static GRAY_SHULKER_BOX: obMaterial;
   static GRAY_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static GRAY_STAINED_GLASS_PANE: obMaterial;
   static GRAY_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static GRAY_WALL_BANNER: obMaterial;
   static GRAY_WOOL: obMaterial;
   /**BlockData: Rotatable*/
   static GREEN_BANNER: obMaterial;
   /**BlockData: Bed*/
   static GREEN_BED: obMaterial;
   static GREEN_CARPET: obMaterial;
   static GREEN_CONCRETE: obMaterial;
   static GREEN_CONCRETE_POWDER: obMaterial;
   static GREEN_DYE: obMaterial;
   /**BlockData: Directional*/
   static GREEN_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static GREEN_SHULKER_BOX: obMaterial;
   static GREEN_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static GREEN_STAINED_GLASS_PANE: obMaterial;
   static GREEN_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static GREEN_WALL_BANNER: obMaterial;
   static GREEN_WOOL: obMaterial;
   /**BlockData: Grindstone*/
   static GRINDSTONE: obMaterial;
   static GUARDIAN_SPAWN_EGG: obMaterial;
   static GUNPOWDER: obMaterial;
   /**BlockData: Orientable*/
   static HAY_BLOCK: obMaterial;
   static HEART_OF_THE_SEA: obMaterial;
   /**BlockData: AnaloguePowerable*/
   static HEAVY_WEIGHTED_PRESSURE_PLATE: obMaterial;
   static HOGLIN_SPAWN_EGG: obMaterial;
   static HONEY_BLOCK: obMaterial;
   static HONEY_BOTTLE: obMaterial;
   static HONEYCOMB: obMaterial;
   static HONEYCOMB_BLOCK: obMaterial;
   /**BlockData: Hopper*/
   static HOPPER: obMaterial;
   static HOPPER_MINECART: obMaterial;
   /**BlockData: Waterlogged*/
   static HORN_CORAL: obMaterial;
   static HORN_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static HORN_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static HORN_CORAL_WALL_FAN: obMaterial;
   static HORSE_SPAWN_EGG: obMaterial;
   static HUSK_SPAWN_EGG: obMaterial;
   static ICE: obMaterial;
   static INFESTED_CHISELED_STONE_BRICKS: obMaterial;
   static INFESTED_COBBLESTONE: obMaterial;
   static INFESTED_CRACKED_STONE_BRICKS: obMaterial;
   static INFESTED_MOSSY_STONE_BRICKS: obMaterial;
   static INFESTED_STONE: obMaterial;
   static INFESTED_STONE_BRICKS: obMaterial;
   static INK_SAC: obMaterial;
   static IRON_AXE: obMaterial;
   /**BlockData: Fence*/
   static IRON_BARS: obMaterial;
   static IRON_BLOCK: obMaterial;
   static IRON_BOOTS: obMaterial;
   static IRON_CHESTPLATE: obMaterial;
   /**BlockData: Door*/
   static IRON_DOOR: obMaterial;
   static IRON_HELMET: obMaterial;
   static IRON_HOE: obMaterial;
   static IRON_HORSE_ARMOR: obMaterial;
   static IRON_INGOT: obMaterial;
   static IRON_LEGGINGS: obMaterial;
   static IRON_NUGGET: obMaterial;
   static IRON_ORE: obMaterial;
   static IRON_PICKAXE: obMaterial;
   static IRON_SHOVEL: obMaterial;
   static IRON_SWORD: obMaterial;
   /**BlockData: TrapDoor*/
   static IRON_TRAPDOOR: obMaterial;
   static ITEM_FRAME: obMaterial;
   /**BlockData: Directional*/
   static JACK_O_LANTERN: obMaterial;
   /**BlockData: Jigsaw*/
   static JIGSAW: obMaterial;
   /**BlockData: Jukebox*/
   static JUKEBOX: obMaterial;
   static JUNGLE_BOAT: obMaterial;
   /**BlockData: Switch*/
   static JUNGLE_BUTTON: obMaterial;
   /**BlockData: Door*/
   static JUNGLE_DOOR: obMaterial;
   /**BlockData: Fence*/
   static JUNGLE_FENCE: obMaterial;
   /**BlockData: Gate*/
   static JUNGLE_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static JUNGLE_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static JUNGLE_LOG: obMaterial;
   static JUNGLE_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static JUNGLE_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static JUNGLE_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static JUNGLE_SIGN: obMaterial;
   /**BlockData: Slab*/
   static JUNGLE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static JUNGLE_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static JUNGLE_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static JUNGLE_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static JUNGLE_WOOD: obMaterial;
   /**BlockData: Ageable*/
   static KELP: obMaterial;
   static KELP_PLANT: obMaterial;
   static KNOWLEDGE_BOOK: obMaterial;
   /**BlockData: Ladder*/
   static LADDER: obMaterial;
   /**BlockData: Lantern*/
   static LANTERN: obMaterial;
   static LAPIS_BLOCK: obMaterial;
   static LAPIS_LAZULI: obMaterial;
   static LAPIS_ORE: obMaterial;
   /**BlockData: Bisected*/
   static LARGE_FERN: obMaterial;
   /**BlockData: Levelled*/
   static LAVA: obMaterial;
   static LAVA_BUCKET: obMaterial;
   static LEAD: obMaterial;
   static LEATHER: obMaterial;
   static LEATHER_BOOTS: obMaterial;
   static LEATHER_CHESTPLATE: obMaterial;
   static LEATHER_HELMET: obMaterial;
   static LEATHER_HORSE_ARMOR: obMaterial;
   static LEATHER_LEGGINGS: obMaterial;
   /**BlockData: Lectern*/
   static LECTERN: obMaterial;
   /**BlockData: Switch*/
   static LEVER: obMaterial;
   /**BlockData: Rotatable*/
   static LIGHT_BLUE_BANNER: obMaterial;
   /**BlockData: Bed*/
   static LIGHT_BLUE_BED: obMaterial;
   static LIGHT_BLUE_CARPET: obMaterial;
   static LIGHT_BLUE_CONCRETE: obMaterial;
   static LIGHT_BLUE_CONCRETE_POWDER: obMaterial;
   static LIGHT_BLUE_DYE: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_BLUE_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_BLUE_SHULKER_BOX: obMaterial;
   static LIGHT_BLUE_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static LIGHT_BLUE_STAINED_GLASS_PANE: obMaterial;
   static LIGHT_BLUE_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_BLUE_WALL_BANNER: obMaterial;
   static LIGHT_BLUE_WOOL: obMaterial;
   /**BlockData: Rotatable*/
   static LIGHT_GRAY_BANNER: obMaterial;
   /**BlockData: Bed*/
   static LIGHT_GRAY_BED: obMaterial;
   static LIGHT_GRAY_CARPET: obMaterial;
   static LIGHT_GRAY_CONCRETE: obMaterial;
   static LIGHT_GRAY_CONCRETE_POWDER: obMaterial;
   static LIGHT_GRAY_DYE: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_GRAY_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_GRAY_SHULKER_BOX: obMaterial;
   static LIGHT_GRAY_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static LIGHT_GRAY_STAINED_GLASS_PANE: obMaterial;
   static LIGHT_GRAY_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIGHT_GRAY_WALL_BANNER: obMaterial;
   static LIGHT_GRAY_WOOL: obMaterial;
   /**BlockData: AnaloguePowerable*/
   static LIGHT_WEIGHTED_PRESSURE_PLATE: obMaterial;
   /**BlockData: Bisected*/
   static LILAC: obMaterial;
   static LILY_OF_THE_VALLEY: obMaterial;
   static LILY_PAD: obMaterial;
   /**BlockData: Rotatable*/
   static LIME_BANNER: obMaterial;
   /**BlockData: Bed*/
   static LIME_BED: obMaterial;
   static LIME_CARPET: obMaterial;
   static LIME_CONCRETE: obMaterial;
   static LIME_CONCRETE_POWDER: obMaterial;
   static LIME_DYE: obMaterial;
   /**BlockData: Directional*/
   static LIME_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIME_SHULKER_BOX: obMaterial;
   static LIME_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static LIME_STAINED_GLASS_PANE: obMaterial;
   static LIME_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static LIME_WALL_BANNER: obMaterial;
   static LIME_WOOL: obMaterial;
   static LINGERING_POTION: obMaterial;
   static LLAMA_SPAWN_EGG: obMaterial;
   static LODESTONE: obMaterial;
   /**BlockData: Directional*/
   static LOOM: obMaterial;
   /**BlockData: Rotatable*/
   static MAGENTA_BANNER: obMaterial;
   /**BlockData: Bed*/
   static MAGENTA_BED: obMaterial;
   static MAGENTA_CARPET: obMaterial;
   static MAGENTA_CONCRETE: obMaterial;
   static MAGENTA_CONCRETE_POWDER: obMaterial;
   static MAGENTA_DYE: obMaterial;
   /**BlockData: Directional*/
   static MAGENTA_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static MAGENTA_SHULKER_BOX: obMaterial;
   static MAGENTA_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static MAGENTA_STAINED_GLASS_PANE: obMaterial;
   static MAGENTA_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static MAGENTA_WALL_BANNER: obMaterial;
   static MAGENTA_WOOL: obMaterial;
   static MAGMA_BLOCK: obMaterial;
   static MAGMA_CREAM: obMaterial;
   static MAGMA_CUBE_SPAWN_EGG: obMaterial;
   static MAP: obMaterial;
   static MELON: obMaterial;
   static MELON_SEEDS: obMaterial;
   static MELON_SLICE: obMaterial;
   /**BlockData: Ageable*/
   static MELON_STEM: obMaterial;
   static MILK_BUCKET: obMaterial;
   static MINECART: obMaterial;
   static MOJANG_BANNER_PATTERN: obMaterial;
   static MOOSHROOM_SPAWN_EGG: obMaterial;
   /**BlockData: MultipleFacing*/
   static MOSSY_COBBLESTONE: obMaterial;
   /**BlockData: Slab*/
   static MOSSY_COBBLESTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static MOSSY_COBBLESTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static MOSSY_COBBLESTONE_WALL: obMaterial;
   /**BlockData: Slab*/
   static MOSSY_STONE_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static MOSSY_STONE_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static MOSSY_STONE_BRICK_WALL: obMaterial;
   static MOSSY_STONE_BRICKS: obMaterial;
   /**BlockData: TechnicalPiston*/
   static MOVING_PISTON: obMaterial;
   static MULE_SPAWN_EGG: obMaterial;
   /**BlockData: MultipleFacing*/
   static MUSHROOM_STEM: obMaterial;
   static MUSHROOM_STEW: obMaterial;
   static MUSIC_DISC_11: obMaterial;
   static MUSIC_DISC_13: obMaterial;
   static MUSIC_DISC_BLOCKS: obMaterial;
   static MUSIC_DISC_CAT: obMaterial;
   static MUSIC_DISC_CHIRP: obMaterial;
   static MUSIC_DISC_FAR: obMaterial;
   static MUSIC_DISC_MALL: obMaterial;
   static MUSIC_DISC_MELLOHI: obMaterial;
   static MUSIC_DISC_PIGSTEP: obMaterial;
   static MUSIC_DISC_STAL: obMaterial;
   static MUSIC_DISC_STRAD: obMaterial;
   static MUSIC_DISC_WAIT: obMaterial;
   static MUSIC_DISC_WARD: obMaterial;
   static MUTTON: obMaterial;
   /**BlockData: Snowable*/
   static MYCELIUM: obMaterial;
   static NAME_TAG: obMaterial;
   static NAUTILUS_SHELL: obMaterial;
   static NETHER_BRICK: obMaterial;
   /**BlockData: Fence*/
   static NETHER_BRICK_FENCE: obMaterial;
   /**BlockData: Slab*/
   static NETHER_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static NETHER_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static NETHER_BRICK_WALL: obMaterial;
   static NETHER_BRICKS: obMaterial;
   static NETHER_GOLD_ORE: obMaterial;
   /**BlockData: Orientable*/
   static NETHER_PORTAL: obMaterial;
   static NETHER_QUARTZ_ORE: obMaterial;
   static NETHER_SPROUTS: obMaterial;
   static NETHER_STAR: obMaterial;
   /**BlockData: Ageable*/
   static NETHER_WART: obMaterial;
   static NETHER_WART_BLOCK: obMaterial;
   static NETHERITE_AXE: obMaterial;
   static NETHERITE_BLOCK: obMaterial;
   static NETHERITE_BOOTS: obMaterial;
   static NETHERITE_CHESTPLATE: obMaterial;
   static NETHERITE_HELMET: obMaterial;
   static NETHERITE_HOE: obMaterial;
   static NETHERITE_INGOT: obMaterial;
   static NETHERITE_LEGGINGS: obMaterial;
   static NETHERITE_PICKAXE: obMaterial;
   static NETHERITE_SCRAP: obMaterial;
   static NETHERITE_SHOVEL: obMaterial;
   static NETHERITE_SWORD: obMaterial;
   static NETHERRACK: obMaterial;
   /**BlockData: NoteBlock*/
   static NOTE_BLOCK: obMaterial;
   static OAK_BOAT: obMaterial;
   /**BlockData: Switch*/
   static OAK_BUTTON: obMaterial;
   /**BlockData: Door*/
   static OAK_DOOR: obMaterial;
   /**BlockData: Fence*/
   static OAK_FENCE: obMaterial;
   /**BlockData: Gate*/
   static OAK_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static OAK_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static OAK_LOG: obMaterial;
   static OAK_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static OAK_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static OAK_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static OAK_SIGN: obMaterial;
   /**BlockData: Slab*/
   static OAK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static OAK_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static OAK_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static OAK_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static OAK_WOOD: obMaterial;
   /**BlockData: Observer*/
   static OBSERVER: obMaterial;
   static OBSIDIAN: obMaterial;
   static OCELOT_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static ORANGE_BANNER: obMaterial;
   /**BlockData: Bed*/
   static ORANGE_BED: obMaterial;
   static ORANGE_CARPET: obMaterial;
   static ORANGE_CONCRETE: obMaterial;
   static ORANGE_CONCRETE_POWDER: obMaterial;
   static ORANGE_DYE: obMaterial;
   /**BlockData: Directional*/
   static ORANGE_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static ORANGE_SHULKER_BOX: obMaterial;
   static ORANGE_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static ORANGE_STAINED_GLASS_PANE: obMaterial;
   static ORANGE_TERRACOTTA: obMaterial;
   static ORANGE_TULIP: obMaterial;
   /**BlockData: Directional*/
   static ORANGE_WALL_BANNER: obMaterial;
   static ORANGE_WOOL: obMaterial;
   static OXEYE_DAISY: obMaterial;
   static PACKED_ICE: obMaterial;
   static PAINTING: obMaterial;
   static PANDA_SPAWN_EGG: obMaterial;
   static PAPER: obMaterial;
   static PARROT_SPAWN_EGG: obMaterial;
   /**BlockData: Bisected*/
   static PEONY: obMaterial;
   /**BlockData: Slab*/
   static PETRIFIED_OAK_SLAB: obMaterial;
   static PHANTOM_MEMBRANE: obMaterial;
   static PHANTOM_SPAWN_EGG: obMaterial;
   static PIG_SPAWN_EGG: obMaterial;
   static PIGLIN_BANNER_PATTERN: obMaterial;
   static PIGLIN_BRUTE_SPAWN_EGG: obMaterial;
   static PIGLIN_SPAWN_EGG: obMaterial;
   static PILLAGER_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static PINK_BANNER: obMaterial;
   /**BlockData: Bed*/
   static PINK_BED: obMaterial;
   static PINK_CARPET: obMaterial;
   static PINK_CONCRETE: obMaterial;
   static PINK_CONCRETE_POWDER: obMaterial;
   static PINK_DYE: obMaterial;
   /**BlockData: Directional*/
   static PINK_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static PINK_SHULKER_BOX: obMaterial;
   static PINK_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static PINK_STAINED_GLASS_PANE: obMaterial;
   static PINK_TERRACOTTA: obMaterial;
   static PINK_TULIP: obMaterial;
   /**BlockData: Directional*/
   static PINK_WALL_BANNER: obMaterial;
   static PINK_WOOL: obMaterial;
   /**BlockData: Piston*/
   static PISTON: obMaterial;
   /**BlockData: PistonHead*/
   static PISTON_HEAD: obMaterial;
   /**BlockData: Rotatable*/
   static PLAYER_HEAD: obMaterial;
   /**BlockData: Directional*/
   static PLAYER_WALL_HEAD: obMaterial;
   /**BlockData: Snowable*/
   static PODZOL: obMaterial;
   static POISONOUS_POTATO: obMaterial;
   static POLAR_BEAR_SPAWN_EGG: obMaterial;
   static POLISHED_ANDESITE: obMaterial;
   /**BlockData: Slab*/
   static POLISHED_ANDESITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static POLISHED_ANDESITE_STAIRS: obMaterial;
   /**BlockData: Orientable*/
   static POLISHED_BASALT: obMaterial;
   static POLISHED_BLACKSTONE: obMaterial;
   /**BlockData: Slab*/
   static POLISHED_BLACKSTONE_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static POLISHED_BLACKSTONE_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static POLISHED_BLACKSTONE_BRICK_WALL: obMaterial;
   static POLISHED_BLACKSTONE_BRICKS: obMaterial;
   /**BlockData: Switch*/
   static POLISHED_BLACKSTONE_BUTTON: obMaterial;
   /**BlockData: Powerable*/
   static POLISHED_BLACKSTONE_PRESSURE_PLATE: obMaterial;
   /**BlockData: Slab*/
   static POLISHED_BLACKSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static POLISHED_BLACKSTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static POLISHED_BLACKSTONE_WALL: obMaterial;
   static POLISHED_DIORITE: obMaterial;
   /**BlockData: Slab*/
   static POLISHED_DIORITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static POLISHED_DIORITE_STAIRS: obMaterial;
   static POLISHED_GRANITE: obMaterial;
   /**BlockData: Slab*/
   static POLISHED_GRANITE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static POLISHED_GRANITE_STAIRS: obMaterial;
   static POPPED_CHORUS_FRUIT: obMaterial;
   static POPPY: obMaterial;
   static PORKCHOP: obMaterial;
   static POTATO: obMaterial;
   /**BlockData: Ageable*/
   static POTATOES: obMaterial;
   static POTION: obMaterial;
   static POTTED_ACACIA_SAPLING: obMaterial;
   static POTTED_ALLIUM: obMaterial;
   static POTTED_AZURE_BLUET: obMaterial;
   static POTTED_BAMBOO: obMaterial;
   static POTTED_BIRCH_SAPLING: obMaterial;
   static POTTED_BLUE_ORCHID: obMaterial;
   static POTTED_BROWN_MUSHROOM: obMaterial;
   static POTTED_CACTUS: obMaterial;
   static POTTED_CORNFLOWER: obMaterial;
   static POTTED_CRIMSON_FUNGUS: obMaterial;
   static POTTED_CRIMSON_ROOTS: obMaterial;
   static POTTED_DANDELION: obMaterial;
   static POTTED_DARK_OAK_SAPLING: obMaterial;
   static POTTED_DEAD_BUSH: obMaterial;
   static POTTED_FERN: obMaterial;
   static POTTED_JUNGLE_SAPLING: obMaterial;
   static POTTED_LILY_OF_THE_VALLEY: obMaterial;
   static POTTED_OAK_SAPLING: obMaterial;
   static POTTED_ORANGE_TULIP: obMaterial;
   static POTTED_OXEYE_DAISY: obMaterial;
   static POTTED_PINK_TULIP: obMaterial;
   static POTTED_POPPY: obMaterial;
   static POTTED_RED_MUSHROOM: obMaterial;
   static POTTED_RED_TULIP: obMaterial;
   static POTTED_SPRUCE_SAPLING: obMaterial;
   static POTTED_WARPED_FUNGUS: obMaterial;
   static POTTED_WARPED_ROOTS: obMaterial;
   static POTTED_WHITE_TULIP: obMaterial;
   static POTTED_WITHER_ROSE: obMaterial;
   /**BlockData: RedstoneRail*/
   static POWERED_RAIL: obMaterial;
   static PRISMARINE: obMaterial;
   /**BlockData: Slab*/
   static PRISMARINE_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static PRISMARINE_BRICK_STAIRS: obMaterial;
   static PRISMARINE_BRICKS: obMaterial;
   static PRISMARINE_CRYSTALS: obMaterial;
   static PRISMARINE_SHARD: obMaterial;
   /**BlockData: Slab*/
   static PRISMARINE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static PRISMARINE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static PRISMARINE_WALL: obMaterial;
   static PUFFERFISH: obMaterial;
   static PUFFERFISH_BUCKET: obMaterial;
   static PUFFERFISH_SPAWN_EGG: obMaterial;
   static PUMPKIN: obMaterial;
   static PUMPKIN_PIE: obMaterial;
   static PUMPKIN_SEEDS: obMaterial;
   /**BlockData: Ageable*/
   static PUMPKIN_STEM: obMaterial;
   /**BlockData: Rotatable*/
   static PURPLE_BANNER: obMaterial;
   /**BlockData: Bed*/
   static PURPLE_BED: obMaterial;
   static PURPLE_CARPET: obMaterial;
   static PURPLE_CONCRETE: obMaterial;
   static PURPLE_CONCRETE_POWDER: obMaterial;
   static PURPLE_DYE: obMaterial;
   /**BlockData: Directional*/
   static PURPLE_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static PURPLE_SHULKER_BOX: obMaterial;
   static PURPLE_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static PURPLE_STAINED_GLASS_PANE: obMaterial;
   static PURPLE_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static PURPLE_WALL_BANNER: obMaterial;
   static PURPLE_WOOL: obMaterial;
   static PURPUR_BLOCK: obMaterial;
   /**BlockData: Orientable*/
   static PURPUR_PILLAR: obMaterial;
   /**BlockData: Slab*/
   static PURPUR_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static PURPUR_STAIRS: obMaterial;
   static QUARTZ: obMaterial;
   static QUARTZ_BLOCK: obMaterial;
   static QUARTZ_BRICKS: obMaterial;
   /**BlockData: Orientable*/
   static QUARTZ_PILLAR: obMaterial;
   /**BlockData: Slab*/
   static QUARTZ_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static QUARTZ_STAIRS: obMaterial;
   static RABBIT: obMaterial;
   static RABBIT_FOOT: obMaterial;
   static RABBIT_HIDE: obMaterial;
   static RABBIT_SPAWN_EGG: obMaterial;
   static RABBIT_STEW: obMaterial;
   /**BlockData: Rail*/
   static RAIL: obMaterial;
   static RAVAGER_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static RED_BANNER: obMaterial;
   /**BlockData: Bed*/
   static RED_BED: obMaterial;
   static RED_CARPET: obMaterial;
   static RED_CONCRETE: obMaterial;
   static RED_CONCRETE_POWDER: obMaterial;
   static RED_DYE: obMaterial;
   /**BlockData: Directional*/
   static RED_GLAZED_TERRACOTTA: obMaterial;
   static RED_MUSHROOM: obMaterial;
   /**BlockData: MultipleFacing*/
   static RED_MUSHROOM_BLOCK: obMaterial;
   /**BlockData: Slab*/
   static RED_NETHER_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static RED_NETHER_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static RED_NETHER_BRICK_WALL: obMaterial;
   static RED_NETHER_BRICKS: obMaterial;
   static RED_SAND: obMaterial;
   static RED_SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static RED_SANDSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static RED_SANDSTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static RED_SANDSTONE_WALL: obMaterial;
   /**BlockData: Directional*/
   static RED_SHULKER_BOX: obMaterial;
   static RED_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static RED_STAINED_GLASS_PANE: obMaterial;
   static RED_TERRACOTTA: obMaterial;
   static RED_TULIP: obMaterial;
   /**BlockData: Directional*/
   static RED_WALL_BANNER: obMaterial;
   static RED_WOOL: obMaterial;
   static REDSTONE: obMaterial;
   static REDSTONE_BLOCK: obMaterial;
   /**BlockData: Lightable*/
   static REDSTONE_LAMP: obMaterial;
   /**BlockData: Lightable*/
   static REDSTONE_ORE: obMaterial;
   /**BlockData: Lightable*/
   static REDSTONE_TORCH: obMaterial;
   /**BlockData: RedstoneWallTorch*/
   static REDSTONE_WALL_TORCH: obMaterial;
   /**BlockData: RedstoneWire*/
   static REDSTONE_WIRE: obMaterial;
   /**BlockData: Repeater*/
   static REPEATER: obMaterial;
   /**BlockData: CommandBlock*/
   static REPEATING_COMMAND_BLOCK: obMaterial;
   /**BlockData: RespawnAnchor*/
   static RESPAWN_ANCHOR: obMaterial;
   /**BlockData: Bisected*/
   static ROSE_BUSH: obMaterial;
   static ROTTEN_FLESH: obMaterial;
   static SADDLE: obMaterial;
   static SALMON: obMaterial;
   static SALMON_BUCKET: obMaterial;
   static SALMON_SPAWN_EGG: obMaterial;
   static SAND: obMaterial;
   static SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static SANDSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static SANDSTONE_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static SANDSTONE_WALL: obMaterial;
   /**BlockData: Scaffolding*/
   static SCAFFOLDING: obMaterial;
   static SCUTE: obMaterial;
   static SEA_LANTERN: obMaterial;
   /**BlockData: SeaPickle*/
   static SEA_PICKLE: obMaterial;
   static SEAGRASS: obMaterial;
   static SHEARS: obMaterial;
   static SHEEP_SPAWN_EGG: obMaterial;
   static SHIELD: obMaterial;
   static SHROOMLIGHT: obMaterial;
   /**BlockData: Directional*/
   static SHULKER_BOX: obMaterial;
   static SHULKER_SHELL: obMaterial;
   static SHULKER_SPAWN_EGG: obMaterial;
   static SILVERFISH_SPAWN_EGG: obMaterial;
   static SKELETON_HORSE_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static SKELETON_SKULL: obMaterial;
   static SKELETON_SPAWN_EGG: obMaterial;
   /**BlockData: Directional*/
   static SKELETON_WALL_SKULL: obMaterial;
   static SKULL_BANNER_PATTERN: obMaterial;
   static SLIME_BALL: obMaterial;
   static SLIME_BLOCK: obMaterial;
   static SLIME_SPAWN_EGG: obMaterial;
   static SMITHING_TABLE: obMaterial;
   /**BlockData: Furnace*/
   static SMOKER: obMaterial;
   static SMOOTH_QUARTZ: obMaterial;
   /**BlockData: Slab*/
   static SMOOTH_QUARTZ_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static SMOOTH_QUARTZ_STAIRS: obMaterial;
   static SMOOTH_RED_SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static SMOOTH_RED_SANDSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static SMOOTH_RED_SANDSTONE_STAIRS: obMaterial;
   static SMOOTH_SANDSTONE: obMaterial;
   /**BlockData: Slab*/
   static SMOOTH_SANDSTONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static SMOOTH_SANDSTONE_STAIRS: obMaterial;
   static SMOOTH_STONE: obMaterial;
   /**BlockData: Slab*/
   static SMOOTH_STONE_SLAB: obMaterial;
   /**BlockData: Snow*/
   static SNOW: obMaterial;
   static SNOW_BLOCK: obMaterial;
   static SNOWBALL: obMaterial;
   /**BlockData: Campfire*/
   static SOUL_CAMPFIRE: obMaterial;
   /**BlockData: Fire*/
   static SOUL_FIRE: obMaterial;
   /**BlockData: Lantern*/
   static SOUL_LANTERN: obMaterial;
   static SOUL_SAND: obMaterial;
   static SOUL_SOIL: obMaterial;
   /**BlockData: Lightable*/
   static SOUL_TORCH: obMaterial;
   /**BlockData: Directional*/
   static SOUL_WALL_TORCH: obMaterial;
   static SPAWNER: obMaterial;
   static SPECTRAL_ARROW: obMaterial;
   static SPIDER_EYE: obMaterial;
   static SPIDER_SPAWN_EGG: obMaterial;
   static SPLASH_POTION: obMaterial;
   static SPONGE: obMaterial;
   static SPRUCE_BOAT: obMaterial;
   /**BlockData: Switch*/
   static SPRUCE_BUTTON: obMaterial;
   /**BlockData: Door*/
   static SPRUCE_DOOR: obMaterial;
   /**BlockData: Fence*/
   static SPRUCE_FENCE: obMaterial;
   /**BlockData: Gate*/
   static SPRUCE_FENCE_GATE: obMaterial;
   /**BlockData: Leaves*/
   static SPRUCE_LEAVES: obMaterial;
   /**BlockData: Orientable*/
   static SPRUCE_LOG: obMaterial;
   static SPRUCE_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static SPRUCE_PRESSURE_PLATE: obMaterial;
   /**BlockData: Sapling*/
   static SPRUCE_SAPLING: obMaterial;
   /**BlockData: Sign*/
   static SPRUCE_SIGN: obMaterial;
   /**BlockData: Slab*/
   static SPRUCE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static SPRUCE_STAIRS: obMaterial;
   /**BlockData: TrapDoor*/
   static SPRUCE_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static SPRUCE_WALL_SIGN: obMaterial;
   /**BlockData: Orientable*/
   static SPRUCE_WOOD: obMaterial;
   static SQUID_SPAWN_EGG: obMaterial;
   static STICK: obMaterial;
   /**BlockData: Piston*/
   static STICKY_PISTON: obMaterial;
   static STONE: obMaterial;
   static STONE_AXE: obMaterial;
   /**BlockData: Slab*/
   static STONE_BRICK_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static STONE_BRICK_STAIRS: obMaterial;
   /**BlockData: Wall*/
   static STONE_BRICK_WALL: obMaterial;
   static STONE_BRICKS: obMaterial;
   /**BlockData: Switch*/
   static STONE_BUTTON: obMaterial;
   static STONE_HOE: obMaterial;
   static STONE_PICKAXE: obMaterial;
   /**BlockData: Powerable*/
   static STONE_PRESSURE_PLATE: obMaterial;
   static STONE_SHOVEL: obMaterial;
   /**BlockData: Slab*/
   static STONE_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static STONE_STAIRS: obMaterial;
   static STONE_SWORD: obMaterial;
   /**BlockData: Directional*/
   static STONECUTTER: obMaterial;
   static STRAY_SPAWN_EGG: obMaterial;
   static STRIDER_SPAWN_EGG: obMaterial;
   static STRING: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_ACACIA_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_ACACIA_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_BIRCH_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_BIRCH_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_CRIMSON_HYPHAE: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_CRIMSON_STEM: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_DARK_OAK_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_DARK_OAK_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_JUNGLE_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_JUNGLE_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_OAK_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_OAK_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_SPRUCE_LOG: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_SPRUCE_WOOD: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_WARPED_HYPHAE: obMaterial;
   /**BlockData: Orientable*/
   static STRIPPED_WARPED_STEM: obMaterial;
   /**BlockData: StructureBlock*/
   static STRUCTURE_BLOCK: obMaterial;
   static STRUCTURE_VOID: obMaterial;
   static SUGAR: obMaterial;
   /**BlockData: Ageable*/
   static SUGAR_CANE: obMaterial;
   /**BlockData: Bisected*/
   static SUNFLOWER: obMaterial;
   static SUSPICIOUS_STEW: obMaterial;
   static SWEET_BERRIES: obMaterial;
   /**BlockData: Ageable*/
   static SWEET_BERRY_BUSH: obMaterial;
   /**BlockData: Bisected*/
   static TALL_GRASS: obMaterial;
   /**BlockData: Bisected*/
   static TALL_SEAGRASS: obMaterial;
   /**BlockData: AnaloguePowerable*/
   static TARGET: obMaterial;
   static TERRACOTTA: obMaterial;
   static TIPPED_ARROW: obMaterial;
   /**BlockData: TNT*/
   static TNT: obMaterial;
   static TNT_MINECART: obMaterial;
   static TORCH: obMaterial;
   static TOTEM_OF_UNDYING: obMaterial;
   static TRADER_LLAMA_SPAWN_EGG: obMaterial;
   /**BlockData: Chest*/
   static TRAPPED_CHEST: obMaterial;
   static TRIDENT: obMaterial;
   /**BlockData: Tripwire*/
   static TRIPWIRE: obMaterial;
   /**BlockData: TripwireHook*/
   static TRIPWIRE_HOOK: obMaterial;
   static TROPICAL_FISH: obMaterial;
   static TROPICAL_FISH_BUCKET: obMaterial;
   static TROPICAL_FISH_SPAWN_EGG: obMaterial;
   /**BlockData: Waterlogged*/
   static TUBE_CORAL: obMaterial;
   static TUBE_CORAL_BLOCK: obMaterial;
   /**BlockData: Waterlogged*/
   static TUBE_CORAL_FAN: obMaterial;
   /**BlockData: CoralWallFan*/
   static TUBE_CORAL_WALL_FAN: obMaterial;
   /**BlockData: TurtleEgg*/
   static TURTLE_EGG: obMaterial;
   static TURTLE_HELMET: obMaterial;
   static TURTLE_SPAWN_EGG: obMaterial;
   /**BlockData: Ageable*/
   static TWISTING_VINES: obMaterial;
   static TWISTING_VINES_PLANT: obMaterial;
   static VEX_SPAWN_EGG: obMaterial;
   static VILLAGER_SPAWN_EGG: obMaterial;
   static VINDICATOR_SPAWN_EGG: obMaterial;
   /**BlockData: MultipleFacing*/
   static VINE: obMaterial;
   static VOID_AIR: obMaterial;
   /**BlockData: Directional*/
   static WALL_TORCH: obMaterial;
   static WANDERING_TRADER_SPAWN_EGG: obMaterial;
   /**BlockData: Switch*/
   static WARPED_BUTTON: obMaterial;
   /**BlockData: Door*/
   static WARPED_DOOR: obMaterial;
   /**BlockData: Fence*/
   static WARPED_FENCE: obMaterial;
   /**BlockData: Gate*/
   static WARPED_FENCE_GATE: obMaterial;
   static WARPED_FUNGUS: obMaterial;
   static WARPED_FUNGUS_ON_A_STICK: obMaterial;
   /**BlockData: Orientable*/
   static WARPED_HYPHAE: obMaterial;
   static WARPED_NYLIUM: obMaterial;
   static WARPED_PLANKS: obMaterial;
   /**BlockData: Powerable*/
   static WARPED_PRESSURE_PLATE: obMaterial;
   static WARPED_ROOTS: obMaterial;
   /**BlockData: Sign*/
   static WARPED_SIGN: obMaterial;
   /**BlockData: Slab*/
   static WARPED_SLAB: obMaterial;
   /**BlockData: Stairs*/
   static WARPED_STAIRS: obMaterial;
   /**BlockData: Orientable*/
   static WARPED_STEM: obMaterial;
   /**BlockData: TrapDoor*/
   static WARPED_TRAPDOOR: obMaterial;
   /**BlockData: WallSign*/
   static WARPED_WALL_SIGN: obMaterial;
   static WARPED_WART_BLOCK: obMaterial;
   /**BlockData: Levelled*/
   static WATER: obMaterial;
   static WATER_BUCKET: obMaterial;
   /**BlockData: Ageable*/
   static WEEPING_VINES: obMaterial;
   static WEEPING_VINES_PLANT: obMaterial;
   static WET_SPONGE: obMaterial;
   /**BlockData: Ageable*/
   static WHEAT: obMaterial;
   static WHEAT_SEEDS: obMaterial;
   /**BlockData: Rotatable*/
   static WHITE_BANNER: obMaterial;
   /**BlockData: Bed*/
   static WHITE_BED: obMaterial;
   static WHITE_CARPET: obMaterial;
   static WHITE_CONCRETE: obMaterial;
   static WHITE_CONCRETE_POWDER: obMaterial;
   static WHITE_DYE: obMaterial;
   /**BlockData: Directional*/
   static WHITE_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static WHITE_SHULKER_BOX: obMaterial;
   static WHITE_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static WHITE_STAINED_GLASS_PANE: obMaterial;
   static WHITE_TERRACOTTA: obMaterial;
   static WHITE_TULIP: obMaterial;
   /**BlockData: Directional*/
   static WHITE_WALL_BANNER: obMaterial;
   static WHITE_WOOL: obMaterial;
   static WITCH_SPAWN_EGG: obMaterial;
   static WITHER_ROSE: obMaterial;
   /**BlockData: Rotatable*/
   static WITHER_SKELETON_SKULL: obMaterial;
   static WITHER_SKELETON_SPAWN_EGG: obMaterial;
   /**BlockData: Directional*/
   static WITHER_SKELETON_WALL_SKULL: obMaterial;
   static WOLF_SPAWN_EGG: obMaterial;
   static WOODEN_AXE: obMaterial;
   static WOODEN_HOE: obMaterial;
   static WOODEN_PICKAXE: obMaterial;
   static WOODEN_SHOVEL: obMaterial;
   static WOODEN_SWORD: obMaterial;
   static WRITABLE_BOOK: obMaterial;
   static WRITTEN_BOOK: obMaterial;
   /**BlockData: Rotatable*/
   static YELLOW_BANNER: obMaterial;
   /**BlockData: Bed*/
   static YELLOW_BED: obMaterial;
   static YELLOW_CARPET: obMaterial;
   static YELLOW_CONCRETE: obMaterial;
   static YELLOW_CONCRETE_POWDER: obMaterial;
   static YELLOW_DYE: obMaterial;
   /**BlockData: Directional*/
   static YELLOW_GLAZED_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static YELLOW_SHULKER_BOX: obMaterial;
   static YELLOW_STAINED_GLASS: obMaterial;
   /**BlockData: GlassPane*/
   static YELLOW_STAINED_GLASS_PANE: obMaterial;
   static YELLOW_TERRACOTTA: obMaterial;
   /**BlockData: Directional*/
   static YELLOW_WALL_BANNER: obMaterial;
   static YELLOW_WOOL: obMaterial;
   static ZOGLIN_SPAWN_EGG: obMaterial;
   /**BlockData: Rotatable*/
   static ZOMBIE_HEAD: obMaterial;
   static ZOMBIE_HORSE_SPAWN_EGG: obMaterial;
   static ZOMBIE_SPAWN_EGG: obMaterial;
   static ZOMBIE_VILLAGER_SPAWN_EGG: obMaterial;
   /**BlockData: Directional*/
   static ZOMBIE_WALL_HEAD: obMaterial;
   static ZOMBIFIED_PIGLIN_SPAWN_EGG: obMaterial;
}