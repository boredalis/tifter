/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  {
    path: '/home',
    component: require('@/pages/home.vue'),
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
