import { RebrickableTheme } from './types'
import { getAllThemes } from './getAllThemes'

export const getThemesByParent = (
  parentId: number
): Promise<RebrickableTheme[]> =>
  getAllThemes()
    .then((themesById) =>
      Object.values(themesById).filter((theme) => theme.parent_id === parentId)
    )
    .catch((e) => Promise.reject({ error: e }))
