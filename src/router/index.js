import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Custom from '@/pages/Custom/Custom'
import Year from '@/pages/Year/Year'
import House from '@/pages/House/House'
import Wedding from '@/pages/Wedding/Wedding'
import Doll from '@/pages/Doll/Doll'
import Comic from '@/pages/Comic/Comic'
import About from '@/pages/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/custom',
      name: 'Custom',
      component: Custom
    },
    {
      path: '/year',
      name: 'Year',
      component: Year
    },
    {
      path: '/house',
      name: 'House',
      component: House
    },
    {
      path: '/wedding',
      name: 'Wedding',
      component: Wedding
    },
    {
      path: '/doll',
      name: 'Doll',
      component: Doll
    },
    {
      path: '/comic',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
