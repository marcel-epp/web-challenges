import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  function review() {
    if (data.reviews.length === 0) {
      return "Review: -";
    } else {
      return data.reviews[0].text;
    }
  }
  console.log(data);
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Review: {review()}</p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
