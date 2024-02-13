import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function TheTwoTowers() {
  const towers = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <h1>{towers.title}</h1>
      <p>{towers.description}</p>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={144}
        alt="Fellowship"
      ></Image>

      <h2>
        {towers.books[0].title} - {towers.books[0].ordinal}
      </h2>
      <h2>
        {towers.books[1].title} - {towers.books[1].ordinal}
      </h2>
      <Link href="/volumes">🔙 - to Volumes</Link>
    </div>
  );
}
