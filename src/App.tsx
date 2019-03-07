import React from 'react'
import { Block } from 'jsxstyle'

import Header from './Header'
import Article from './Article'
import sections from './badSections'

const App = () => {
  return (
    <Block
      component="main"
      margin="0 auto"
      max-width="42rem"
      height="100vh"
      overflow="hidden"
    >
      <Header text="IPAs ftw" />
      <Article>
        {sections.map(({ id, props, tag }) => (
          <section key={id}>
            {React.createElement(tag, {
              ...props,
            })}
          </section>
        ))}
      </Article>
    </Block>
  )
}

export default App
