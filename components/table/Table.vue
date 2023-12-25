<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th
          class="px-4 py-2 text-left"
          :class="columnDynamicClass"
          v-for="column in columns"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="data in datas"
        :key="data.id"
        :class="dynamicClass(data)"
        @click="click(data)"
      >
        <td v-for="column in columns" :key="column" class="border-b px-4 py-2">
          {{ data[column] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const props = defineProps<{
  color?: string;
  dark?: boolean;
  datas?: any[];
}>();

const selected = ref<any>(null);

const emit = defineEmits(["click"]);

const dynamicClass = (data: any) => {
  const baseClass = {
    [`text-${props.color ?? "gray"}-200
        hover:text-${props.color ?? "gray"}-300
        bg-${props.color ?? "gray"}-700
        hover:bg-${props.color ?? "gray"}-800
        cursor-pointer
    `]: props.dark,
    [`text-${props.color ?? "gray"}-700
        hover:text-${props.color ?? "gray"}-800
        bg-${props.color ?? "gray"}-200
        hover:bg-${props.color ?? "gray"}-300
        cursor-pointer
    `]: !props.dark,
  };

  if (data === selected.value) {
    baseClass[`bg-${props.color ?? "gray"}-900`] = true;
  }

  return baseClass;
};

const columnDynamicClass = computed(() => {
  return {
    [`text-${props.color ?? "gray"}-200
        bg-${props.color ?? "gray"}-700
    `]: !props.dark,
    [`text-${props.color ?? "gray"}-700
        bg-${props.color ?? "gray"}-200
    `]: props.dark,
  };
});

const columns = computed(() => {
  return Object.keys(props.datas ? props.datas[0] : {});
});

function click(data: any) {
  selected.value = data;
  emit("click", data);
}
</script>
