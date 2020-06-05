import React from "react";
import styled from "styled-components";


const StyledH1 = styled.h1`
    font-size: 2rem;
`;

const Header = () => {
  return (
    <header>
      <StyledH1>Contact Manager</StyledH1>
    </header>
  );
}

export default Header;