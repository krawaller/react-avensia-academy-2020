import { MemorySession, MemoryTile } from './types'

type NewMemorySessionOpts = {
  nbrOfTypes: number
  nbrOfLives: number
}

export function getNewMemorySession(opts: NewMemorySessionOpts): MemorySession {
  const { nbrOfLives, nbrOfTypes } = opts
  const range = Array.from(Array(nbrOfTypes)).map((i, n) => n)
  const cardTypes = range.concat(range)
  const tiles: MemoryTile[] = []
  while (cardTypes.length) {
    const randomIdx = Math.floor(Math.random() * cardTypes.length)
    tiles.push({
      type: cardTypes.splice(randomIdx, 1)[0],
      status: 'hidden',
    })
  }
  return {
    lives: nbrOfLives,
    tiles,
  }
}
