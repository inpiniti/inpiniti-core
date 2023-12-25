<template>
  <div
    class="flex flex-col gap-4"
    :class="{
      [`bg-${props.color}-700`]: props.dark,
      [`bg-${props.color}-200`]: !props.dark,
    }"
  >
    <div class="flex flex-col gap-4">
      <Button
        icon="anchor"
        label="anchor"
        :color="color"
        :dark="dark ? active != 'anchor' : active == 'anchor'"
        isSearch
      />
      <div class="flex flex-row w-full gap-4">
        <Button class="w-full" icon="anchor" label="anchor" dark />
        <Button class="w-full" icon="anchor" label="anchor" />
      </div>
      <Button
        icon="water"
        label="water"
        :color="color"
        :dark="dark ? active != 'water' : active == 'water'"
      />
      <Button
        icon="ship"
        label="ship"
        :color="color"
        :dark="dark ? active != 'ship' : active == 'ship'"
      />
      <Button
        icon="otter"
        label="otter"
        :color="color"
        :dark="dark ? active != 'otter' : active == 'otter'"
      />
      <Button
        icon="shrimp"
        label="shrimp"
        :color="color"
        :dark="dark ? active != 'shrimp' : active == 'shrimp'"
      />
      <div class="border"></div>
      <Label icon="water" text="water" />
      <Button
        icon="sailboat"
        label="sailboat"
        :color="color"
        :dark="dark ? active != 'sailboat' : active == 'sailboat'"
      />
      <Button
        icon="person-swimming"
        label="person-swimming"
        :color="color"
        :dark="dark ? active != 'person-swimming' : active == 'person-swimming'"
      />
    </div>
    <div>
      <Button
        icon="anchor"
        label="anchor"
        size="3xl"
        :dark="!dark"
        :color="color"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "/components/elements/Button.vue";
import Label from "/components/elements/Label.vue";

const props = defineProps<{
  active: string;
  dark?: boolean;
  color?: string;
}>();
</script>
