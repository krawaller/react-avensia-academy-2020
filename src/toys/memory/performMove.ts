import produce from 'immer'
import { getMemorySessionStatus } from './getMemorySessionStatus'
import { MemorySession } from './types'

type PerformMoveOpts = {
  session: MemorySession
  tileIdx: number
}

export function performMove(opts: PerformMoveOpts) {
  const { session, tileIdx } = opts
  // Using Immer so we don't need to worry about mutating existing session
  return produce(session, (draft) => {
    const sessionStatus = getMemorySessionStatus(draft)
    const clickedTile = draft.tiles[tileIdx]

    // Ignore pointless clicks
    if (sessionStatus === 'lost') return
    if (sessionStatus === 'won') return
    if (clickedTile.status === 'done') return

    // Clicking an already revealed tile
    if (clickedTile.status === 'revealed') {
      // We only have 1 revealed tile, so don't do anything
      if (sessionStatus === 'looking') return
      // Another tile was revealed (and not matching since then they would be "done"),
      // so we flip all revealed tiles back to hidden
      for (const tile of draft.tiles) {
        if (tile.status === 'revealed') {
          tile.status = 'hidden'
        }
      }
      return
    }

    // Clicking a hidden tile
    if (clickedTile.status === 'hidden') {
      // We didn't have another tile revealed, so we reveal this tile
      if (sessionStatus === 'idle') {
        clickedTile.status = 'revealed'
        return
      }
      // Another tile was revealed, so need to see if they match
      if (sessionStatus === 'looking') {
        const otherRevealedTile = draft.tiles.find(
          (t) => t.status === 'revealed'
        )!
        // Tiles matched, so need to switch both to "done"
        if (clickedTile.type === otherRevealedTile.type) {
          clickedTile.status = 'done'
          otherRevealedTile.status = 'done'
          return
        }
        // Tiles didn't match, so we leave both tiles "revealed" so the user
        // can shamefully contemplate her mistake
        clickedTile.status = 'revealed'
        draft.lives--
        return
      }
    }
    return
  })
}
