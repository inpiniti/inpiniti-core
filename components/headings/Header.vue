<template>
  <div
    class="flex gap-4 w-full"
    :class="{
      [`bg-${props.color}-700`]: props.dark,
      [`bg-${props.color}-200`]: !props.dark,
    }"
  >
    <Button
      class="w-full"
      :icon="icon"
      :label="label"
      :color="color"
      :dark="dark"
    />
  </div>
</template>
<script setup lang="ts">
import Button from "/components/elements/Button.vue";
const props = defineProps<{
  label: string;
  icon?: string;
  dark?: boolean;
  color?: string;
}>();
</script>
