export type NewSessionStateOpts = {
  answer: string
  maxGuesses?: number
}

/**
 * Creates a new Hangman session
 */
export const newSessionState = (opts: NewSessionStateOpts) => ({
  answer: opts.answer,
  maxGuesses: opts.maxGuesses || 4,
  guesses: [],
})
