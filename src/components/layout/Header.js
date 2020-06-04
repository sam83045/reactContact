import React from "react";
import styled from "styled-components";

const StyledH1= styled.h1`
font-size: 2rem;
`;

export default function Header() {
  return (
    <heaer>
      <StyledH1>Contact Manager</StyledH1>
    </heaer>
  );
}
