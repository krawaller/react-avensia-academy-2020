import React from 'react'

export type TodoProps = {
  chores: string[]
}

export const Todo = (props: TodoProps) => {
  const { chores } = props
  const listItems: JSX.Element[] = []
  for (let i = 0; i < chores.length; i++) {
    listItems.push(<li key={i}>{chores[i]}</li>)
  }
  return (
    <>
      <ul>Things to do</ul>
      {listItems}
    </>
  )
}
