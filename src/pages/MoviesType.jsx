import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export default function MoviesType() {
  const [moviesType, setmoviesType] = useState([]);
  let params = useParams();

  const getMoviesType = async (name) => {
    if (name === "Action") {
      name = 28;
    } else if (name === "Crime") {
      name = 80;
    } else if (name === "Mystery") {
      name = 9648;
    } else {
      //western
      name = 37;
    }
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f1b8cf6213f6e44a0c26bd93b33fdbe0&include_adult=false&page=1&with_genres=${name}`
    );
    const data = await api.json();
    setmoviesType(data.results);
  };

  useEffect(() => {
    getMoviesType(params.type);
    //console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {moviesType.map((movieType) => {
        return (
          <Link to={"/movieInfo/" + movieType.id}>
            <Card key={movieType.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + movieType.poster_path}
                alt={movieType.title}
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
