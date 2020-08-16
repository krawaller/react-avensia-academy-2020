import { performMove } from './performMove'
import { MemorySession } from './types'

describe('the performMove function', () => {
  let session: MemorySession
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
    })
    test('nothing happens', () => {
      expect(performMove({ session, tileIdx: 1 })).toEqual(session)
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
    })
    test('both are flipped back', () => {
      expect(performMove({ session, tileIdx: 3 })).toEqual({
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
    })
    test('nothing happens', () => {
      expect(performMove({ session, tileIdx: 4 })).toEqual(session)
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
    })
    test('that tile is revealed', () => {
      expect(performMove({ session, tileIdx: 2 })).toEqual({
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
    })
    test('both are made done', () => {
      expect(performMove({ session, tileIdx: 1 })).toEqual({
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
    })
    test('the hidden tile is revealed and lives is diminished', () => {
      expect(performMove({ session, tileIdx: 2 })).toEqual({
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
    })
    test('nothing happens', () => {
      expect(performMove({ session, tileIdx: 3 })).toEqual(session)
    })
  })
})
