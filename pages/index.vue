<template>
  <FormsFormCehckBox
    v-model="checked"
    label="I agree to the terms and privacy."
  />
</template>
<script setup lang="ts">
const checked = ref(false);
</script>
