<!--
 * @Author: Yanc
 * @Date: 2022-11-06 20:18:20
 * @LastEditTime: 2022-11-06 22:45:27
-->
<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { register } from "./CustomElement";
  register("test-element");
  const cusDom = ref();
  const num = ref(0);

  onMounted(() => {
    const dom = cusDom.value;
    dom.addEventListener("textClick", (e: any) => {
      console.log("文本点击事件", e);
      num.value++;
    });
  });
</script>

<template>
  <test-element
    :trueText.prop="'真的假不了'"
    :falseText.prop="num"
    ref="cusDom"
  >
    <div class="slot">替换默认插槽里面的内容</div>
    <div slot="right">具名插槽</div>
  </test-element>
</template>

<style lang="less">
  #app {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .slot {
      color: red;
    }
  }
</style>
