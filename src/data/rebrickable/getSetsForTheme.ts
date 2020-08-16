import { fetch } from '../../utils/fetch'
import { token } from './token'
import { RebrickableSet } from './types'

type APISetsResult = {
  results: RebrickableSet[]
}

export const getSetsForTheme = (themeId: number) =>
  fetch(
    `https://rebrickable.com/api/v3/lego/sets/?page_size=1000&theme_id=${themeId}&key=${token}`
  )
    .then((response: any) => response.json() as APISetsResult)
    .then((res: APISetsResult) => res.results)
    .catch((e: Error) => Promise.reject({ error: e }))
