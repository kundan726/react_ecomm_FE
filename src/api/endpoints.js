const ENDPOINTS = {
  dev: {
    LOGIN_MODULE: {
      SIGN_UP: "http://localhost:3000/api/auth/signUp",
      LOGIN: "http://localhost:3000/api/auth/login",
    },
    PRODUCT_MODULE: {
      productApi: "https://freetestapi.com/api/v1/products",
      addProduct: "http://localhost:3000/api/products/addProduct",
      fetchProduct: (id) =>
        `http://localhost:3000/api/products/fetchProduct?_id=${id}`,
      listSellerProducts: (userEmail) =>
        `http://localhost:3000/api/products/listSellerProducts?userEmail=${userEmail}`,
      editProduct: "http://localhost:3000/api/products/editProduct",
      deleteProduct: (id) =>
        `http://localhost:3000/api/products/deleteProduct?id=${id}`,
      listProduct: "http://localhost:3000/api/products/listProducts",
    },
  },
};

export default ENDPOINTS;
