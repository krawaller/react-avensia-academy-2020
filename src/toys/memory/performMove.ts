import { getMemorySessionStatus } from './getMemorySessionStatus'
import { MemorySession } from './types'

type PerformMoveOpts = {
  session: MemorySession
  tileIdx: number
}

export function performMove(opts: PerformMoveOpts) {
  const { session, tileIdx } = opts
  const sessionStatus = getMemorySessionStatus(session)
  const tile = session.tiles[tileIdx]
  if (sessionStatus === 'lost') return session
  if (sessionStatus === 'won') return session
  if (tile.status === 'revealed') {
    if (sessionStatus === 'looking') return session
    return {
      ...session,
      tiles: session.tiles.map((tile) => ({
        ...tile,
        status: tile.status === 'revealed' ? 'hidden' : tile.status,
      })),
    }
  }
  if (tile.status === 'hidden') {
    if (sessionStatus === 'idle') {
      return {
        ...session,
        tiles: session.tiles.map((tile, n) => ({
          ...tile,
          status: n === tileIdx ? 'revealed' : tile.status,
        })),
      }
    }
    if (sessionStatus === 'looking') {
      const otherIdx = session.tiles.findIndex(
        (tile) => tile.status === 'revealed'
      )
      const otherTile = session.tiles[otherIdx]
      if (tile.type === otherTile.type) {
        return {
          ...session,
          tiles: session.tiles.map((tile, n) => ({
            ...tile,
            status: n === tileIdx || n === otherIdx ? 'done' : tile.status,
          })),
        }
      } else {
        return {
          ...session,
          lives: session.lives - 1,
          tiles: session.tiles.map((tile, n) => ({
            ...tile,
            status: n === tileIdx ? 'revealed' : tile.status,
          })),
        }
      }
    }
  }
  return session
}
