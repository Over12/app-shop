import { API } from "../constants/API";

export async function getProducts() {
  const response = await fetch(API.url + 'products')
  const data = await response.json()

  return data
}