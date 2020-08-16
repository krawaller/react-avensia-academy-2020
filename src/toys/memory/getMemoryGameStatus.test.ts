import { getMemorySessionStatus } from './getMemorySessionStatus'

describe('the getMemoryGameStatus function', () => {
  describe('when no errors left', () => {
    const res = getMemorySessionStatus({
      tiles: [],
      lives: 0,
    })
    test('we get "lost"', () => {
      expect(res).toEqual('lost')
    })
  })
  describe('when all tiles are done', () => {
    const res = getMemorySessionStatus({
      tiles: [
        { type: 1, status: 'done' },
        { type: 1, status: 'done' },
      ],
      lives: 3,
    })
    test('we get "won"', () => {
      expect(res).toEqual('won')
    })
  })
  describe('when single tile is revealed', () => {
    const res = getMemorySessionStatus({
      tiles: [
        { type: 1, status: 'hidden' },
        { type: 1, status: 'revealed' },
      ],
      lives: 3,
    })
    test('we get "looking"', () => {
      expect(res).toEqual('looking')
    })
  })
  describe('when two tiles are revealed', () => {
    const res = getMemorySessionStatus({
      tiles: [
        { type: 1, status: 'revealed' },
        { type: 1, status: 'revealed' },
      ],
      lives: 3,
    })
    test('we get "mistake"', () => {
      expect(res).toEqual('mistake')
    })
  })
})
