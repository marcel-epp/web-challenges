import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
      <Link href="/api/products">/api/products</Link>
      <br />
      <Link href="/api/products/1">/api/products/1</Link>
      <br />
      <Link href="/products">/products</Link>
    </div>
  );
}
