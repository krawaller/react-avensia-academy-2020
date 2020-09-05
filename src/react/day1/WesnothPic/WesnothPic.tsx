import React from 'react'
import { base64 } from '../../../toys/wesnoth'

export type WesnothPicProps = {
  id: string
}

const picTypeSizes = {
  attacks: 60,
  units: 72,
  terrain: 30,
  icons: 16,
}

export const WesnothPic = (props: WesnothPicProps) => {
  const type = props.id.split('/')[0] as keyof typeof picTypeSizes
  const size = picTypeSizes[type]
  return (
    <div
      style={{
        backgroundImage: `url(${base64[props.id]})`,
        height: size,
        width: size,
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
      }}
    />
  )
}
