<template>
  <nuxt-layout name="admin">
    <div class="d-flex justify-end">
      <app-actions
        :actions="
          () => [
            {
              icon: 'mdi-plus',
              color: 'success',
              text: 'Edit',
              onClick() {
                product.openEditor({});
              },
            },
          ]
        "
      />
    </div>
    <v-table>
      <colgroup>
        <col width="*" />
        <col width="200px" />
        <col width="0" />
      </colgroup>
      <tbody>
        <template v-for="o in product.list.data">
          <tr>
            <td>{{ o.name }}</td>
            <td>{{ o.amount }}</td>
            <td class="pa-0">
              <app-actions
                :actions="
                  () => [
                    {
                      icon: 'mdi-pen',
                      color: 'primary',
                      text: 'Edit',
                      onClick() {
                        product.openEditor(o);
                      },
                    },
                    { icon: 'mdi-delete', color: 'error', text: 'Delete' },
                  ]
                "
              />
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>
    <pre>product.list: {{ product.list }}</pre>

    <v-dialog
      v-model="product.dialog"
      max-width="700"
      scrollable
    >
      <v-form @submit.prevent="product.edit.save()">
        <v-card>
          <v-card-text>
            <v-text-field
              label="Nome"
              v-model="product.edit.name"
            />
            <v-text-field
              label="Valor"
              v-model.number="product.edit.amount"
              type="number"
            />
            <div class="d-flex justify-end">
              <v-btn
                text="Salvar"
                color="primary"
                type="submit"
              />
            </div>
            <div>Produtos</div>
          </v-card-text>
        </v-card>
      </v-form>
    </v-dialog>
  </nuxt-layout>
</template>

<script setup>
import ShopProduct from "~/models/ShopProduct.js";

const product = reactive({
  edit: new ShopProduct(),
  list: ShopProduct.search(),
  false: true,
  openEditor(data) {
    product.edit.fill(data);
    product.dialog = true;
  },
});

product.list.submit();
</script>
