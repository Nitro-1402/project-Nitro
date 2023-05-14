import React from 'react';
import Item from "@/component/FilmItem";

interface Movie {
  id: number;
  name: string;
  image: string;
}

interface Props {
  userwatched: number[];
  movies: any;
}

const MovieList: React.FC<Props> = ({ userwatched, movies }) => {
    // console.log("movies",movies)
  // Render movie details for each ID in the userwatched list
  const renderMovies = () => {
    return userwatched.map((id) => {
      // Find the movie object with the matching ID
      const movie = movies.find((movie) => movie.id === id);

      // Render movie details if the movie exists
      if (movie) {
        return (
          <div key={id}>
            <h3>{movie.name}</h3>
            <img src={movie.image} alt={movie.name} />
          </div>
        );
      }

      return null; // Handle the case when the movie is not found
    });
  };

  return (
    <div>
      <h2>User Watched Movies</h2>
      {renderMovies()}
    </div>
  );
};

export default MovieList;
