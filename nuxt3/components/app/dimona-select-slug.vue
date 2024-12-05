<template>
  <div class="mb-6">
    <v-autocomplete
      label="Produto Dimona"
      :model-value="props.modelValue"
      :items="dimonaList.response.data"
      item-value="slug"
      item-title="name"
      hide-details="auto"
      :loading="dimonaList.busy"
      append-inner-icon="mdi-delete"
      @click:append-inner="
        () => {
          emit('update:modelValue', null);
        }
      "
      @update:model-value="
        (slug) => {
          emit('update:modelValue', slug);
        }
      "
    />

    <v-expand-transition>
      <div
        class="d-flex"
        v-if="dimonaItem"
      >
        <img
          :src="dimonaItem.image"
          alt=""
          style="width: 180px; height: 250px; object-fit: cover"
        />
        <div
          class="flex-grow-1 d-flex align-center justify-center bg-surface-light"
        >
          <div class="d-flex flex-column ga-1">
            <div class="text-center font-weight-bold text-uppercase">
              {{ dimonaItem.name }}
            </div>
            <div class="text-center text-success font-weight-bold">
              Valor: {{ dimonaItem.price }}
            </div>
            <div class="text-center">
              <v-btn
                :href="`https://camisadimona.com.br/produto/${dimonaItem.slug}/`"
                target="_blank"
              >
                Visitar
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: [Number, String], default: null },
});

const emit = defineEmits(["update:modelValue"]);

const dimonaList = useAxios({
  method: "post",
  url: "dimona://api/backend/products/filtered",
  params: { page: 1 },
  data: {
    search: null,
    categories: [],
    collections: [],
    colors: [],
    sizes: [],
    customizable: "only",
    order_by: "sales",
    per_page: 100,
  },
  response: {
    data: [],
  },
});

dimonaList.submit();

const dimonaItem = computed(() => {
  let item =
    dimonaList.response.data.filter((o) => o.slug == props.modelValue).at(0) ||
    null;

  if (item) {
    let itemColor = (item.colors.at(0) || {}).id || null;
    item.image = `https://res.cloudinary.com/dimona/image/upload/q_auto,f_auto,dpr_auto,w_auto:100:600/remote_media/storage/loja/img/skus/product-${item.id}-color-${itemColor}`;

    if ([16, 32].includes(item.category_id)) {
      item.image = `https://res.cloudinary.com/dimona/image/upload/v1614706997/Classic/${item.id}-${itemColor}.jpg`;
    } else if ([30, 24].includes(item.category_id)) {
      item.image = `https://res.cloudinary.com/dimona/image/upload/v1614706997/Quality/${item.id}-${itemColor}.jpg`;
    } else if ([3, 36, 37].includes(item.category_id)) {
      item.image = `https://res.cloudinary.com/dimona/image/upload/v1614706997/Prime/${item.id}-${itemColor}.jpg`;
    } else if ([36].includes(item.category_id)) {
      item.image = `https://res.cloudinary.com/dimona/image/upload/v1614706997/Bonés/${item.id}-${itemColor}.jpg`;
    }
  }

  return item;
});
</script>
