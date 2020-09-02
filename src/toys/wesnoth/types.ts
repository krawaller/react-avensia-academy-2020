type Alignment = 'chaotic' | 'lawful' | 'liminal' | 'neutral'
type UnitNote =
  | 'ambush'
  | 'arcane'
  | 'backstab'
  | 'berserk'
  | 'charge'
  | 'concealment'
  | 'cures'
  | 'defense_cap'
  | 'diversion'
  | 'drain'
  | 'extra_heal'
  | 'feeding'
  | 'firststrike'
  | 'heals'
  | 'illuminates'
  | 'leadership'
  | 'magical'
  | 'marksman'
  | 'nightstalk'
  | 'plague'
  | 'poison'
  | 'regenerates'
  | 'self_heal'
  | 'skirmisher'
  | 'slow'
  | 'spirit'
  | 'steadfast'
  | 'submerge'
  | 'swarm'
  | 'teleport'
type UnitAbility =
  | 'ambush'
  | 'concealment'
  | 'cures'
  | 'diversion'
  | 'extra_heal'
  | 'feeding'
  | 'heals'
  | 'illuminates'
  | 'leadership'
  | 'nightstalk'
  | 'regenerates'
  | 'self_heal'
  | 'skirmisher'
  | 'steadfast'
  | 'submerge'
  | 'teleport'
type AttackNote =
  | 'backstab'
  | 'berserk'
  | 'charge'
  | 'drain'
  | 'firststrike'
  | 'magical'
  | 'marksman'
  | 'plague'
  | 'poison'
  | 'slow'
type Race =
  | 'bats'
  | 'drake'
  | 'dunefolk'
  | 'monster'
  | 'dwarf'
  | 'elf'
  | 'wolf'
  | 'goblin'
  | 'gryphon'
  | 'human'
  | 'merman'
  | 'falcon'
  | 'undead'
  | 'naga'
  | 'ogre'
  | 'orc'
  | 'lizard'
  | 'troll'
  | 'wose'
type AttackType = 'cold' | 'pierce' | 'fire' | 'blade' | 'impact' | 'arcane'
type Terrain =
  | 'village'
  | 'sand'
  | 'forest'
  | 'mountains'
  | 'hills'
  | 'cave'
  | 'castle'
  | 'flat'
  | 'shallow_water'
  | 'swamp_water'
  | 'frozen'
  | 'deep_water'
  | 'fungus'

type MovementType =
  | 'smallfly'
  | 'drakefoot'
  | 'drakefly'
  | 'drakeglide'
  | 'drakeglide2'
  | 'dunefoot'
  | 'dunearmoredfoot'
  | 'dunearmoredhorse'
  | 'duneelusivefoot'
  | 'dunehorse'
  | 'fly'
  | 'dwarvishfoot'
  | 'woodland'
  | 'woodlandfloat'
  | 'orcishfoot'
  | 'mounted'
  | 'smallfoot'
  | 'elusivefoot'
  | 'armoredfoot'
  | 'swimmer'
  | 'deepsea'
  | 'lightfly'
  | 'scuttlefoot'
  | 'rodentfoot'
  | 'mountainfoot'
  | 'spirit'
  | 'undeadfly'
  | 'float'
  | 'naga'
  | 'largefoot'
  | 'lizard'
  | 'gruefoot'
  | 'undeadfoot'
  | 'undeadspirit'
  | 'treefolk'

export type Unit = {
  id: string
  name: string
  race: Race
  /**
   * This can be used to index the base64 image object
   */
  image: string
  hitpoints: number
  movement_type: MovementType
  movement: number
  experience: number
  level: number
  /**
   * This has an image in the base64 image object if prefixed with "icons/"
   */
  alignment: Alignment
  advances_to: string[]
  cost: number
  usage: string | null
  description: string | null
  /**
   * These have images in the base64 image object if prefixed with "icons/"
   */
  notes: UnitNote[]
  /**
   * These have images in the base64 image object if prefixed with "icons/"
   */
  abilities: UnitAbility[]
  /**
   * The AttackType keys have images in the base64 image object if prefixed with "icons/"
   */
  resistance: Partial<Record<AttackType, number>>
  /**
   * The Terrain keys have images in the base64 image object if prefixed with "terrain/"
   */
  defense: Partial<Record<Terrain, number>>
  attacks: Attack[]
}

type Attack = {
  /**
   * These have images in the base64 image object if prefixed with "icons/"
   */
  specials: AttackNote[]
  name: string
  description: string
  /**
   * This can be used to index the base64 image object
   */
  icon: string
  /**
   * This has an image in the base64 image object if prefixed with "icons/"
   */
  type: AttackType
  /**
   * There are `icons/meelee_attack` and `icons/ranged_attack` in the base64 image object
   */
  range: 'meelee' | 'ranged'
  damage: number
}

export type UnitLibrary = Record<string, Unit>
