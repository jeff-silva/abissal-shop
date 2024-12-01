import BaseModel from "./BaseModel.js";

export default class extends BaseModel {
  collection() {
    return "shop_product";
  }

  defaults() {
    return {
      id: null,
      sku: "",
      name: "",
      thumbnail: null,
      dimona_slug: "",
      amount: null,
      active: null,
      colors: [],
      sizes: [],
      prints: [],
    };
  }
}
