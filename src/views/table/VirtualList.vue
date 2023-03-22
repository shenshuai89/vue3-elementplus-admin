<template>
  <div ref="box" class="scrollWrapper">
    <div class="scrollContainer" :style="{ height: boxHeight + 'px' }">
      <div
        class="scrollWrapper-item"
        :style="{
          height: rowHeight + 'px',
          lineHeight: rowHeight + 'px',
          top: (index + offsetIndex) * rowHeight + 'px',
        }"
        v-for="(item, index) in offsetData"
        :key="item.index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, getCurrentInstance } from 'vue';
const height = 200;
const rowHeight = 30;
const offset = ref(0);
// 创建模拟数据
const data = Array(10000)
  .fill('')
  .map((v, i) => {
    return { index: i };
  });
// 获取dom节点
const box = ref<HTMLElement>();
// 所有数据展示完全需要的高度
const boxHeight = computed(() => data.length * rowHeight);
// 能够展示出来的数据
const offsetData = computed(() => {
  let count = Math.ceil(height / rowHeight); // 可视区域显示的个数
  let index = Math.floor(offset.value / rowHeight); // 偏移的元素个数
  return data.slice(index, count + index);
});
// offset偏移的高度除以每行的高度，显示的第一个元素的索引，用来计算偏移的距离
const offsetIndex = computed(() => Math.floor(offset.value / rowHeight));
onMounted(() => {
  // console.log(getCurrentInstance().refs.box)
  box.value && box.value.addEventListener(
    'scroll',
    () => {
      offset.value = box.value!.scrollTop;
      console.log(offset.value);
    },
    false
  );
});
</script>

<style scoped>
.scrollWrapper {
  border: 1px solid #a0a0a0;
  overflow: auto;
  height: 200px;
  padding: 0 10px;
}
.scrollWrapper > div {
  overflow: hidden;
  position: relative;
}
.scrollWrapper > div > div {
  position: absolute;
  width: 100%;
}
.scrollWrapper-item {
  box-sizing: border-box;
  border-bottom: 1px dotted red;
}
</style>
