import React from "react";
import Movies from "@/components/Movies";
import { SearchView } from "@/sections/search-by-name";


export default async function Page({ params }) {
  // console.log('hello')
  // console.log(params)
  // Ana sayfada params içinde keyword olup olmadığını kontrol et
  const { keyword } = params;
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&include_adult=false`
  // );
  // const data = await res.json();
  // console.log(data?.results, "data");
  return (
    <SearchView keyword={keyword} />
  );
};