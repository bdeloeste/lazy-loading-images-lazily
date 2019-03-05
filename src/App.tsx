import React, { useState } from "react"
import { Block } from "jsxstyle"

import Header from "./Header"
import Article from "./Article"
import defaultSections from './sections'

const App = () => {
  const [sections, setSections] = useState(defaultSections)
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
