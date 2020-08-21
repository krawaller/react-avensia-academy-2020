import { RebrickableTheme } from './types'
import { getAllThemes } from './getAllThemes'

/**
 * Queries the API for all child themes of the given theme.
 * Uses the theme master list under the hood
 */
export const getThemesByParent = (
  parentId: number
): Promise<RebrickableTheme[]> =>
  getAllThemes()
    .then((themesById) =>
      Object.values(themesById).filter((theme) => theme.parent_id === parentId)
    )
    .catch((e) => Promise.reject({ error: e }))
