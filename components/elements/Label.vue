<template>
  <div class="flex items-center gap-2 text-gray-400 w-fit">
    <font-awesome-icon :icon="['fas', icon]" />
    {{ text }}
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  icon: string;
  text: string;
}>();
</script>
