import { ElephantsState } from './model'
import { addElephantToState } from './addElephantToState'

describe('The addElephant helper', () => {
  describe('When called without amount', () => {
    it('increases count by 1', () => {
      const initial: ElephantsState = {
        count: 7,
        mood: 'happy',
      }
      const result = addElephantToState(initial)
      expect(result).toEqual({
        count: 8,
        mood: 'happy',
      })
    })
  })
  describe('When called with an amount', () => {
    it('increases count by that amount', () => {
      const initial: ElephantsState = {
        count: 2,
        mood: 'calm',
      }
      const result = addElephantToState(initial, 3)
      expect(result).toEqual({
        count: 5,
        mood: 'calm',
      })
    })
  })
})
