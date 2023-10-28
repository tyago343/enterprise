async function getData(): Promise<{
  Search:
    | {
        Title: string;
        Poster: string;
      }[];
  Response: string;
  Error: string;
}> {
  const response = await fetch("http://www.omdbapi.com/?apikey=19c6b5a7&s=abc");
  if (response.ok) {
    return response.json();
  }
  throw new Error("Network response was not ok.");
}

import Image from "next/image";

export default async function Home() {
  const { Search: movies } = await getData();
  return (
    <main>
      <label htmlFor="search">
        <h1 className="text-3xl font-bold text-center m-5 mb-16">
          OMDB Movie Search
        </h1>
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="w-5/6 m-auto block mb-5"
      />
      <ul className="grid-cols-6 grid gap-5 px-10 mt-8">
        {movies.map((movie) => (
          <li key={movie.Title}>
            <h2>{movie.Title}</h2>
            <Image src={movie.Poster} alt="" width={200} height={275} />
          </li>
        ))}
      </ul>
    </main>
  );
}
