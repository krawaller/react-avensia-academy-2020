import { ElephantsState } from './model'

export const makeLyrics = (state: ElephantsState) => {
  const { count, mood } = state
  const noun = `elefant${count > 1 ? 'er' : ''}`
  const adjective = `${mood === 'calm' ? 'lugn' : 'glad'}${
    count > 1 ? 'a' : ''
  }`
  const pronoun = count > 1 ? 'de' : 'hon'
  const verb = mood === 'calm' ? 'balanserade' : 'hoppetistudsade'
  const adverb = mood === 'calm' ? 'rätt så intressant' : 'superintressant'
  return [
    `${count} ${adjective} ${noun} ${verb}`,
    `På en liten liten spindeltråååååd`,
    `Det tyckte ${pronoun} var ${adverb}`,
    `Så ${pronoun} gick och hämtade en annan elefant`,
  ]
}
