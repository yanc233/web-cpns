<!--
 * @Author: Yanc
 * @Date: 2022-11-06 20:18:20
 * @LastEditTime: 2022-11-06 22:46:30
-->
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useMap } from "vue-ol7";

  defineProps({
    trueText: {
      type: String,
      default: "true",
    },
    falseText: {
      default: "false",
    },
  });

  const emit = defineEmits(["textClick"]);
  const map = useMap("core-map");
  const flag = ref(false);
  const domRef = ref();

  const onTextClick = () => {
    flag.value = !flag.value;
    emit("textClick", "点击了按钮");
  };

  onMounted(() => {
    map.setTarget(domRef.value);
  });
</script>

<template>
  <div @click="onTextClick">
    <span v-if="flag">{{ trueText }}</span>
    <span v-else>{{ falseText }}</span>
  </div>

  <div class="customMap" ref="domRef" id="map"></div>

  <slot> 一个默认插槽</slot>
  <slot name="right"></slot>
</template>

<style lang="less">
  .customMap {
    height: 200px;
    width: 200px;
  }
</style>
