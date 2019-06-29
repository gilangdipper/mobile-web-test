import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import styled from 'styled-components';
import Header from './components/Header';

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
        <Header />
        <p className="App-intro">
        <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
        </p>
      </Container>
    );
  }
}

export default App;
