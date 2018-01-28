//page components
import About from '../containers/About'
import Landing from '../containers/Landing'

export default [
  {
    path: '/',
    exact: true,
    component: Landing,
    name: 'Index',
  },
  {
    path: '/about',
    exact: true,
    component: About,
    name: 'About',
  },
]
