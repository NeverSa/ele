<template>
    <div class="vegetable">
      <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;margin-bottom: 10px;">
        <tab style="width:500px;" bar-active-color="#00a786" :line-width="1" active-color="#00a786">
          <tab-item selected>周一</tab-item>
          <tab-item >周二</tab-item>
          <tab-item>周三</tab-item>
          <tab-item>周四</tab-item>
          <tab-item>周五</tab-item>
          <tab-item>周六</tab-item>
          <tab-item>周日</tab-item>
        </tab>
      </div>
    <div class="list">
     <div class="item">
       <img src="../assets/images/test.jpg" style="width:100%">
         <div class="lable-content">菜品名称</div>
        <div class="greentext lable-content"><span style="font-size: 12px;">￥</span><span style="font-size: 16px;">15</span></div>
        <div class="lable-content">出售份数 18</div>
     </div>
      <div class="item">
        <img src="../assets/images/test.jpg" style="width:100%">
        <div class="lable-content">菜品名称</div>
        <div class="greentext lable-content"><span style="font-size: 12px;">￥</span><span style="font-size: 16px;">15</span></div>
        <div class="lable-content">出售份数 18</div>
      </div>
      <div class="item">
        <img src="../assets/images/test.jpg" style="width:100%">
        <div class="lable-content">菜品名称</div>
        <div class="greentext lable-content"><span style="font-size: 12px;">￥</span><span style="font-size: 16px;">15</span></div>
        <div class="lable-content">出售份数 18</div>
      </div>
      <div class="item">
        <img src="../assets/images/test.jpg" style="width:100%">
        <div class="lable-content">菜品名称</div>
        <div class="greentext lable-content"><span style="font-size: 12px;">￥</span><span style="font-size: 16px;">15</span></div>
        <div class="lable-content">出售份数 18</div>
      </div>
    </div>
    </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
    export default {
      components: {
        Tab,
        TabItem
      },
        data () {
            return {}
        },

        methods: {}

    }
</script>
<style>
body{
  background: #f3f6f8;
}
</style>
