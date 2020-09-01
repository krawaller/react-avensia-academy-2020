import React from 'react'

export const Hello = () => {
  return React.createElement(
    'div',
    { className: 'content' },
    React.createElement('h3', { id: 'hello' }, 'Hello Avensians!'),
    React.createElement('p', null, 'My name is David! I enjoy:'),
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Programming'),
      React.createElement('li', null, 'Board games'),
      React.createElement('li', null, 'Folk metal')
    ),
    React.createElement('p', null, "Let's be friends!")
  )
}
