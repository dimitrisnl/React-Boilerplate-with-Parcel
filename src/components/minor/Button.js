import React, { Component } from 'react'
import styled from 'react-emotion'
import { nord } from 'styles/colors'

export class Button extends Component {
  render() {
    const { children, type, status, onChange, small } = this.props
    return (
      <StyledButton small={small} onClick={onChange}>
        {children}
      </StyledButton>
    )
  }
}

export default Button

const StyledButton = styled('button')`
  padding: ${props => (props.small ? '0.25rem 0.5rem' : '0.5rem 1rem;')}
  border: 0;
  outline: 0;
  font-size: ${props => (props.small ? '0.75rem' : '1rem')}
  position: relative;
  cursor: pointer;

  border-radius: 4px;

  background: ${props => props.theme.accent};
  color: ${props => props.theme.complimentary};
  border: 1px solid ${props => props.theme.accent};

  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.accent};
    background: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`
