<template>
  <v-app-layout>
    <template #drawer="scope">
      <v-nav
        :items="[
          { title: 'Dashboard', to: '/admin' },
          {
            title: 'Loja',
            children: [{ title: 'Produtos', to: '/admin/shop_product' }],
          },
        ]"
      />
    </template>

    <template #header="scope">
      <slot
        name="header"
        v-bind="scope"
      ></slot>
    </template>

    <template #default="scope">
      <slot
        name="default"
        v-bind="scope"
      ></slot>
    </template>
  </v-app-layout>
</template>
