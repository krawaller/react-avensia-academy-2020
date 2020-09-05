// Action creators, to be used with the reducer

// Type, creator and guard for addElephant action creator
export const ADD_ELEPHANT = 'ELEPHANT::ADD'
export const addElephant = (num = 1) =>
  ({
    type: ADD_ELEPHANT,
    number: num,
  } as const)
export type AddElephantAction = ReturnType<typeof addElephant>
export const isAddElephantAction = (action: any): action is AddElephantAction =>
  action?.type === ADD_ELEPHANT

// Type, creator and guard for flipElephantMood action creator
export const FLIP_ELEPHANT_MOOD = 'ELEPHANT::FLIP_MOOD'
export const flipElephantMood = () =>
  ({
    type: FLIP_ELEPHANT_MOOD,
  } as const)
export type FlipElephantMoodAction = ReturnType<typeof flipElephantMood>
export const isFlipElephantMoodAction = (
  action: any
): action is FlipElephantMoodAction => action?.type === FLIP_ELEPHANT_MOOD

// Aggregate stuff

export type ElephantsAction = AddElephantAction | FlipElephantMoodAction
