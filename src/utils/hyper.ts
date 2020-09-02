import React from 'react'

const elements = ['div', 'ul', 'li', 'p', 'h3'] as const
type Elem = typeof elements[number]
type Creator = (...args: any[]) => JSX.Element

const maker = (elem: string, ...args: any[]) => {
  let children = []
  let attrs = {}
  for (const input of args) {
    if (input.$$typeof) {
      children.push(input)
    } else if (typeof input === 'object') {
      Object.assign(attrs, input)
    } else {
      children.push(input)
    }
  }
  return React.createElement(
    elem,
    attrs,
    children.map((c, n) =>
      typeof c === 'object' && !c.key ? { ...c, key: n } : c
    )
  )
}

const factory = (elem: string) => (...args: any[]) => maker(elem, ...args)

const creators = elements.reduce((memo, elem) => {
  memo[elem] = factory(elem)
  return memo
}, {} as Record<Elem, Creator>)

export default creators
