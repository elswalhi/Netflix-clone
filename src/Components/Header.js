import React from 'react'
import  styled  from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="logo">
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="Netflix Logo" />
      </div>
      <button onClick={()=>navigate(props.login? '/login' : '/signup')}>{props.login? 'Log In ' : 'Sign Up'}</button>
    </HeaderContainer>
    )
}
const HeaderContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  .logo{
    padding: 0.5rem 1rem;
    img{
      height: 3rem;
    cursor: pointer;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bold;
    font-size: 1.05rem;
  }
`;
export default Header