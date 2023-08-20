import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import { Link , useNavigate} from "react-router-dom";
const TopNav = ({ isScrolled }) => {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser){
      navigate('/login')
    }
  })
  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="left-side">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="Logo"
            />
          </div>
          <ul className="links">
            {navlink.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-side">
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: #000;
  }
  nav {
    
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem 1rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left-side {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 4rem;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 10rem;
      height: 2rem;
    }
    .links {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      li {
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
    .right-side{
        display: flex;
        align-items: center;
        margin-right: 1rem;
        gap: 1rem;
        button{
            background-color: red;
            border: none;
            cursor:pointer;
            border-radius: 2rem;
            &:focus{
                outline: none;
            }
            svg{
                color: #fff;
                font-size: 2rem;
            }
        }
    }
  }
`;
export default TopNav;
