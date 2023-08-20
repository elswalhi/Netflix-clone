import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
const Card = ({ movieData }) => {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <CardContainer
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <img
        onClick={() => navigate("/player")}
        src={`https://images.tmdb.org/t/p/w500${movieData.image}`}
        alt="Poster"
      />
      {onHover && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              onClick={() => navigate("/player")}
              src={`https://images.tmdb.org/t/p/w500${movieData.image}`}
              alt="Poster"
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
              muted
            />
          </div>
          <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dislike" />
                <BsCheck title="Remove from list " />
                <AiOutlinePlus title="Add to my list" />
              </div>
              <div className="info">
                <BiChevronDown title="More info" />
              </div>
            </div>
            <div className="genre">
              <ul>
                {movieData.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  margin-top: 1rem;
  max-width: 230px;
  width: 230px;
  height: 100px;
  cursor: pointer;
  position: relative;
  /* background-color: red; */
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      .movieName {
        color: #fff;
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 0.6rem;
      }
      svg {
        color: #fff;
        border: 0.1rem solid #fff;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genre {
      display: flex;
      color: #fff;
      ul {
        list-style-type: none;
        display: flex;
        li {
          padding-right: 0.7rem;
        }
      }
    }
  }
`;
export default Card;
