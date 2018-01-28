//page components
import About from 'containers/About'
import Landing from 'containers/Landing'
import YetAnotherTodo from 'containers/YetAnotherTodo'

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
  {
    path: '/todo',
    exact: true,
    component: YetAnotherTodo,
    name: 'Yet Another Todo',
  },
]
