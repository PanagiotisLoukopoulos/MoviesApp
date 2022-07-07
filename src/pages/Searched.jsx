import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Searched() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f1b8cf6213f6e44a0c26bd93b33fdbe0&language=en-US&page=3&include_adult=false&query=${name}`
    );
    const data = await api.json();
    setSearchedMovie(data.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]); // oti exw valei sto route mou (Pages.jsx)
  return (
    <Grid>
      {searchedMovie.map((movie) => {
        return (
          <Link to={"/movieInfo/" + movie.id}>
            <Card key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                alt={movie.title}
              />
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
