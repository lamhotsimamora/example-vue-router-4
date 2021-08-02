// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const vueRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/profile', component: Profile },
    { path: '/contact', component: Contact },
    { path: '/page404', component: page404 },
    { path: '/user', component: User },
    { path: '/user/:id', component: UserFind },
    {
      // /search/screens -> /search?q=screens
      path: '/search/:id_user',
      redirect: to => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/user', query: { q: to.params.id_user } }
      },
    },
  ]