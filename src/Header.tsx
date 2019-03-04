import React from 'react'
import { Block } from 'jsxstyle'

interface Props {
  text: string
}

const Header = (props: Props) => (
  <Block component="header">
    <h1>{props.text}</h1>
  </Block>
)

export default Header