import React from "react";
import MovieCard from "./MovieCard";


const MovieCardList = ({ movies }) => {
    console.log(movies)


    return (

       movies.movies.map((movie, i) => {
            if (movie && movie.show) {
                let rating = movie.show.rating && movie.show.rating.average
                let img = movie.show.image && movie.show.image.original
                let genres = movie.show.genres
                let network = movie.show.network && movie.show.network.name
                let summary = movie.show.summary

                
                return <MovieCard key={i} name={movie.show.name} img={img} rating={rating} genres={genres} network={network} summary={summary} />
            }
           return movie;
        })
    )
}

export default MovieCardList;