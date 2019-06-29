import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/id-flag.png'

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f6f6f6;

  img {
    animation: App-logo-spin infinite 20s linear;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 6px;  
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const HeaderLabel = styled.div`
  div {
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  }

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
`

export default class App extends Component {
  render() {
    return (
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <HeaderLabel>
          <div>IDR</div>
          <p>Indonesian Rupiah</p>
        </HeaderLabel>
      </HeaderWrapper>
    );
  }
};
