const fr_ca_Start = () => import(/* webpackChunkName: "fr_ca" */ './Start')
const fr_ca_Page1 = () => import(/* webpackChunkName: "fr_ca" */ './Page1')
const fr_ca_Page2 = () => import(/* webpackChunkName: "fr_ca" */ './Page2')
const fr_ca_Page3 = () => import(/* webpackChunkName: "fr_ca" */ './Page3')
const fr_ca_TimelinePage = () => import(/* webpackChunkName: "fr_ca" */ './TimelinePage')
const fr_ca_Page5 = () => import(/* webpackChunkName: "fr_ca" */ './Page5')
const fr_ca_Page6 = () => import(/* webpackChunkName: "fr_ca" */ './Page6')
const fr_ca_Page7 = () => import(/* webpackChunkName: "fr_ca" */ './Page7')
const fr_ca_Page8 = () => import(/* webpackChunkName: "fr_ca" */ './Page8')
const fr_ca_Page9 = () => import(/* webpackChunkName: "fr_ca" */ './Page9')
const fr_ca_Page10 = () => import(/* webpackChunkName: "fr_ca" */ './Page10')
const fr_ca_Page11 = () => import(/* webpackChunkName: "fr_ca" */ './Page11')

export default [
  {
    path: '/fr_ca',
    title: 'Start :FR',
    component: fr_ca_Start,
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
        gate: '/page5',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/fr_ca/page1',
    title: 'page1',
    component: fr_ca_Page1,
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
    path: '/fr_ca/page2',
    title: 'page2',
    component: fr_ca_Page2,
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
    path: '/fr_ca/page3',
    title: 'page3',
    component: fr_ca_Page3,
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
    path: '/fr_ca/page4',
    title: 'page4',
    component: fr_ca_TimelinePage,
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
    path: '/fr_ca/page5',
    title: 'page5',
    component: fr_ca_Page5,
    connections: [
      {
        path: '/',
        gate: '',
        forwardTransition: 'slide-forward',
        backwardTransition: 'slide-back'
      }
    ]
  },
  {
    path: '/fr_ca/page6',
    title: 'page6',
    component: fr_ca_Page6,
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
    path: '/fr_ca/page7',
    title: 'page7',
    component: fr_ca_Page7,
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
    path: '/fr_ca/page8',
    title: 'page8',
    component: fr_ca_Page8,
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
    path: '/fr_ca/page9',
    title: 'page9',
    component: fr_ca_Page9,
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
    path: '/fr_ca/page10',
    title: 'page10',
    component: fr_ca_Page10,
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
    path: '/fr_ca/page11',
    title: 'page11',
    component: fr_ca_Page11,
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
