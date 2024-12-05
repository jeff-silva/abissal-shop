<template>
  <nuxt-layout name="admin">
    <v-container>
      <div class="d-flex justify-end"></div>
      <v-table class="border">
        <colgroup>
          <col width="50px" />
          <col width="*" />
          <col width="50px" />
          <col width="150px" />
          <col width="0" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Ativo</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="o in product.search.data">
            <tr>
              <td class="pa-0">
                <img
                  v-if="o.thumbnail"
                  :src="o.thumbnail.url"
                  alt=""
                  style="width: 100%; height: 50px; object-fit: cover"
                />
              </td>
              <td>{{ o.name }}</td>
              <td>
                <v-chip
                  v-model="o.active"
                  color="success"
                  >Ativo</v-chip
                >
              </td>
              <td>
                <v-money
                  v-model="o.amount"
                  hide-details
                  density="compact"
                  variant="plain"
                  readonly
                />
              </td>
              <td class="pa-1">
                <app-actions
                  :actions="
                    () => [
                      {
                        icon:
                          product.delete.busy && product.delete.data.id == o.id
                            ? 'eos-icons:loading'
                            : 'mdi-pen',
                        color: 'primary',
                        text: 'Edit',
                        onClick() {
                          productDialog.set(o);
                        },
                      },
                      {
                        icon: 'mdi-delete',
                        color: 'error',
                        text: 'Delete',
                        onClick() {
                          product.delete.submit(o);
                        },
                      },
                    ]
                  "
                />
              </td>
            </tr>
          </template>
          <tr>
            <td
              class="pa-1"
              colspan="4"
            >
              <app-actions
                class="justify-end"
                :actions="
                  () => [
                    {
                      icon: 'mdi-plus',
                      color: 'success',
                      text: 'Edit',
                      onClick() {
                        productDialog.set({});
                      },
                    },
                  ]
                "
              />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>

    <v-dialog
      v-model="productDialog.value"
      max-width="700"
      scrollable
    >
      <v-form @submit.prevent="product.save.submit()">
        <v-card>
          <v-card-title>Editar item</v-card-title>
          <v-card-text>
            <v-text-field
              label="Nome"
              v-model="product.save.data.name"
            />
            <v-text-field
              label="SKU"
              v-model="product.save.data.sku"
            />
            <v-checkbox
              :label="product.save.data.active ? 'Ativo' : 'Inativo'"
              v-model="product.save.data.active"
              :true-value="true"
              :false-value="null"
            />
            <v-money
              label="Valor"
              v-model.number="product.save.data.amount"
            />
            <app-dimona-select-slug
              v-model.number="product.save.data.dimona_slug"
            />
            <v-file-input
              v-if="!product.save.data.thumbnail"
              label="Thumbnail"
              :loading="product.storage.busy"
              @update:model-value="
                async (file) => {
                  product.save.data.thumbnail = await product.storage.upload(
                    file
                  );
                }
              "
            />
            <img
              v-if="
                product.save.data.thumbnail &&
                product.save.data.thumbnail.mime.startsWith('image/')
              "
              :src="product.save.data.thumbnail.url"
              alt=""
              class="bg-surface-light rounded"
              style="width: 100%; max-height: 300px; object-fit: contain"
            />
            <v-text-field
              v-if="product.save.data.thumbnail"
              label="Valor"
              v-model="product.save.data.thumbnail.name"
            />
            <!-- <pre>{{ product.save.data.thumbnail || false }}</pre> -->
          </v-card-text>
          <v-card-actions>
            <v-btn
              text="Salvar"
              class="bg-primary"
              type="submit"
              :loading="product.save.busy"
            />
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </nuxt-layout>
</template>

<script setup>
import ShopProduct from "~/models/ShopProduct.js";
const product = reactive(new ShopProduct());
product.search.submit();

product.on("saved", () => {
  product.search.submit();
  productDialog.set(null);
});

product.on("deleted", () => {
  product.search.submit();
  productDialog.set(null);
});

const productDialog = reactive({
  value: false,
  set(data = {}) {
    product.save.set(data || {});
    productDialog.value = !!data;
  },
});
</script>
