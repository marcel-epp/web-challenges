import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);

  if (!product) {
    response.json({ status: "Joke not found." });
    return;
  }

  response.status(200).json(product);
}
