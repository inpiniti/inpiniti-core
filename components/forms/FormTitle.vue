<template>
  <h2 class="text-base font-semibold leading-7 text-gray-900">{{ title }}</h2>
  <p v-if="description" class="mt-1 text-sm leading-6 text-gray-600">
    {{ description }}
  </p>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>
