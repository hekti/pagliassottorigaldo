export default defineNuxtRouteMiddleware((to, from) => {

    const sort_routing = ["/", "/services", "/about", "/contacts"]
  
    if (sort_routing.indexOf(to.path) > sort_routing.indexOf(from.path)) {
      to.meta.pageTransition = { name: 'page-left' };
      from.meta.pageTransition = { name: 'page-left' };
    } else {
      to.meta.pageTransition = { name: 'page-right' };
      from.meta.pageTransition = { name: 'page-right' };
    }
  })