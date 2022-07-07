import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function MovieInfo() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("overview");

  const getDetails = async (name) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=f1b8cf6213f6e44a0c26bd93b33fdbe0&language=en-US
    `);
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    getDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500` + details.poster_path}
          alt={details.title}
        />
      </div>
      <Info>
        <Button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </Button>
        <Button
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
          Details
        </Button>
        {activeTab === "overview" && (
          <div>
            <h3>{details.overview}</h3>
          </div>
        )}
        {activeTab === "details" && (
          <div>
            <ul>
              <li>Release_date: {details.release_date}</li>
              <li>Runtime: {details.runtime}</li>
              <li>Vote average: {details.vote_average}</li>
              <li>Vote count: {details.vote_count}</li>
              <li>Popularity: {details.popularity}</li>
              <li>Imdb id: {details.imdb_id}</li>
            </ul>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: green;
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  background: white;
  border: 2px solid green;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
