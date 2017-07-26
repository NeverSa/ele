<template>
    <div class="tree">
       <div @click="opentree" class="tree-option">
        <div class="option"><i class="iconfont icon-weibiaoti1" style="margin-right: 5px"></i><span>机构选择</span><i style="margin-left: 5px" class="iconfont icon-weibiaoti1"></i></div>
         <div>{{orgname}}</div>
       </div>
        <popup v-model="show" height="100%" position="top" >
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
        </popup>
    </div>
</template>

<script>
  import {Popup} from 'vux'
  import {Tree} from 'element-ui'
    export default {
        name:"Vtree",
        components: {
          Popup,
          Tree
        },
      data() {
        return {
          show:false,
          orgname:"",
          data: [{
            "pid": "",
            "id": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
            "text": "杭州电力",
            "type": "总部",
            "children": [
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "6b9325e6-41f5-43ad-a3bf-2f2687f41ba5",
                "text": "滨江食堂",
                "type": "餐厅",
                "children": []
              },
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "2a32eacf-0c6a-483a-bde8-531ebdd59da4",
                "text": "物资分公司食堂",
                "type": "餐厅",
                "children": []
              },
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "fb4d641d-9e03-4493-b702-48cf180fdcf0",
                "text": "大有食堂",
                "type": "餐厅",
                "children": []
              },
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "0f68afb9-96c7-4a17-a287-cb131b931ebd",
                "text": "测试食堂",
                "type": "餐厅",
                "children": []
              },
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "3fcca5c8-abef-4a2f-8cc4-366be15939f6",
                "text": "机关食堂",
                "type": "餐厅",
                "children": []
              },
              {
                "pid": "0d8ecfdf-b8c4-493a-a4d3-afbbac07feea",
                "id": "3cde7ebd-207d-4265-a030-f790915d0784",
                "text": "城北食堂",
                "type": "餐厅",
                "children": []
              }
            ]
          },
            {
              "pid": "",
              "id": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
              "text": "桐庐电力",
              "type": "总部",
              "children": [
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "d8cb46ce-4cad-4fe4-91b7-c59db87ec4e9",
                  "text": "测试餐厅",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "9eb3492c-86a2-4fdc-a910-b1bd6dc18f5c",
                  "text": "mytest",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "00e136ce-43bb-4e21-942f-d203d6ee25b5",
                  "text": "桐庐机关食堂",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "6d9d3ee3-c3c0-4e27-8200-97cc6198efd5",
                  "text": "桐庐大奇山食堂",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "09bfe53e-dcb1-4abe-b876-385ec5ea4273",
                  "text": "代购点",
                  "type": "超市",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "8a8c66cb-e4cd-4431-9286-ece7b0ec6da0",
                  "text": "桐庐洋塘食堂",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "2b034837-8e14-4dd4-b9c6-2867afa1c59f",
                  "text": "桐庐电力下小餐厅测试",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "1ace5964-83b0-4773-a368-302b4c333eeb",
                  "text": "通策食堂1",
                  "type": "餐厅",
                  "children": []
                },
                {
                  "pid": "78e15c05-0601-4cf9-84e4-16b47ce60c18",
                  "id": "d93c6498-a1bc-43f7-93ce-69f702713af1",
                  "text": "通策食堂",
                  "type": "餐厅",
                  "children": []
                }
              ]
            },
            {
              "pid": "",
              "id": "fa209d78-6590-4d61-b1ce-c2cde042f985",
              "text": "淳安电力",
              "type": "总部",
              "children": []
            },
            {
              "pid": "",
              "id": "d0707989-4c71-4cbb-885e-1d5320b11006",
              "text": "富阳电力",
              "type": "总部",
              "children": []
            },
            {
              "pid": "",
              "id": "18c37053-eba5-46ba-911e-0702d8689874",
              "text": "建德电力",
              "type": "总部",
              "children": []
            },
            {
              "pid": "",
              "id": "382ded02-b77a-4984-9826-6b24f952ef44",
              "text": "临安电力",
              "type": "总部",
              "children": []
            },
            {
              "pid": "",
              "id": "a1e4734b-37a5-4ccd-93ca-6efa07e63477",
              "text": "萧山电力",
              "type": "总部",
              "children": []
            },
            {
              "pid": "",
              "id": "68831ae3-2a3a-4023-b9de-8d4749397c8f",
              "text": "余杭电力",
              "type": "总部",
              "children": []
            }],
          defaultProps: {
            children: 'children',
            label: 'text'
          }
        };
      },

        methods: {
          opentree(){
            this.show=true
          },
          handleNodeClick(data,node,self) {
             if(node.childNodes.length==0){
               this.$emit('changeOrg',data.id);
               console.log(data.id);
               this.show=false;
               this.orgname=data.text;
             }


          }

        }

    }
</script>
<style>

</style>
