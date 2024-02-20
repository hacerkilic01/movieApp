"use client"

import { useEffect, useState } from "react";
import Movies from "@/components/Movies";

const apiKey = "YOUR_API_KEY"

export default function SearchView({ keyword }) {
    const [movies, setMovies] = useState();

    useEffect(() => {
        getMovies(keyword);
    }, [keyword]);


    const getMovies = async (kywd) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&include_adult=false`
        );
        const data = await res.json();
        setMovies(data?.results);
    };

    return (
        <div>
            {!movies ?
                <div>Aranan şey bulunamadı!!!</div>
                :
                <div className="flex items-center flex-wrap gap-3">
                    {movies.map((dt, i) => (
                        <Movies key={i} dt={dt} />
                    ))}
                </div>
            }
        </div>
    );
};