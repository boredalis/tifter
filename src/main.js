/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
 
import Vue from 'vue';
import VueFeatherIcon from 'vue-feather-icon';
import * as App from './app';

Vue.use(VueFeatherIcon)
require('./bootstrap');

new Vue(App).$mount('#app');

