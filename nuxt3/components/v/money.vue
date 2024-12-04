<template>
  <v-text-field
    :model-value="maska.value"
    v-maska="maska.options"
    @maska="maska.handler"
  />
</template>

<script setup>
/**
 * Install: yarn add -D maska
 */
import { vMaska } from "maska/vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: { type: [Number], default: null },
});

const maska = reactive({
  value: parseFloat(props.modelValue).toFixed(2),
  options: {
    mask: "9.99#,##",
    reversed: true,
    tokens: { 9: { pattern: /[0-9]/, repeated: true } },
  },
  handler(ev) {
    emit("update:modelValue", ev.detail.unmasked / 100);
  },
});

watch(
  () => props.modelValue,
  (propsModelValue) => {
    maska.value = parseFloat(propsModelValue).toFixed(2);
  }
);
</script>
