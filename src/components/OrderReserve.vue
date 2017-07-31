<template>
  <div class="reserve">
    <div>

       <Vtree v-on:changeOrg="testaa"></Vtree>

      <div style="width: 100%">
        <img src="../assets/img/reservebanner.png" style="max-width: 100%"/>
      </div>
      <group >
        <cell title="预订人：" :value="Name" value-align="left"></cell>
        <cell title="用餐地点："  value-align="left">
          <div slot>
            <span >{{address}}<span class="remaketext">(如需更改请重新选择餐厅)</span></span>
          </div>
        </cell>
        <cell title="预订部门：" :value="department" value-align="left"></cell>
        <popup-picker title="留餐方式：" :data="list" v-model="OrderCategory" value-text-align="left" show-name></popup-picker>
        <x-input title="用餐人数：" placeholder="必填" v-model="PersonNumber"></x-input>
        <datetime title="用餐时间：" v-model="MealTime" value-text-align="left" format="YYYY-MM-DD HH:mm"></datetime>
        <x-textarea title="备注" placeholder="请输入备注信息" :show-counter="false" :rows="1" v-model="Remake" autosize :max="100"></x-textarea>


      </group>
    </div>

    <a class="submitnav">
      提交订单
    </a>
  </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, PopupPicker, Datetime,XTextarea } from 'vux'
  import Vtree from "./OrgTree.vue"
  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      PopupPicker,
      Datetime,
      XTextarea,
      Vtree
    },
    data () {
      return {
        address:"测试地址",
        Name:"测试姓名",
        department:"测试部门",
        list:[ [{ name: "个人留餐", value: "1" },
            { name: "客饭留餐", value: "2" },
            { name: "会议留餐", value: "3" }]
        ],
        OrderCategory:["1"],
        PersonNumber:"",
        MealTime:"",
        Remake:"",
        show3:true
      }
    },
    methods:{
      testaa(data){

      }
    },
  mounted(){
   /* this.$on("changeOrg",function(){
           alert(0)

    })*/
  }
  }
</script>
<style >

</style>
