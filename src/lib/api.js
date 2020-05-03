import axios from "axios";

export async function getProducts() {
  const response = await axios.get(
    `https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`
  );
  const data = response.data;
  return data;
}

export async function getProduct(product_id) {
  const response = await axios.get(
    `https://5dd14f8d15bbc2001448d07d.mockapi.io/products/${product_id}`
  );
  const data = response.data;
  return data;
}

export async function deleteProduct(product_id) {
  const response = await axios.post(
    `https://5dd14f8d15bbc2001448d07d.mockapi.io/products/${product_id}`
  );
  const data = response.data;
  return data;
}

export async function createProduct(product_name, product_avatar) {
  const response = await axios.post(
    "https://5dd14f8d15bbc2001448d07d.mockapi.io/products",
    {
      name: product_name,
      avatar: product_avatar,
    }
  );
  const data = response.data;
  return data;
}
