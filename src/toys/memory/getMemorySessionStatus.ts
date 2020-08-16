import { MemorySession, MemorySessionStatus } from './types'

export function getMemorySessionStatus(
  session: MemorySession
): MemorySessionStatus {
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
