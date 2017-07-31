import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require.ensure(['../components/Index'], () => {
          resolve(require('../components/index'));
        });
      },//网上购物索引首页
      children: [
        {
          path: 'orderindex',
          component (resolve) {
            require.ensure(['../components/OrderIndex'], () => {
              resolve(require('../components/OrderIndex'));
            });
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require.ensure(['../components/Login'], () => {
          resolve(require('../components/Login'));
      });
      }
    },

//会议留餐
    {
      path: '/reserve',
      name: 'reserve',
      component (resolve) {
        require.ensure(['../components/OrderReserve'], () => {
          resolve(require('../components/OrderReserve'));
        });
      }
    },
    //网上订菜
    {
      path: '/cleanvegetable',
      name: 'cleanvegetable',
      component (resolve) {
        require.ensure(['../components/OrderCleanVegeTable'], () => {
          resolve(require('../components/OrderCleanVegeTable'));
        });
      }
    },
    //网上代购
    {
      path: '/purchase',
      name: 'purchase',
      component (resolve) {
        require.ensure(['../components/OrderPurchase'], () => {
          resolve(require('../components/OrderPurchase'));
        });
      }
    },
    //净菜预告
    {
      path: '/vegetablenotice',
      name: 'vegetablenotice',
      component (resolve) {
        require.ensure(['../components/CleanVegetableNotice'], () => {
          resolve(require('../components/CleanVegetableNotice'));
        });
      }
    },
    //网上购物
    {
      path: '/orderconvenience',
      name: 'orderconvenience',
      component (resolve) {
        require.ensure(['../components/OrderConvenience'], () => {
          resolve(require('../components/OrderConvenience'));
        });
      }
    },
    //网上代销
    {
      path: '/orderproxysale',
      name: 'orderproxysale',
      component (resolve) {
        require.ensure(['../components/OrderProxysale'], () => {
          resolve(require('../components/OrderProxysale'));
        });
      }
    },
  ]
})
