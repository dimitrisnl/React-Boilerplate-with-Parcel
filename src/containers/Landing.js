import React, { Component } from 'react'
import styled from 'react-emotion'

import { bounce } from 'styles/animations'

export class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <div>Boilerplate!</div>
      </Wrapper>
    )
  }
}

export default Landing

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    animation: ${bounce} 2s infinite;
    font-size: 10vw;
  }
`
