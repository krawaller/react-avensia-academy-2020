type NewHangmanSessionOpts = {
  answer: string
  maxGuesses?: number
}

export const getNewHangmanSession = (opts: NewHangmanSessionOpts) => ({
  answer: opts.answer,
  maxGuesses: opts.maxGuesses || 4,
  guesses: [],
})
