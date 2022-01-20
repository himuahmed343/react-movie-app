import React from "react";

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <>
      {
        // (movies.map = (movie, index) => {
        //   <div className="image-container d-flex justify-content-start m3">
        //     <img src={movie.poster} alt="movie-poster" />
        //   </div>;
        //       })
        movies.map((movie, key) => (
          <div
            className="image-container  col-lg-3 col-md-4 col-sm-6 p-0"
            key={key}
          >
            <img src={movie.Poster} alt="movie-poster" width="100%" />
            <div
              onClick={() => handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      }
    </>
  );
};

export default MovieList;
