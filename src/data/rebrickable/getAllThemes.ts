import { fetch } from '../../utils/fetch'
import { token } from './token'
import { RebrickableTheme } from './types'

type APIthemesResult = {
  results: RebrickableTheme[]
}

export const getAllThemes = () =>
  fetch(
    `https://rebrickable.com/api/v3/lego/themes/?page_size=1000&key=${token}`
  )
    .then((response: any) => response.json() as APIthemesResult)
    .then((res) => res.results)
    .catch((e) => Promise.reject({ error: e }))
