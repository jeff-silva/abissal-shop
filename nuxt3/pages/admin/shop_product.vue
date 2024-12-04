<template>
  <nuxt-layout name="admin">
    <v-container>
      <div class="d-flex justify-end"></div>
      <v-table class="border">
        <colgroup>
          <col width="*" />
          <col width="50px" />
          <col width="150px" />
          <col width="0" />
        </colgroup>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Ativo</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="o in product.search.data">
            <tr>
              <td>{{ o.name }}</td>
              <td>
                <v-chip
                  v-model="o.active"
                  color="success"
                  >Ativo</v-chip
                >
              </td>
              <td>{{ o.amount }}</td>
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
            <v-text-field
              label="Valor"
              v-model.number="product.save.data.amount"
              type="number"
            />
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
