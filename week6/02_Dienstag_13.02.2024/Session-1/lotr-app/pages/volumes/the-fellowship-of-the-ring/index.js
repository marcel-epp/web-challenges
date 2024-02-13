import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function FellowshipOfTheRing() {
  const fellowship = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>{fellowship.title}</h1>
      <p>{fellowship.description}</p>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={144}
        alt="Fellowship"
      ></Image>

      <h2>
        {fellowship.books[0].title} - {fellowship.books[0].ordinal}
      </h2>
      <h2>
        {fellowship.books[1].title} - {fellowship.books[1].ordinal}
      </h2>
      <Link href="/volumes">🔙 - to Volumes</Link>
    </div>
  );
}
