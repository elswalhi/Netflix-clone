import React, { useState, useRef } from "react";
import Card from "./Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const MovieSlider = ({ data, title }) => {
  const [controlsvisibility, setControlVisibality] = useState(false);
  const listRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px )`;
      setSliderPosition(sliderPosition + 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px )`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <Container
      controlsvisibility={controlsvisibility}
      onMouseEnter={() => setControlVisibality(true)}
      onMouseLeave={() => setControlVisibality(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!controlsvisibility ? "none" : ""} `}
        >
          <AiOutlineLeft onClick={()=>handleDirection('left')}/>
        </div>
        <div
          className={`slider-action right ${!controlsvisibility ? "none" : ""}`}
        >
          <AiOutlineRight onClick={()=>handleDirection('right')}/>
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;
  h1 {
    margin-left: 5px;
    font-size: 25px;
    color: #fff;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .wrapper {
    .none {
      display: none;
    }
    .slider {
      display: flex;
      gap: 0.5rem;
      width: max-content;
      transform: translateX(0px);
      transition: 1s ease-in-out;
      margin-left: 5px;
    }
    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 2rem;
      bottom: 0;
      width: 50px;
      transition: 1s ease-in-out;
      svg {
        font-size: 2rem;
        cursor: pointer;
        color: white;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
export default MovieSlider;
