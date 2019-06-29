import React, { Component } from 'react'
import { Input } from 'antd'
import { rupiahUnit } from '../config/satuan.json'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  margin-top: 14px;
`;

const InputLabel = styled.div`
  font-size: 20px;
`;

export default class CalculateForm extends Component {
	state = {
    number: '',
		inputError: false,
	}
  
  handleNumberChange = (e) => {
    const rupiahRegex = /^([Rr]p)?\ ?(\d{1,3})(\.?\d{3})*(\,\d*)?$/
    const value = e.target.value

    if (!rupiahRegex.test(value)) {
      this.setState({ inputError: true, number: '' })
      return
    }

    this.setState({ inputError: false, number: value })
  }

  renderMoneyUnits = () => {
    const stringNumberOnly = this.state.number.replace(/^([Rr]p)?([\d\.]*)\,?(\d*)?$/, "$2").replace(/\./g,'')
    let rupiah = parseInt(stringNumberOnly, 10)

    return rupiahUnit.map(unitNumber => {
      const sumUnit = Math.floor(rupiah/unitNumber)

      if (sumUnit === 0) return ''
      
      let unitItem = ''
      unitItem = `${sumUnit} x Rp${unitNumber}`

      if (unitNumber === 1) unitItem = `left Rp${rupiah}`

      rupiah = rupiah - (sumUnit * unitNumber)
      
      return unitItem
    })
    .filter(word => word.length > 0)
    .join(', ')
  }

  render() {
    return (
      <Wrapper>
        <InputLabel>number of rupiahs</InputLabel>
        <Input
          type="text"
          onPressEnter={this.handleNumberChange}
          placeholder="ex: 1.300 / Rp13000 / 1300"
        />

        {this.state.inputError && <p>Error Input</p>}

				{this.state.number !== '' &&
					<p>{this.renderMoneyUnits()}</p>}
      </Wrapper>
    )
  }
}
