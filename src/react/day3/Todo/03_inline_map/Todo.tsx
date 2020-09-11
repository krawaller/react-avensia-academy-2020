import React from 'react'

export type TodoProps = {
  chores: string[]
}

export const Todo = (props: TodoProps) => {
  const { chores } = props
  return (
    <>
      <ul>Things to do</ul>
      {chores.map((chore, n) => (
        <li key={n}>{chore}</li>
      ))}
    </>
  )
}
