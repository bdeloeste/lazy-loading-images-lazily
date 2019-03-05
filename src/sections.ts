import { ElementType } from 'react'
import li from 'lorem-ipsum'

interface Section {
  tag: ElementType 
  id: number
  props: object
}

const defaultSections: Section[] = [
  {
    id: 1,
    props: {
      children: li({ count: 10, units: 'sentences' })
    },
    tag: 'p',
  },
  {
    id: 2,
    props: {
      src: 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_CentennialIPA_Featured_FW.jpg',
    },
    tag: 'img',
  },
  {
    id: 3,
    props: {
      children: li({ count: 5, units: 'sentences' })
    },
    tag: 'p',
  },
  {
    id: 4,
    props: {
      src: 'https://cdn.gearpatrol.com/wp-content/uploads/2017/08/Belgian-IPAs-Gear-Patrol-Lead-1440.jpg',
    },
    tag: 'img',
  },
  {
    id: 5,
    props: {
      children: li({ count: 5, units: 'sentences' })
    },
    tag: 'p',
  },
  {
    id: 6,
    props: {
      src: 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_AllDayIPA_Featured_FW.jpg',
    },
    tag: 'img',
  },
  {
    id: 7,
    props: {
      children: li({ count: 10, units: 'sentences' })
    },
    tag: 'p',
  },
]

export default defaultSections
