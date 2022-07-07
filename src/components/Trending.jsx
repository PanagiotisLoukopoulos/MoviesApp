import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export default function Trending(params) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");
    if (check) {
      setTrending(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f1b8cf6213f6e44a0c26bd93b33fdbe0`
      );
      const data = await api.json();
      localStorage.setItem("trending", JSON.stringify(data.results));
      setTrending(data.results);
    }
  };

  return (
    <Wrapper>
      <h3>Trending movies</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}
      >
        {trending.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Link to={"/movieInfo/" + movie.id}>
                <Card>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                    alt={movie.title}
                  />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

// https://api.themoviedb.org/3/trending/all/day?api_key=f1b8cf6213f6e44a0c26bd93b33fdbe0
// {
/* <img
              src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
              alt={movie.title}
            ></img>
            <div>
              <p>{movie.title}</p>
            </div> */
// }
