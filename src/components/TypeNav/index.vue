<template>
   <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseleave="blockDiv" @mouseenter="isShow = true">
                    <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="isShow">
                    <div class="all-sort-list2" >
                        <div class="item" 
                            v-for="(c1,index) in dateCategoryList" 
                            :key="c1.categoryId"
                            :class="{item_on:currentIndex===index }"
                            @mouseenter="movEnter(index)"
                            @click="toSearch">
                            <h3>
                                <!-- 事件委托 -->
                                <a href="javascript:;" 
                                    :data-categoryName='c1.categoryName' 
                                    :data-category1Id ='c1.categoryId'
                                    >{{c1.categoryName}}</a>
                                <!-- <a href="javascript:;" 
                                    @click="$router.push({
                                                 name:'search',
                                                query:{
                                                     categoryName:c1.categoryName,
                                                     category1Id:c1.categoryId 
                                                      }
                                                   })"
                                    >{{c1.categoryName}}</a> -->
                                <!-- 第一种方式:声明式导航  -->
                                 <!-- <router-link 
                                   :to="{
                                       name:'search',
                                       query:{
                                         categoryName:c1.categoryName,
                                         category1Id:c1.categoryId
                                       }
                                   }"
                                    >{{c1.categoryName}}</router-link> -->
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore" 
                                        v-for="c2 in c1.categoryChild" 
                                        :key="c2.categoryId">
                                        <dt>
                                            <!-- 事件委托 -->
                                 <a href="javascript:;" 
                                    :data-categoryName='c2.categoryName' 
                                    :data-category2Id ='c2.categoryId'
                                    >{{c2.categoryName}}</a>

                                            <!-- 编程式导航 -->
                                             <!-- <a href="javascript:;" 
                                                @click="$router.push({
                                                            name:'search',
                                                            query:{
                                                                categoryName:c2.categoryName,
                                                                category2Id:c2.categoryId 
                                                                }
                                                            })"
                                                >{{c2.categoryName}}</a> -->


                                            <!-- 第一种方式:声明式导航
                                            <router-link
                                                    :to="{
                                                    name: 'search',
                                                    query: {
                                                        categoryName: c2.categoryName,
                                                        category2Id: c2.categoryId,
                                                    },
                                                    }"
                                                >{{ c2.categoryName }}</router-link> -->
                                        </dt>
                                        <dd>
                                            <em 
                                                v-for="c3 in c2.categoryChild" 
                                                :key="c3.categoryId">
                                                <!-- 事件委托 -->
                                            <a href="javascript:;" 
                                                :data-categoryName='c3.categoryName' 
                                                :data-category3Id ='c3.categoryId'
                                                >{{c3.categoryName}}</a>


                                                <!-- 编程式导航 -->
                                                <!-- <a href="javascript:;" @click="$router.push({
                                                            name:'search',
                                                            query:{
                                                                categoryName:c3.categoryName,
                                                                category3Id:c3.categoryId 
                                                            }
                                                        })">{{c3.categoryName}}</a> -->



                                                    <!-- 第一种方式:声明式导航
                                                        <router-link 
                                                            :to="{
                                                                name:'search',
                                                               query:{
                                                                    categoryName:c3.categoryName,
                                                                    category3Id:c3.categoryId
                                                                }
                                                            }"
                                                        >{{c3.categoryName}}</router-link> -->
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </transition>
                </div >
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
        </div>

</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data(){
      return{
        currentIndex :-1, //三级菜单划过高亮
        isShow:true //标志三级菜单导航是否隐藏
      }
  },
  mounted(){
      if(this.$route.path !=='/home') this.isShow = false
  },
  methods:{
      movEnter:throttle(function(index){
          this.currentIndex = index
      }, 20, { 'trailing': false }),

      //事件委托
      toSearch(e){
         let {dataset} = e.target
         let {categoryname,category1id,category2id,category3id} = dataset
        
         if(categoryname){
         let location ={
             name:'search'
         }
         let query ={
             categoryName :categoryname
         }
         if(category1id){
           query.category1Id=category1id
         }else if(category2id){
           query.category2Id=category2id
         }else if(category3id){
           query.category3Id=category3id
         } 
         location.query = query
         if(this.$route.params){
            location.params = this.$route.params
         }
            this.$router.replace(location)
         }
      },
      blockDiv(){
          this.currentIndex=-1
          if(this.$route.path !== '/home') this.isShow = false
      }
  },
  computed:{
      ...mapState({
          dateCategoryList:state => state.typeNav.dateCategoryList
      })
  }
}
</script>

<style lang="less" scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #d4a57e;
                z-index: 999;
                &.sort-enter{
                    opacity: 0;
                    height: 0;
                }
                &.sort-enter-to{
                    opacity: 1;
                    height: 461px;
                }
                &.sort-enter-active{
                    transition: all .5s;
                    
                }
                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 615px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on{
                             background-color: hotpink;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
