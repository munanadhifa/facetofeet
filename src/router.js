import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home.vue'
import Account from '../src/components/Account.vue'
import Login from '../src/components/Login.vue'
import Register from '../src/components/Register.vue'
import Channel from '../src/components/Channel.vue'
import DetailNews from '../src/components/Detail-news.vue'
import NewsSlider from '../src/components/News-slider.vue'
import Search from '../src/components/Search.vue'
import SearchRes from '../src/components/Search-result.vue'
import Beauty from '../src/components/Detail-Menu.vue'

Vue.use(Router);

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel
    },
    {
      path: '/news',
      name: 'DetailNews',
      component: DetailNews
    },
    {
      path: '/news-slider',
      name: 'NewsSlider',
      component: NewsSlider
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchres',
      name: 'SearchRes',
      component: SearchRes
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: Beauty
    }
  ]
})