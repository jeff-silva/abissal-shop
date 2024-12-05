<template>
  <div class="mb-6">
    <v-alert
      v-if="!props.model"
      type="error"
      density="compact"
      rounded="0"
    >
      Atributo "model" não definido
    </v-alert>
    <v-file-input
      v-if="!props.modelValue"
      label="Thumbnail"
      hide-details="auto"
      :loading="props.model.storage.busy"
      @update:model-value="
        async (file) => {
          emit('update:modelValue', await props.model.storage.upload(file));
        }
      "
    />

    <v-text-field
      v-if="props.modelValue"
      v-model="props.modelValue.name"
      label="Nome do arquivo"
      hide-details="auto"
      append-inner-icon="mdi-delete"
      @click:append-inner="
        (slug) => {
          emit('update:modelValue', null);
        }
      "
    />

    <v-text-field
      v-if="props.modelValue"
      v-model="props.modelValue.url"
      label="URL"
      hide-details="auto"
    />

    <v-expand-transition>
      <img
        v-if="props.modelValue && props.modelValue.mime.startsWith('image/')"
        :src="props.modelValue.url"
        alt=""
        class="bg-surface-light rounded"
        style="width: 100%; max-height: 300px; object-fit: contain"
        @drag="console.log('drag', $event.dataTransfer.getData('text/html'))"
        @drop="console.log('drop', $event.dataTransfer.getData('text/html'))"
        @dragend="
          console.log('dragend', $event.dataTransfer.getData('text/html'))
        "
        @dragover="
          console.log('dragover', $event.dataTransfer.getData('text/html'))
        "
        @dragexit="
          console.log('dragexit', $event.dataTransfer.getData('text/html'))
        "
        @dragleave="
          console.log('dragleave', $event.dataTransfer.getData('text/html'))
        "
        @dragstart="
          console.log('dragstart', $event.dataTransfer.getData('text/html'))
        "
        @dragenter="
          console.log('dragenter', $event.dataTransfer.getData('text/html'))
        "
      />
    </v-expand-transition>

    <!-- <pre>{{ props.modelValue }}</pre> -->
  </div>
</template>

<script setup>
const _document = document;

const props = defineProps({
  modelValue: { type: [Object], default: null },
  model: { type: [Object], default: null },
});

const emit = defineEmits(["update:modelValue"]);
</script>
