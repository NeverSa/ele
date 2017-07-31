<template>
    <div style="display: flex;justify-content: space-between;flex-direction: column;flex-wrap: wrap;">
        <div>
          <router-view></router-view>
        </div>
        <div>
          <tabbar  style="position:fixed">
            <tabbar-item link="/orderindex">
              <span slot="label" style="color:#dd2727">网上订购</span>
            </tabbar-item>
            <tabbar-item link="/sort">
              <span slot="label">智慧餐厅</span>
            </tabbar-item>
            <tabbar-item link="/car">
              <span slot="label">我的</span>
            </tabbar-item>

          </tabbar>
        </div>
    </div>
</template>

<script>
  import {Tabbar, TabbarItem } from 'vux'
    export default {
      components: {
        Tabbar,
        TabbarItem
      },
        data () {
            return {}
        },

        methods: {}

    }
</script>
<style>

</style>
