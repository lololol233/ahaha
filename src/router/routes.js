// import { createRouter, createWebHashHistory } from 'vue-router'
// import FrontLayout from 'layouts/MainLayout.vue'
// import FrontHomeView from 'pages/front/HomeView.vue'
// import NotFoundView from 'pages/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/front/HomeView.vue') },
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/front/HomeView.vue'),
        meta: {
          title: ' Dostoevsky | Home',
          login: false,
          admin: false
        }
      },
      // {
      //   path: 'intro',
      //   name: 'intro',
      //   component: () => import('pages/front/IntroView.vue'),
      //   meta: {
      //     title: ' Dostoevsky | 介紹頁',
      //     login: false,
      //     admin: false
      //   }
      // },
      {
        path: 'reading',
        name: 'reading',
        component: () => import('pages/front/ReadingView.vue'),
        meta: {
          title: ' Dostoevsky | Reading',
          login: false,
          admin: false
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('pages/front/NewsView.vue'),
        meta: {
          title: ' Dostoevsky | Articles',
          login: false,
          admin: false
        }
      },
      {
        path: 'news/:id',
        name: 'article',
        component: () => import('pages/front/ArticleView.vue'),
        meta: {
          title: 'Dostoevsky | Article',
          login: false,
          admin: false
        }
      },
      {
        path: 'items',
        name: 'items',
        component: () => import('pages/front/ItemsView.vue'),
        meta: {
          title: ' Dostoevsky | Product',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'product',
        component: () => import('pages/front/ProductView.vue'),
        meta: {
          title: 'Dostoevsky | Items',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('pages/front/CartView.vue'),
        meta: {
          title: ' Dostoevsky | Cart',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('pages/front/OrdersView.vue'),
        meta: {
          title: ' Dostoevsky | Orders',
          login: true,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/front/RegisterView.vue'),
        meta: {
          title: ' Dostoevsky | Register',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/front/LoginView.vue'),
        meta: {
          title: ' Dostoevsky | Login',
          login: false,
          admin: false
        }
      },
      {
        path: 'karamazov',
        name: 'karamazov',
        component: () => import('pages/front/KaramazovView.vue'),
        meta: {
          title: ' Dostoevsky | Brothers Karamazov',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      // {
      //   path: '',
      //   name: 'admin-home',
      //   component: () => import('@/pages/admin/HomeView.vue'),
      //   meta: {
      //     title: 'Admin | 管理',
      //     login: true,
      //     admin: true
      //   }
      // },
      {
        path: '',
        name: 'admin-products',
        component: () => import('@/pages/admin/ProductsView.vue'),
        meta: {
          title: 'Admin | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/admin/NewsView.vue'),
        meta: {
          title: 'Admin | 文章管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('@/pages/admin/OrdersView.vue'),
        meta: {
          title: 'Admin | 訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
