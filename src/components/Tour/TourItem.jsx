


import React from 'react'
import styled from 'styled-components'

const TourItem = ({id, title, prise, imageUrl,description, date}) => {
  return (
    <StyledLi>
      <StyledImg src={imageUrl} alt="" />
      <h3> {title} </h3>
      <div>
        <b> {prise} </b>
        <span> {date} </span>
      </div>
      <button> Посмотреть</button>
    </StyledLi>
  )
}

export default TourItem

const StyledLi=styled("li")`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  flex-direction: column;
  gap: 10px;
`
const StyledImg=styled("img")`
  width: 250px;
  height: 250px;

`