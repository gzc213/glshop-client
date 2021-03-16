<template>
  <div class="swiper-container">
                <div class="swiper-wrapper" ref="refName">
                         <div class="swiper-slide" v-for="carouselList in banner" :key="carouselList.id">
                                  <img :src="carouselList.imgUrl">
                          </div>
                 </div>
                                    <!-- 如果需要分页器 -->
                  <div class="swiper-pagination"></div>

                                    <!-- 如果需要导航按钮 -->
                   <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
        </div>
</template>

<script>
export default {
  name: "SlideShow",
  props: ["banner",'refName'],
   watch:{
      floor:{
          immediate:true,
          handler(newVal,oldVal){
             this.$nextTick(()=>{
               new Swiper (this.$refs[refName], {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                    
                    // 如果需要前进后退按钮
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
             })
          })        
        }
      }
  }
};
</script>

<style lang="less" scoped>
</style>
