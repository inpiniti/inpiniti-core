<template>
  <div
    class="flex justify-between cursor-pointer relative overflow-hidden gap-2"
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
    <div class="rounded-full" :class="BadgeDynamicClass">
      {{ count }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  icon?: string;
  label: string;
  color?: string;
  dark?: boolean;
  size?: string;
  loading?: boolean;
  count?: number;
}>();

function sizeToNumber(size: string | undefined) {
  switch (size) {
    case "xs":
      return 1;
    case "sm":
      return 2;
    case "md":
      return 3;
    case "lg":
      return 4;
    case "xl":
      return 5;
    case "2xl":
      return 6;
    case "3xl":
      return 7;
    default:
      return 3;
  }
}

const BadgeDynamicClass = computed(() => {
  const size = sizeToNumber(props.size);

  return {
    [`text-${props.color ?? "gray"}-200 
        hover:text-${props.color ?? "gray"}-50
        bg-${props.color ?? "gray"}-700 
        hover:bg-${props.color ?? "gray"}-600
        text-${props.size ?? "md"}
        px-${size}
    `]: !props.dark,
    [`text-${props.color ?? "gray"}-700
        hover:text-${props.color ?? "gray"}-950
        bg-${props.color ?? "gray"}-200 
        hover:bg-${props.color ?? "gray"}-300
        text-${props.size ?? "md"}
        px-${size}
    `]: props.dark,
  };
});

const dynamicClass = computed(() => {
  const size = sizeToNumber(props.size);

  return {
    [`text-${props.color ?? "gray"}-200 
        hover:text-${props.color ?? "gray"}-50
        bg-${props.color ?? "gray"}-700 
        hover:bg-${props.color ?? "gray"}-600
        text-${props.size ?? "md"}
        p-${size}
        rounded-t-${props.size ?? "md"}
    `]: props.dark,
    [`text-${props.color ?? "gray"}-700
        hover:text-${props.color ?? "gray"}-950
        bg-${props.color ?? "gray"}-200 
        hover:bg-${props.color ?? "gray"}-300
        text-${props.size ?? "md"}
        p-${size}
        rounded-t-${props.size ?? "md"}
    `]: !props.dark,
  };
});
</script>
