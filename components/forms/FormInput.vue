<template>
  <label
    for="last-name"
    class="block text-sm font-medium leading-6 text-gray-900"
    >{{ label }}</label
  >
  <div class="mt-2">
    <input
      :type="type || 'text'"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
      :value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  label: string;
  type?: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  emit("update:modelValue", value);
};
</script>
