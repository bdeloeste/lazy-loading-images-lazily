import { ElementType } from 'react'
import li from 'lorem-ipsum'

interface Section {
  tag: ElementType 
  id: number
  props: object
}

const sections: Section[] = [
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
      'data-src': 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_CentennialIPA_Featured_FW.jpg',
      src: 'https://via.placeholder.com/728x400.png?text=Loading...',
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
      'data-src': 'https://cdn.gearpatrol.com/wp-content/uploads/2017/08/Belgian-IPAs-Gear-Patrol-Lead-1440.jpg',
      src: 'https://via.placeholder.com/728x400.png?text=Loading...',
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
      'data-src': 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_AllDayIPA_Featured_FW.jpg',
      src: 'https://via.placeholder.com/728x400.png?text=Loading...',
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
  {
    id: 8,
    props: {
      'data-src': 'https://cdn.gearpatrol.com/wp-content/uploads/2017/08/Belgian-IPAs-Gear-Patrol-Houblon-970x650.jpg',
      src: 'https://via.placeholder.com/728x400.png?text=Loading...',
    },
    tag: 'img',
  },
  {
    id: 9,
    props: {
      children: li({ count: 10, units: 'sentences' })
    },
    tag: 'p',
  },
  {
    id: 10,
    props: {
      'data-src': 'https://cdn.gearpatrol.com/wp-content/uploads/2017/08/Belgian-IPAs-Gear-Patrol-De-Dolle-970x650.jpg',
      src: 'https://via.placeholder.com/728x400.png?text=Loading...',
    },
    tag: 'img',
  },
  {
    id: 11,
    props: {
      children: li({ count: 10, units: 'sentences' })
    },
    tag: 'p',
  },
]

export default sections
