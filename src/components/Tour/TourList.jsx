import React from "react";
import TourItem from "./TourItem";
import styled from "styled-components";

const TourList = ({ tours = [] }) => {
  return (
    <StyledUl>
      {tours.map((item) => (
        <TourItem key={item.id}  {...item} />
      ))}
    </StyledUl>
  );
};

export default TourList;

const StyledUl = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
