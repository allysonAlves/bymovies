import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const query = searchParams.get("q");
    const page = searchParams.get("page");         

    const [[data,movies,pages],Setdata] = useState([[],[],0]);
   
    const arrays = [1];
    let buttons = [1];

    const getSearchedMovies = async(url) =>{        // accessing API
        const res = await fetch(url);
        const data = await res.json();   
      
        Setdata([data, data.results, data.total_pages]);     
    }

    const defineDownNavigation = () =>{             // create pages numbers array
        const currentPage = parseInt(page);       
        let filtred = [0];
        let art = 2;              

        for (let i = 1; i < pages; i++) {
            arrays[i] = i +1;
            art++;   
        }

        filtred = arrays.filter(e => e > currentPage - 5 && e <= currentPage );
        filtred = filtred.concat(arrays.filter(e => e > currentPage && e < currentPage + 5));
               
        buttons = filtred;                    
    }

    defineDownNavigation();
    
    useEffect(()=>{
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR&page=${page}`;       
        getSearchedMovies(searchWithQueryURL);
        window.scrollTo({top:0, behavior: 'smooth'});
        
    },[query,page]);
    
    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>                
            </h2>
            <div className="founds">Founds: {data.total_results??0}</div>
            <div className="movies-container">
                {movies.length === 0&& data.total_results? 
                <p>Carregando...</p>:
                !data.total_results &&
                <p>No results to: <b>{query}</b></p>}

                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}

            </div>
            <div className="down-nav-bar">               
                {buttons && buttons.map(e => 
                    <button className={e == page? "btnselected":"none"} onClick={()=> navigate(`/search?q=${query}&page=${e}`)} key={e}>
                        {e}
                    </button>)} 
            </div>
        </div>        
    )
  };
  
  export default Search;