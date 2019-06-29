import React, { Component } from 'react'
import { Input } from 'antd'
import { rupiahUnit } from '../config/satuan.json'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  margin-top: 14px;

  .error-label {
    color: red;
  }
`;

const InputLabel = styled.div`
  font-size: 16px;
`;

const ListUnits = styled.div`
  display: blocks;
  margin-top: 12px;

  div {
    font-size: 18px;
    font-style: italic;
    padding: 0 10px;

    &:nth-child(even) { 
      background: #ccc
    }
  }
`;

export default class CalculateForm extends Component {
	state = {
    number: '',
		inputError: false,
	}
  
  handleOnEnter = (e) => {
    const rupiahRegex = /^([Rr]p)?\ ?(\d{1,3})(\.?\d{3})*(\,\d*)?$/
    const value = e.target.value

    if (!rupiahRegex.test(value)) {
      this.setState({ inputError: true, number: value })
      return
    }

    this.setState({ inputError: false, number: value })
  }

  renderMoneyUnits = () => {
    const { number } = this.state
    const stringNumberOnly = number.replace(/^([Rr]p)?\ ?([\d\.]*)\,?(\d*)?$/, "$2").replace(/\./g,'')
    let rupiah = parseInt(stringNumberOnly, 10)

    return rupiahUnit.map(unitNumber => {
      const sumUnit = Math.floor(rupiah/unitNumber)

      if (sumUnit === 0) return ''
      
      let unitItem = ''
      unitItem = `${sumUnit} x Rp${unitNumber}`

      if (unitNumber === 1) unitItem = `left Rp${rupiah}`

      rupiah = rupiah - (sumUnit * unitNumber)
      
      return `<div>${unitItem}</div>`
    })
    .filter(unitString => unitString.length > 0)
    .join('')
  }

  render() {
    const { inputError, number } = this.state

    return (
      <Wrapper>
        <InputLabel>number of rupiahs</InputLabel>
        <Input
          type="text"
          onPressEnter={this.handleOnEnter}
          placeholder="ex: 1.300 / Rp13000 / 1300"
        />

        {(inputError && number !== '')
          ? <p className='error-label'>Error Input</p>
          : number !== '' && 
              <ListUnits dangerouslySetInnerHTML={{ __html: this.renderMoneyUnits()}} />}
      </Wrapper>
    )
  }
}
