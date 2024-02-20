'use client';
import React, { useEffect, useState } from "react";
import Movies from "@/components/Movies";

const Page = ({ searchParams }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "YOUR_API_KEY";
      const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=${apiKey}&language=en-US&page=1`);

      const jsonData = await res.json();
      setData(jsonData.results);
    };

    fetchData();
  }, [searchParams.genre]);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 ">
      {data?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;