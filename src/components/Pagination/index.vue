<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('changePageNo',pageNo-1)">上一页</button>
    <button v-if="startEnd.start !== 1" @click="$emit('changePageNo',1)">1</button>
    <button v-if="startEnd.start > 2">···</button>

    <button 
        v-for="tt in startEnd.end" 
        :key="tt"
        v-if="tt >= startEnd.start"
        :class="{active:tt===pageNo}"
        @click="$emit('changePageNo',tt)"
        >{{tt}}</button>

    <button v-if="startEnd.end < pageTotal - 1">···</button>
    <button v-if="startEnd.end !== pageTotal" @click="$emit('changePageNo',pageTotal)">{{ pageTotal }}</button>
    <button :disabled="pageNo === pageTotal" @click="$emit('changePageNo',pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //当前页
    pageNo: {
      type: Number,
      default: 1,
    },
    //每页显示条数
    pageSize: {
      type: Number,
      default: 1,
    },
    //总条数
    total: {
      type: Number,
      default: 1,
    },
    //连续页数
    pageConsecutive: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    //总页数
    pageTotal() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      let start = 0;
      let end = 0;
      let { pageConsecutive, pageNo, pageTotal } = this;
      if (pageConsecutive >= pageTotal) {
        start = 1;
        end = pageTotal;
      } else {
        start = Math.floor(pageNo - pageConsecutive / 2);
        end = Math.floor(pageNo + pageConsecutive / 2);
        if (start <= 1) {
          start = 1;
          end = pageConsecutive;
        } else if (end >= pageTotal) {
          end = pageTotal;
          start = end - pageConsecutive + 1;
        }
      }
      return { end, start };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>

