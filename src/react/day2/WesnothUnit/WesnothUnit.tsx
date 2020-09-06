import React from 'react'
import { Unit } from '../../../logic/wesnoth'
import { WesnothPic } from '../WesnothPic'

export type WesnothUnitProps = {
  unit: Unit
}

export const WesnothUnit = (props: WesnothUnitProps) => {
  const { unit } = props
  return (
    <div>
      <dl>
        <dt>Name:</dt>
        <dd>{unit.name}</dd>
        <dt>Level:</dt>
        <dd>{unit.level}</dd>
        <dt>Cost:</dt>
        <dd>{unit.cost}</dd>
      </dl>
      <WesnothPic id={unit.image} />
    </div>
  )
}
