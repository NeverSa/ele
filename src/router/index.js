import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require.ensure(['../components/Login'], () => {
          resolve(require('../components/Login'));
      });
      }
    },


    {
      path: '/reserve',
      name: 'reserve',
      component (resolve) {
        require.ensure(['../components/OrderReserve'], () => {
          resolve(require('../components/OrderReserve'));
        });
      }
    },
    {
      path: '/vegetablenotice',
      name: 'vegetablenotice',
      component (resolve) {
        require.ensure(['../components/CleanVegetableNotice'], () => {
          resolve(require('../components/CleanVegetableNotice'));
        });
      }
    },
  ]
})
