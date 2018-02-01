import React, { Component } from 'react'
import styled from 'react-emotion'

import { nord } from 'styles/colors'

export class TheFooter extends Component {
  render() {
    return <Wrapper>Footer</Wrapper>
  }
}

export default TheFooter

const Wrapper = styled.div`
  height: 4rem;
  padding: 0 2rem;

  background: ${props => props.theme.accent};
  color: ${props => props.theme.complimentary};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
