<template>
  <div
    class="flex justify-between cursor-pointer relative overflow-hidden"
    :class="dynamicClass"
  >
    <div
      class="absolute w-full h-full bg-black opacity-50 text-white top-0 left-0 flex justify-center items-center gap-2"
      v-if="loading"
    >
      <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
      loading...
    </div>
    <div class="flex gap-2">
      <div v-if="icon"><font-awesome-icon :icon="['fas', icon]" /></div>
      <div>{{ label }}</div>
    </div>
    <div v-if="isSearch">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  icon?: string;
  label: string;
  isSearch?: boolean;
  color?: string;
  dark?: boolean;
  size?: string;
  loading?: boolean;
}>();

const dynamicClass = computed(() => {
  let size = "3";
  switch (props.size) {
    case "xs":
      size = "1";
      break;
    case "sm":
      size = "2";
      break;
    case "md":
      size = "3";
      break;
    case "lg":
      size = "4";
      break;
    case "xl":
      size = "5";
      break;
    case "2xl":
      size = "6";
      break;
    case "3xl":
      size = "7";
      break;
  }

  return {
    [`text-${props.color ?? "gray"}-200 
        hover:text-${props.color ?? "gray"}-50
        bg-${props.color ?? "gray"}-700 
        hover:bg-${props.color ?? "gray"}-600
        text-${props.size ?? "md"}
        p-${size}
        rounded-${props.size ?? "md"}
    `]: props.dark,
    [`text-${props.color ?? "gray"}-700
        hover:text-${props.color ?? "gray"}-950
        bg-${props.color ?? "gray"}-200 
        hover:bg-${props.color ?? "gray"}-300
        text-${props.size ?? "md"}
        p-${size}
        rounded-${props.size ?? "md"}
    `]: !props.dark,
  };
});
</script>
