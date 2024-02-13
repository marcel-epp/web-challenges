import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function ReturnOfTheKing() {
  const returnKing = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <div>
      <h1>{returnKing.title}</h1>
      <p>{returnKing.description}</p>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={144}
        alt="Fellowship"
      ></Image>

      <h2>
        {returnKing.books[0].title} - {returnKing.books[0].ordinal}
      </h2>
      <h2>
        {returnKing.books[1].title} - {returnKing.books[1].ordinal}
      </h2>
      <Link href="/volumes">🔙 - to Volumes</Link>
    </div>
  );
}
