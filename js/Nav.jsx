import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyle = styled.nav`
  float: right;
  font-family: Roboto;
  text-decoration: none;
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  font-weight: 300;
`;

const TextNavWrapper = styled.span`
  padding-right: 20px;
  padding-left: 20px;
`;

const Nav = () => (
  <NavStyle>
    <TextNavWrapper>
      <Link to="/projects">projects </Link>
    </TextNavWrapper>
    <TextNavWrapper>
      <Link to="/about">about</Link>
    </TextNavWrapper>
  </NavStyle>
);

export default Nav;
