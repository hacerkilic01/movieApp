import React from "react";
import Image from "next/image";
const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail, "movieDetail");

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />

      <div className="absolute">
        <div className="text-white text-4xl font-bold my-3">
          {movieDetail?.title}
        </div>
        <div className="text-white w-1/2">{movieDetail?.overview}</div>
        <div className="text-white ">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <button className="text-white my-2 border rounded-md w-32 hover:bg-white hover:text-black p-2 text-center tex-lg cursor-pointer">
          Trail
        </button>
      </div>
    </div>
  );
};
export default Page;
