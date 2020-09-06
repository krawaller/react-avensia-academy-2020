import { MemorySession, MemoryTile } from './types'

type NewSessionOpts = {
  /**
   * The number of different tile types to generate. You will get twice this
   * number of tiles in the session, two for each type index.
   */
  nbrOfTypes: number
  /**
   * The numbe of faulty guesses we want to allow
   */
  nbrOfLives: number
}

export function newSession(opts: NewSessionOpts): MemorySession {
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
