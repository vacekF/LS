const en_Start = () => import(/* webpackChunkName: "en" */ './Start')
const en_Page1 = () => import(/* webpackChunkName: "en" */ './Page1')
const en_Page2 = () => import(/* webpackChunkName: "en" */ './Page2')
const en_Page3 = () => import(/* webpackChunkName: "en" */ './Page3')
const en_TimelinePage = () => import(/* webpackChunkName: "en" */ './TimelinePage')
const en_Page5 = () => import(/* webpackChunkName: "en" */ './Page5')
const en_Page6 = () => import(/* webpackChunkName: "en" */ './Page6')
const en_Page7 = () => import(/* webpackChunkName: "en" */ './Page7')
const en_Page8 = () => import(/* webpackChunkName: "en" */ './Page8')
const en_Page9 = () => import(/* webpackChunkName: "en" */ './Page9')
const en_Page10 = () => import(/* webpackChunkName: "en" */ './Page10')
const en_Page11 = () => import(/* webpackChunkName: "en" */ './Page11')

export default [
  {
    path: '/en',
    title: 'Start',
    component: en_Start,
    connections: [
      {
        path: '/page1',
        gate: '',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      },
      {
        path: '/page6',
        gate: 'Chapter1',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      },
      {
        path: '/page11',
        gate: '/page10',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page1',
    title: 'page1',
    component: en_Page1,
    connections: [
      {
        path: '/page2',
        gate: '/page1',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page2',
    title: 'page2',
    component: en_Page2,
    connections: [
      {
        path: '/page3',
        gate: '/page2',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page3',
    title: 'page3',
    component: en_Page3,
    connections: [
      {
        path: '/page4',
        gate: '/page3',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page4',
    title: 'page4',
    component: en_TimelinePage,
    connections: [
      {
        path: '/page5',
        gate: '/page4',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page5',
    title: 'page5',
    component: en_Page5,
    connections: [
      {
        path: '/',
        gate: '/page5',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page6',
    title: 'page6',
    component: en_Page6,
    connections: [
      {
        path: '/page7',
        gate: '/page6',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page7',
    title: 'page7',
    component: en_Page7,
    connections: [
      {
        path: '/page8',
        gate: '/page7',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page8',
    title: 'page8',
    component: en_Page8,
    connections: [
      {
        path: '/page9',
        gate: '/page8',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page9',
    title: 'page9',
    component: en_Page9,
    connections: [
      {
        path: '/page10',
        gate: '/page9',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page10',
    title: 'page10',
    component: en_Page10,
    connections: [
      {
        path: '/',
        gate: '/page10',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/en/page11',
    title: 'page11',
    component: en_Page11,
    connections: [
      {
        path: '/',
        gate: '/page11',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  }
]
