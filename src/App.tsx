import React, { useEffect, useRef } from 'react'
import { Block } from 'jsxstyle'

import Header from './Header'
import Article from './Article'
import sections from './sections'
import { preloadImage } from './utils'

const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0.2,
}

const App = () => {
  const singleRefs = sections.reduce((acc, value) => {
    acc[value.id] = useRef()
    return acc 
  }, {} as Record<number, React.MutableRefObject<any>>)

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.tagName === 'IMG') {
        preloadImage(entry.target as HTMLImageElement)
        self.unobserve(entry.target)
      }
    })
  }, config)

  useEffect(() => {
    Object.values(singleRefs).forEach(value => {
      observer.observe(value.current)
    })
  })

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
              ref: singleRefs[id]
            })}
          </section>
        ))}
      </Article>
    </Block>
  )
}

export default App
