import { ReactNode, FunctionComponent, createElement } from 'react'

export type StoryTemplate<Props extends object> = { args?: Props } & ((
  props: Props
) => ReactNode)

type Comp<P extends object> = (props: P) => ReactNode

export const makeStory = <Props extends object>(
  comp: Comp<Props>,
  props: Props
) => {
  const story: StoryTemplate<Props> = (p: Props) =>
    createElement(comp as FunctionComponent<Props>, p)
  story.args = props
  return story
}
