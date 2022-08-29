import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7646b964 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _22e5d244 = () => interopDefault(import('../pages/drafts.vue' /* webpackChunkName: "pages/drafts" */))
const _54cf056a = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _7c5c908e = () => interopDefault(import('../pages/p/_id.vue' /* webpackChunkName: "pages/p/_id" */))
const _47225570 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _7646b964,
    name: "create"
  }, {
    path: "/drafts",
    component: _22e5d244,
    name: "drafts"
  }, {
    path: "/signup",
    component: _54cf056a,
    name: "signup"
  }, {
    path: "/p/:id?",
    component: _7c5c908e,
    name: "p-id"
  }, {
    path: "/",
    component: _47225570,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
