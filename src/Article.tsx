import { Block } from 'jsxstyle'
import React from 'react'

interface Props {
    children: React.ReactChild[]
}

const Article = (props: Props) => (
  <Block
    component="article"
    overflow="auto"
    height="100%"
  >
    {props.children}
  </Block>
)

export default Article