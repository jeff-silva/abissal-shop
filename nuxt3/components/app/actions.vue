<template>
  <div class="d-flex ga-1">
    <template v-for="o in props.actions()">
      <v-btn
        v-bind="o"
        flat
        rounded="0"
        size="40"
        v-tooltip="o.text ?? undefined"
      />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  actions: { type: Function, default: () => [] },
});
</script>
