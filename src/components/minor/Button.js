import React, { Component } from 'react'
import styled from 'react-emotion'
import { nord } from 'styles/colors'

export class Button extends Component {
  render() {
    const { children, type, status } = this.props
    return <StyledButton>{children}</StyledButton>
  }
}

export default Button

const StyledButton = styled('button')`
  padding: 0.5rem 1rem;
  border: 0;
  outline: 0;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  border-radius: 4px;

  background: ${nord.nord0};
  color: ${nord.nord4};

  transition: all .3s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    border-radius: 4px
    top: 8px;
    bottom: 8px;
    left: 0;

    transition: all .3s ease-in-out;
  }

  &:hover {
    background: ${nord.nord2};
    &:before {
      border-color: ${nord.nord0};
      left: -8px;
    }
  }

  &:active {
    transform: scale(0.95);
     &:before {
      transform: rotate(360deg);
    }
  }
`
