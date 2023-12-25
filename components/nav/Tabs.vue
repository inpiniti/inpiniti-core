<template>
  <div class="pt-2 pl-4 pr-4 pb-0 flex gap-1" :class="dynamicClass">
    <Tab
      v-for="menu in menus"
      :label="menu.name"
      :count="menu.count"
      :color="color"
      :dark="selected == menu.name ? !dark : dark"
      @click="selected = menu.name"
    />
  </div>
  <div>
    <Temp text="temp" />
  </div>
</template>
<script setup lang="ts">
import Tab from "/components/elements/Tab.vue";
import Temp from "/components/elements/Temp.vue";

const selected = ref<string>("Home");

const props = defineProps<{
  color?: string;
  dark?: boolean;
  menus: any[];
}>();

const dynamicClass = computed(() => {
  return {
    [`text-${props.color ?? "gray"}-300 
        bg-${props.color ?? "gray"}-600 
    `]: props.dark,
    [`text-${props.color ?? "gray"}-600
        bg-${props.color ?? "gray"}-300 
    `]: !props.dark,
  };
});

onMounted(() => {
  selected.value = props.menus[0].name;
});
</script>
