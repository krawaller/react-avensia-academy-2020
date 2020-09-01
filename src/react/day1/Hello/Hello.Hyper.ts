import hyper from '../../../utils/hyper'
const { div, li, p, ul, h3 } = hyper

export const Hello = () => {
  return div(
    { className: 'content' },
    h3({ id: 'hello' }, 'Hello Avensians!'),
    p('My name is David! I enjoy:'),
    ul(li('Programming'), li('Board games'), li('Folk metal')),
    p("Let's be friends!")
  )
}
