import { MemorySession, MemorySessionStatus } from './types'

/**
 * Helper function that calculates which state the session is in:
 *  - won: all tiles have been revealed!
 *  - mistake: to non-matching tiles are revealed, can't do anything except flip them back
 *  - looking: a single tile is revealed, we are now looking for its sibling
 *  - idle: no tiles are revealed (except finished pairs)
 */
export function getSessionStatus(session: MemorySession): MemorySessionStatus {
  if (session.lives === 0) return 'lost'
  const countTileStatuses = session.tiles.reduce(
    (memo, tile) => ({
      ...memo,
      [tile.status]: memo[tile.status] + 1,
    }),
    { hidden: 0, done: 0, revealed: 0 }
  )
  if (countTileStatuses.done === session.tiles.length) return 'won'
  if (countTileStatuses.revealed === 2) return 'mistake'
  if (countTileStatuses.revealed === 1) return 'looking'
  return 'idle'
}
