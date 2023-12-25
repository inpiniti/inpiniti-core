<template>
  <div
    class="bg-white rounded-xl flex flex-col justify-between pt-4 pl-4 pb-4 w-fit gap-12"
  >
    <div>
      <div class="bg-emerald-400 md:p-4 p-2 rounded-xl text-white w-fit">
        logo
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="border-r-4 pr-4 border-emerald-400">
        <div
          class="bg-emerald-100 text-emerald-600 font-bold p-2 md:pr-12 rounded-xl w-full flex gap-2 items-center cursor-pointer md:justify-normal justify-center"
        >
          <font-awesome-icon :icon="['fas', 'gamepad']" />
          <div class="md:block hidden">gamepad</div>
        </div>
      </div>
      <div class="pr-4">
        <div
          class="text-gray-600 font-bold p-2 md:pr-12 rounded-xl w-full flex gap-2 items-center cursor-pointer md:justify-normal justify-center"
        >
          <font-awesome-icon :icon="['fas', 'dice']" />
          <div class="md:block hidden">dice</div>
        </div>
      </div>
      <div class="pr-4">
        <div
          class="text-gray-600 font-bold p-2 md:pr-12 rounded-xl w-full flex gap-2 items-center cursor-pointer md:justify-normal justify-center"
        >
          <font-awesome-icon :icon="['fas', 'hat-wizard']" />
          <div class="md:block hidden">hat-wizard</div>
        </div>
      </div>
      <div class="pr-4">
        <div
          class="text-gray-600 font-bold p-2 md:pr-12 rounded-xl w-full flex gap-2 items-center cursor-pointer md:justify-normal justify-center"
        >
          <font-awesome-icon :icon="['fas', 'dungeon']" />
          <div class="md:block hidden">dungeon</div>
        </div>
      </div>
    </div>
    <div class="pr-4">
      <div
        class="bg-emerald-400 text-white flex gap-2 items-center md:p-4 p-2 md:justify-normal justify-center rounded-xl"
      >
        <font-awesome-icon :icon="['fas', 'headset']" />
        <div class="md:block hidden">support</div>
      </div>
    </div>
    <div class="pr-4">
      <div class="flex gap-2 items-center p-4 rounded-xl">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        <div class="md:block hidden">logout</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  menus: Array<{
    icon: string;
    label: string;
  }>;
  selectedMenu: string;
}>();
const emit = defineEmits(["click"]);
</script>
