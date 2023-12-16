<template>
  <div
    class="flex items-center gap-2 w-fit px-3 py-1 rounded-lg cursor-pointer"
    :class="{
      'text-white bg-indigo-600 hover:bg-indigo-500': active,
      'text-gray-400  bg-white hover:bg-gray-100 border border-gray-400':
        !active && !dark,
      'text-white bg-gray-700 hover:bg-gray-600': !active && dark,
    }"
  >
    <font-awesome-icon :icon="['fas', icon]" />
    <div
      :class="{
        'text-white': active || (!active && dark),
        'text-black': !active && !dark,
      }"
    >
      {{ text }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  icon: string;
  text: string;
  active?: boolean;
  dark?: boolean;
}>();
</script>
