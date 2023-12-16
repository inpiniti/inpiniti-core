<template>
  <div
    class="p-4 rounded-xl flex flex-row justify-between items-center"
    :class="{
      'bg-gray-800 text-white': dark,
      'bg-white': !dark,
    }"
  >
    <div class="flex flex-col gap-2">
      <div class="font-bold text-3xl">{{ title }}</div>
      <div class="flex flex-row gap-6">
        <Label icon="briefcase" text="Full-time" />
        <Label icon="location-dot" text="Remote" />
        <Label icon="sack-dollar" text="$120k - $140k" />
        <Label icon="calendar-days" text="Closing on January 9, 2020" />
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <Button icon="pencil-alt" text="Edit" :dark="dark" />
      <Button icon="eye" text="View" :dark="dark" />
      <Button icon="paper-plane" text="Publish" active :dark="dark" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Label from "/components/elements/Label.vue";
import Button from "/components/elements/Button.vue";
const props = defineProps<{
  title: string;
  dark?: boolean;
}>();
</script>
