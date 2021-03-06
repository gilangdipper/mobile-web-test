import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import RupiahCalculate from '../components/RupiahCalculate'

const Container = styled.div`
  width: 100%;
  max-width: 425px;
  display: block;
  position: relative;
  margin: 0 auto;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <RupiahCalculate />
      </Container>
    )
  }
}
