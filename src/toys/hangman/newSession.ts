type NewSessionOpts = {
  answer: string
  maxGuesses?: number
}

/**
 * Creates a new Hangman session
 */
export const newSession = (opts: NewSessionOpts) => ({
  answer: opts.answer,
  maxGuesses: opts.maxGuesses || 4,
  guesses: [],
})
