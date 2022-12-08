// import axios from "axios"

const api_url = "https://fastapi4railway2022-production.up.railway.app/api/v1"

export const getProductById = async (product_id) => {
  const data = await fetch(`${api_url}/products/id/${product_id}`);
  return await data.json();
}

export const getProducts = async () => {
  const data = await fetch(`${api_url}/products/all`);
  return await data.json()
}

export const getCategoryProducts = async (category) => {
  const data = await fetch(`${api_url}/products/${category}`);
  return await data.json()
}


