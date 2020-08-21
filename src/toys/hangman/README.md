This folder contains the logic for the game of Hangman! Nothing here is stateful, it is all pure functions.

Suggested approach:

1. Look at the shape of the `HangmanSession` type
1. Build a UI to render a session, using the utility methods
   - `getSessionStatus`
   - `getRevealedLetters`
1. Build a stateful app around the UI, using
   - `newSession`
   - `performGuess`
