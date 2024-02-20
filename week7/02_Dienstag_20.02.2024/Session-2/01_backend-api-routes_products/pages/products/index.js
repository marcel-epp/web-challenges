import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, isLoading, error } = useSWR(
    "http://localhost:3000/api/products",
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load</div>;

  // render data
  return (
    <>
      <Link href="/api/products">/api/products</Link>
      <br />
      <Link href="/api/products/1">/api/products/1</Link>
      {data.map(({ id, name, description, price, currency, category }) => (
        <div key={id}>
          <h2>{name}</h2>
          <ul>
            <li>{description}</li>
            <li>{category}</li>
            <li>
              {price} {currency}
            </li>
          </ul>
        </div>
      ))}
    </>
  ); // Hello Luke Skywalker!
}
