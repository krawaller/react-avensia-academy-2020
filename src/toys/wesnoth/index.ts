import _unitData from './units.json'
import _base64 from './base64.json'
import { Unit } from './types'

type UnitId = keyof typeof _unitData
export const unitIds = Object.keys(_unitData).sort() as UnitId[]

export const base64 = _base64 as Record<string, string>
export const units = _unitData as Record<UnitId, Unit>
export * from './types'
