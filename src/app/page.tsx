"use client";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { Movie } from "../interfaces/Movie";

async function getData(searchParam: string): Promise<{
  Search: Movie[];
  Response: string;
  Error: string;
}> {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=19c6b5a7&s=${searchParam}`
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error("Network response was not ok.");
}
export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = await getData(search);
    setMovies(data.Search);
  };
  return (
    <main>
      <label htmlFor="search">
        <h1 className="text-3xl font-bold text-center m-5 mb-16">
          OMDB Movie Search
        </h1>
      </label>
      <form className="relative rounded-xl w-5/6 m-auto" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          className="h-20 border-0 text-[#2f2f2f] text-3xl w-full block mb-5"
          value={search}
          placeholder="Input at least 3 characters"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="h-full" type="submit">
          Search
        </button>
      </form>
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
