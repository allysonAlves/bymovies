import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import{
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs"

import "./Movie.css"
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        
        setMovie(data);
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
        getMovie(movieUrl);
    },[]);

    const formatCurrency = (number) => {
        return number.toLocaleString("pt-br",{
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <div className="movie-page">
            {movie && (
                <>
                {<MovieCard movie={movie} showLink={false}/>}
                <p className="tagline">{movie.tagline}</p>
                <div className="info">
                    <h3>
                        <BsWallet2/> Orçamento:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsGraphUp/> Receita:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsHourglassSplit/> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </div>
                <div className="info description">
                    <h3>
                        <BsFillFileEarmarkTextFill/> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </div>

               
                {/* <video width={720} height={480} controls>
                    <source src="https://doc-0o-c4-docs.googleusercontent.com/docs/securesc/gt33bdlb6ikt1m1iq8ic8d6s7obk9nrn/n3cdjuhdj8nguc4ill1sgdhah05bunrl/1668826725000/08099452056286572247/03473481779958384597/1djAUHOdKXnzxQBl2_k9ATfRn0sV5YFSD?e=download&ax=AEKYgyTdDJwS-T0c8Heu7ctQcsPLDZ6ocbsnW89nWBYjz9R83Tx4VAsbs7KAdtULEtCz-Cx0TNv8igUyAWG2U4ZC8ONRHYYDmQ48L0b8Y3bmmAYF53T0OQ-m9XKLmLZZ-wWtEaWGq7JVDCcPg6DWJYG9JlGRS63c4i2A6YZp2F_a531YP4bnzOygNe2MpJjvqAg7eDILsp4GlOmZPPpGWfHPgjU60F-nozjFuxrLTNR7uRXmGGY9SglhmDPlFdh1pc9dExfWOQ-qlUUrehZ5h9o-2aTlwBnGvqWxxoyzuDHSMlOj3QLfHduGQPSxZ1s5QB22rTPAmlX_bjcIZzD4XRoQ-tVmJqwwN9_Nrs2jSv6rYoOA6lmnMmtqDNmLAneIsMsV32ApHoXU1xIC0M692csmZMyvNbJxGJaQ5N9cEFZjqOHe7GECHqWkvOrV3AXxdQ6GAV5O8JEfEcVHScxtP2l3aoOsPNMavKo8xwfCbtwc0UolphwHnLRyd53LtQsKPtRUgzcMdkNfREuPekHlkT8r7NINGyEMuvqupJ4k56fLHcvsUKZjIEOtlJaKB2sifq-dWetPjoPm6qojWiNH_SlZEC3jgBnHYC2GfUYQJ5RMzbIiktQn2zWAD-H5Erf71h1OBciPaX3llVbJSa35MccwsER6af05PHTKmwMHbqSJLQeC6fgLzgo64NvnLFPM5yoGYArLapJql3rsVDyozGG_zzZE4SHj36BYZzS1KgvD7Gxp3CM1cGHEc13gCB696xJyjw9FJaOQVY0Suzwt6FM1o47tdTfMexXGWHc3E37FqAG3eKTV85N06JP47Q9Ng8WojnFTNlPUv9yIJ8SzRAbSe_56phTxcLVBd6hrgCzw4cerMZJAxnwj-Gu6TRH3isomZjYQ&uuid=04cbe199-10ae-435d-9b31-5087a358f729&authuser=0&nonce=bhti3un39p3ji&user=03473481779958384597&hash=jk3hgk0acuhbbt47ha2kkamu5q99tvbu" type="video/mp4" />
                </video> */}
                </>
            )}
        </div>
    )
  };
  
  export default Movie;