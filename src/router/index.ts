import { createRouter, createWebHistory } from 'vue-router'
import { useProviderStore } from '../stores/provider'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/IndexView.vue'),
    },
    {
      path: '/404',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

router.beforeEach(() => {
  useProviderStore().loadingBar.start()
})

router.afterEach(() => {
  useProviderStore().loadingBar.finish()
})
