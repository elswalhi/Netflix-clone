import React from "react";
import styled from "styled-components";
const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="No internet connection"
      />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  img{
    width: 100vw;
    height: 100vh;
  }
`;
export default BackgroundImage;
