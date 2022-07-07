import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MoviesType from "./MoviesType";
import Searched from "./Searched";
import MovieInfo from "./MovieInfo";

export default function Pages(params) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moviesType/:type" element={<MoviesType />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/movieInfo/:name" element={<MovieInfo />} />
    </Routes>
  );
}
