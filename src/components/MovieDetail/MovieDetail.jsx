import React from "react";
import "./MovieDetail.scss";
import commonimg from "../../assets/harrypotter.jpg";

const MovieDetail = () => {
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={commonimg} alt="Movie Poster" />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
