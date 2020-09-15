import { connect } from 'react-redux'
import { flipElephantMood, addElephant } from '../../../../logic/elephants'
import { AppState, selectElephantsState } from '../../../../logic/redux'

export const elephantConnector = connect(
  (appState: AppState) => ({ state: selectElephantsState(appState) }),
  (dispatch) => ({
    switchMood: () => dispatch(flipElephantMood()),
    fetchElephant: () => dispatch(addElephant(1)),
  })
)
