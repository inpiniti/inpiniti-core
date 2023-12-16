<template>
  <div class="relative flex gap-x-3">
    <div class="flex h-6 items-center">
      <input
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        @change="updateModelValue"
        :checked="modelValue"
      />
    </div>
    <div class="text-sm leading-6">
      <label class="font-medium text-gray-900" @click="updateModelValue">{{
        label
      }}</label>
      <p class="text-gray-500">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  label: string;
  description?: string;
  modelValue: boolean;
}>();

const emit = defineEmits(["click", "update:modelValue"]);

const updateModelValue = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>
