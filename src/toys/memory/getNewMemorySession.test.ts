import { getNewMemorySession } from './getNewMemorySession'

describe('the getNewMemorySession function', () => {
  describe('for 2 types and 3 errors allowed', () => {
    const res = getNewMemorySession({ nbrOfTypes: 2, nbrOfLives: 3 })
    test('we get correct number of errors', () => {
      expect(res.lives).toBe(3)
    })
    test('we get correct number of tiles', () => {
      expect(res.tiles).toHaveLength(4)
    })
    test('we get correct tile states', () => {
      expect(res.tiles.every((tile) => tile.status === 'hidden')).toBeTruthy()
    })
    test('we get two of each type', () => {
      expect(
        res.tiles.every(
          (tile) =>
            res.tiles.filter((otherTile) => otherTile.type === tile.type)
              .length === 2
        )
      ).toBeTruthy()
    })
  })
  describe('for 3 types and 5 errors allowed', () => {
    const res = getNewMemorySession({ nbrOfTypes: 3, nbrOfLives: 5 })
    test('we get correct number of errors', () => {
      expect(res.lives).toBe(5)
    })
    test('we get correct number of tiles', () => {
      expect(res.tiles).toHaveLength(6)
    })
    test('we get correct tile states', () => {
      expect(res.tiles.every((tile) => tile.status === 'hidden')).toBeTruthy()
    })
    test('we get two of each type', () => {
      expect(
        res.tiles.every(
          (tile) =>
            res.tiles.filter((otherTile) => otherTile.type === tile.type)
              .length === 2
        )
      ).toBeTruthy()
    })
  })
})
