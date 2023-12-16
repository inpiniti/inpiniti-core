<template>
  <div class="col-span-full">
    <label
      for="about"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ title }}</label
    >
    <div class="mt-2">
      <textarea
        id="about"
        name="about"
        rows="3"
        class="block w-full rounded-md border-0 p-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
      />
    </div>
    <p class="mt-3 text-sm leading-6 text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>
