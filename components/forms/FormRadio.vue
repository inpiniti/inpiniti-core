<template>
  <div class="flex items-center gap-x-3" v-for="label in labels">
    <input
      type="radio"
      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      :checked="label == checked"
      @click="onClick(label)"
      readonly
    />
    <label
      class="block text-sm font-medium leading-6 text-gray-900"
      @click="onClick(label)"
      >{{ label }}</label
    >
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const checked = ref<string>("");
const props = defineProps<{
  labels: string[];
}>();
const emit = defineEmits(["click"]);
function onClick(label: string) {
  checked.value = label;
  emit("click", label);
}
</script>
