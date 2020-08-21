import { fetch } from '../../utils/fetch'
import { token } from './token'
import { RebrickableTheme } from './types'

type APIthemesResult = {
  results: RebrickableTheme[]
}

/**
 * Queries the API for the master theme list
 */
export const getAllThemes = () =>
  fetch(
    `https://rebrickable.com/api/v3/lego/themes/?page_size=1000&key=${token}`
  )
    .then((response: any) => response.json() as APIthemesResult)
    .then((res) => res.results)
    .catch((e) => Promise.reject({ error: e }))
