import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 425px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
        </p>
      </Container>
    );
  }
}

export default App;
