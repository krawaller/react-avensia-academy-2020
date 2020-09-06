import { ElephantsState, flipMoodInState } from '.'

describe('The flipMood helper', () => {
  describe('When mood is happy', () => {
    it('switches to calm', () => {
      const initial: ElephantsState = {
        mood: 'happy',
        count: 666,
      }
      const result = flipMoodInState(initial)
      expect(result).toBe({
        mood: 'calm',
        count: 666,
      })
    })
  })
  describe('When mood is calm', () => {
    it('switches to happy', () => {
      const initial: ElephantsState = {
        mood: 'calm',
        count: 666,
      }
      const result = flipMoodInState(initial)
      expect(result).toEqual({
        mood: 'happy',
        count: 666,
      })
    })
  })
})
