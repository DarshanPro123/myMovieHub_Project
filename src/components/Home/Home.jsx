import React from "react";
import "./Home.scss";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content-box">
          <div className="content">
            <h1>
              Welcome to Movie<span>Hub</span>
            </h1>
            <p>
              Discover the latest movies, read in-depth reviews, and explore
              detailed information about your favorite films. Stay updated with
              release dates, ratings, and much more.Find everything you need to
              know about the latest blockbusters and timeless classics, from
              release dates to critical reviews and beyond.
            </p>
          </div>
        </div>
      </div>
      <MovieCard />
    </>
  );
};

export default Home;
