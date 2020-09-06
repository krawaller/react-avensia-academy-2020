export type MemoryTileStatus =
  | 'hidden' // The tile is face down
  | 'revealed' // The tile is face up, but twin has not been found
  | 'done' // The tile is face up and so is the matching twin

/**
 * A single tile within a memory session
 */
export type MemoryTile = {
  type: number // In every session there are two tiles for each type
  status: MemoryTileStatus
}

/**
 * A Memory game session
 */
export type MemorySession = {
  lives: number
  tiles: MemoryTile[]
}

/**
 * The overall status of a memory session.
 * Not part of the MemorySession state since it can be derived.
 */
export type MemorySessionStatus =
  | 'won' // All tiles have been revealed!
  | 'lost' // No lives remaining
  | 'mistake' // We have two revealed non-matching tiles (so a timer should flip these back)
  | 'idle' // No revealed tiles
  | 'looking' // One revealed tile
