import { getAllProducts } from "@/services/productServices.js";

const products = getAllProducts();

export default function handler(request, response) {
  response.status(200).json(products);
}
