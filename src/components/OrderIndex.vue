<template>
    <div>
     <div class="nav-ionic">
       <div class="ionic-item">
         <router-link to="/reserve">
           <i class="iconfont icon-weibiaoti1"></i><br/>
            客饭预约
         </router-link>


       </div>
       <div class="ionic-item"> <router-link to="/cleanvegetable">
         <i class="iconfont icon-weibiaoti1"></i><br/>
         网上订菜
       </router-link>
       </div>
       <div class="ionic-item"> <router-link to="/orderconvenience">
         <i class="iconfont icon-weibiaoti1"></i><br/>
         网上购物
       </router-link>
       </div>
     </div>
      <div class="nav-ionic">
        <div class="ionic-item"> <router-link to="/orderproxysale">
          <i class="iconfont icon-weibiaoti1"></i><br/>
          网上代销
        </router-link>
        </div>
        <div class="ionic-item"> <router-link to="/purchase">
          <i class="iconfont icon-weibiaoti1"></i><br/>
          网上代购
        </router-link>
        </div>
        <div class="ionic-item"> <router-link to="/foo">
          <i class="iconfont icon-weibiaoti1"></i><br/>
          购物车
        </router-link>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      components: {

      },
        data () {
            return {}
        },

        methods: {}

    }
</script>
<style>

</style>
