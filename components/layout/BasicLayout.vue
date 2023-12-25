<template>
  <div class="w-full h-screen flex flex-col relative lg:p-4 lg:gap-4">
    <div class="absolute w-full h-screen bg-black opacity-50" v-if="open"></div>
    <header
      class="flex gap-4 shrink-0 items-center lg:px-0 px-4 lg:bg-inherit bg-blue-400 rounded-b-xl"
    >
      <div class="flex lg:hidden cursor-pointer" @click="open = !open">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <slot name="header" />
      <div class="flex lg:hidden cursor-pointer">
        <font-awesome-icon :icon="['fas', 'ellipsis']" />
      </div>
    </header>
    <div class="flex lg:flex-row flex-col w-full gap-4 grow-[1]">
      <nav
        class="shrink-0 lg:block flex flex-col gap-4 lg:relative absolute lg:h-full h-screen lg:top-auto top-0 lg:left-auto left-0 lg:w-fit w-2/3 lg:bg-inherit bg-white lg:p-0 p-4"
        :class="{ hidden: !open }"
      >
        <div class="flex w-full justify-end cursor-pointer" v-if="open">
          <font-awesome-icon :icon="['fas', 'xmark']" @click="open = !open" />
        </div>
        <slot name="nav" />
      </nav>
      <section class="grow-[1]">
        <slot name="section" />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const open = ref<boolean>(false);
</script>
