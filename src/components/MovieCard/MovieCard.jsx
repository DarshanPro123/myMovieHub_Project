import React from "react";
import "./MovieCard.scss";
import { FaArrowRight } from "react-icons/fa";

const MovieCard = () => {
  const array = [
    1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 34, 234, 43, 23, 13, 55, 66, 34, 3234,
    4545, 234, 5, 24, 24, 234, 6,
  ];
  return (
    <>
      <div className="head">
        <h1>Movie Hub Details </h1>
      </div>
      <div className="card-contanier">
        {array.map((item, index) => {
          return (
            <>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                    alt="movie"
                  />
                </div>
                <div className="card-content">
                  <h2>Movie Title</h2>
                  <button>
                    Read More {/* arrow symbol */} <FaArrowRight />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
