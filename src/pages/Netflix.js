import React, { useState, useEffect } from "react";
import TopNav from "../Components/TopNav";
import styled from "styled-components";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { Faplay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGeneres } from "../store";
import SliderContainer from "../Components/SliderContainer";
const Netflix = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies=useSelector((state)=>state.netflix.movies)
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);
  useEffect(() => {
    dispatch(getGeneres());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
    // eslint-disable-next-line
  });
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <HeroContainer>
      <TopNav isScrolled={isScrolled} />
      <div className="hero">
        <img
          className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="Hero "
        />
        <div className="container">
          <div className="title">
            <h1>Avengers </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sapiente porro nostrum fugit maiores. Ipsam, numquam nam,
              perferendis aut nisi, dolorem minima nemo sit ut soluta corrupti
              provident atque voluptates.
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend deca" sans-serif;
          color: #fff;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
        .playBtn,
        .moreBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: red;
          border-radius: 1rem;
          gap: 1rem;
          padding: 0.9rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          font-size: 1.4rem;
        }
        .moreBtn {
          color: #fff;
          background-color: #000;
          border: 0.1rem solid #fff;
        }
      }
    }
  }
`;
export default Netflix;
