import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLabel = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #03ac0e;
`;

export default class App extends Component {
  render() {
    return (
      <HeaderWrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <HeaderLabel>Tokopedia</HeaderLabel>
      </HeaderWrapper>
    );
  }
};
