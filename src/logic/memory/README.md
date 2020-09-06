This folder contains the logic for the game of Memory! Nothing here is stateful, it is all pure functions.

Suggested approach:

1. Look at the shape of the `MemorySession` type
1. Build a UI to render the tiles in a session. Note that their `.type` is a simple numeric index, which you can map to any image array.
1. Make the UI describe the current status, using the helper `getSessionStatus`
1. Build a stateful app around the UI, using
   - `newSession`
   - `flipTile`
