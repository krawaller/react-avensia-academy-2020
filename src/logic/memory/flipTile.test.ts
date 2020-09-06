import { flipTile } from './flipTile'
import { MemorySession } from './types'

describe('the flipTile function', () => {
  let session: MemorySession
  let result: MemorySession
  describe('when touching a revealed tile when no other tiles are revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' }, // gonna touch this
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
        ],
      }
      result = flipTile({ session, tileIdx: 1 })
    })
    test('nothing happens', () => {
      expect(result).toEqual(session)
    })
  })
  describe('when touching a revealed tile when another tile is revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'revealed' }, // gonna touch this
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 3 })
    })
    test('both are flipped back', () => {
      expect(result).toEqual({
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' }, // <- became hidden
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' }, // <- became hidden
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
    test('a new object was returned', () => {
      expect(result).not.toBe(session)
    })
    test('we did not mutate the old session', () => {
      expect(session).toEqual({
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a done tile', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 2, status: 'done' }, // gonna touch this
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 4 })
    })
    test('nothing happens', () => {
      expect(result).toEqual(session)
    })
  })
  describe('when touching a hidden tile and none is revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' }, // gonna touch this
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 2 })
    })
    test('that tile is revealed', () => {
      expect(result).toEqual({
        lives: 3,
        tiles: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' }, // <- became revealed
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden tile and a similar is revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' }, // gonna touch this
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 1 })
    })
    test('both are made done', () => {
      expect(result).toEqual({
        lives: 3,
        tiles: [
          { type: 0, status: 'done' }, // <- became done
          { type: 0, status: 'done' }, // <- became done
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden tile and a different type is revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' }, // gonna touch this
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 2 })
    })
    test('the hidden tile is revealed and lives is diminished', () => {
      expect(result).toEqual({
        lives: 2, // <- was lowered by 1
        tiles: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' }, // <- became revealed
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden tile and two others are revealed', () => {
    beforeEach(() => {
      session = {
        lives: 3,
        tiles: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 1, status: 'hidden' }, // gonna touch this
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
      result = flipTile({ session, tileIdx: 3 })
    })
    test('nothing happens', () => {
      expect(result).toEqual(session)
    })
  })
})
