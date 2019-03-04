import React from 'react'
import { Block } from 'jsxstyle'
import li from 'lorem-ipsum'

import Header from './Header'
import Article from './Article'

const App = () => {
  return (
    <Block
      component="main"
      margin="0 auto"
      max-width="42rem"
      height="100vh"
      padding="2.625rem 1.3125rem"
      overflow="hidden"
    >
      <Header text="IPAs ftw" />
      <Article>
        <p>
          {li({ count: 50, units: 'sentences' })}
        </p>
        <p>
          {li({ count: 50, units: 'sentences' })}
        </p>
      </Article>
    </Block>
  )
}

export default App;
