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
      thumbnail: {
        url: "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=",
        name: "Empty Image",
        mime: "image/jpeg",
        size: 1000,
      },
      dimona_slug: "",
      amount: null,
      active: null,
      colors: [],
      sizes: [],
      prints: [],
    };
  }
}
