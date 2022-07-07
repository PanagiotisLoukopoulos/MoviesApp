import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Category(params) {
  return (
    <List>
      <Slink to={"/moviesType/Action"}>
        <h4>Action</h4>
      </Slink>
      <Slink to={"/moviesType/Crime"}>
        <h4>Crime</h4>
      </Slink>
      <Slink to={"/moviesType/Mystery"}>
        <h4>Mystery</h4>
      </Slink>
      <Slink to={"/moviesType/Western"}>
        <h4>Western</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: content;
  margin: 4rem 0rem;
  text-decoration: none;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-right: 0rem;
  text-decoration: none;
  background: black;
  width: 9rem;
  height: 3rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
  }

  &.active {
    background: green;
    text-decoration: none;
  }
`;
