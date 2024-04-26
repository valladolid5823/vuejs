
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'home', name: 'home', component: () => import('pages/Home/Home.vue') },
      { path: 'i-love-arrays', name: 'i-love-arrays', component: () => import('pages/ILoveArrays/ILoveArrays.vue') },
      { path: 'rest-api', name: 'rest-api', component: () => import('pages/RestApi/RestApi.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
