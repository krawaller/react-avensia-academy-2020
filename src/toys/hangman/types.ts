// The (calculated) status of a hangman session
export type HangmanStatus = 'won' | 'lost' | 'playing'

export type HangmanSession = {
  guesses: string[] // The guesses (letters or words) made so far
  answer: string // The secret word players are trying to guess
  maxGuesses: number // Total number of errors allowed
}
