<template>
 <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in dataFloorList" :key="index" :floor='floor'></Floor>
    <Brand></Brand>
 </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      this.getdataFloorList()
    },
    methods:{
      getdataFloorList(){
        this.$store.dispatch('getdataFloorList')
      }
    },
    computed:{
      ...mapState({
        dataFloorList:state => state.typeNav.dataFloorList
      })
    }
}
</script>

<style lang="less" scoped>
  
</style>>
