<!--网上订菜-->
<template>
    <div>
      <Vtree v-on:changeOrg="testaa"></Vtree>
      <div style="width: 100%;position: relative">
        <img src="../assets/img/reservebanner.png" style="max-width: 100%"/>
        <Vnotice></Vnotice>
      </div>

    </div>
</template>

<script>
    import Vtree from "./OrgTree.vue"
    import Vnotice from "./Notice.vue"
    export default {
        data () {
            return {}
        },
      components: {
        Vtree,
        Vnotice
      },
        methods: {
          testaa(data){
            alert(data)
          }
        }

    }
</script>
<style>

</style>
