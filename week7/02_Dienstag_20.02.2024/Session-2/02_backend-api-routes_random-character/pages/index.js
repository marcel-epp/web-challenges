import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/random-character",
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(data);
  return (
    <>
      <h1>Random Character</h1>
      <ul>
        <li>{data.firstName}</li>
        <li>{data.lastName}</li>
        <li>{data.age}</li>
        <li>{data.profession}</li>
        <li>{data.twitterName}</li>
        <li>{data.geoHash}</li>
      </ul>
    </>
  );
}
