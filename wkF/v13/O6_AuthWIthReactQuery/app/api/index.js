import axios from "axios"

const api_url = "https://fastapi4railway2022-production.up.railway.app/api/v1"
// const api_url = "http://127.0.0.1:5000/api/v1"

export const getProducts = async () => {
  const data = await fetch(`${api_url}/products/all`);
  return await data.json()
}

export const getProductById = async (product_id) => {
  const data = await fetch(`${api_url}/products/id/${product_id}`);
  return await data.json();
}


export const getProductsByCategory = async (category) => {
  const data = await fetch(`${api_url}/products/${category}`);
  return await data.json()
}

export const signInWithEmailPassword = async ({ email, password }) => {
    const res = await fetch(`${api_url}/users/signin`, {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email,
        password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    return await res.json();
};

export const registerWithEmailPassword = async ({ email, password, username }) => {
  const res = await fetch(`${api_url}/users/register`, {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      email,
      password,
      username,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  return await res.json();
};

