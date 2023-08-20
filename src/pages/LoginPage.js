import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleLogin =async()=>{
    try {
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser){
      navigate('/')
    }
  })
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.83);
      height: 70vh;
      padding: 2rem;
      border-radius: 0.4rem;
      .title {
        h1 {
          color: #ffff;
        }
      }
      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      input {
        border-radius: 0.4rem;
        padding: 0.5rem 1rem;
        border: none;
        width: 25rem;
        height: 2.4rem;

        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.5rem;
        background-color: red;
        cursor: pointer;
        border: none;
        color: #ffff;
        border-radius: 0.4rem;
        height: 3.4rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
export default LoginPage;
