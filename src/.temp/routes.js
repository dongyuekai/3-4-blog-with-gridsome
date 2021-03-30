const c1 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/templates/ProjectPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/templates/JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/dyk/Desktop/demos/LG/3-4-blog-with-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/projectposts/:id/",
    component: c1
  },
  {
    path: "/journalposts/:id/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
