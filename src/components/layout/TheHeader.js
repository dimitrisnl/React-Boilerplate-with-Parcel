import React, { Component } from 'react'
import styled from 'react-emotion'
import { NavLink } from 'react-router-dom'

import { Button } from 'components/minor'

import { nord } from 'styles/colors'
import routes from 'router/routes'

export class TheHeader extends Component {
  render() {
    const links = routes.map((route, index) => (
      <StyledLink exact to={route.path} key={index} activeClassName="active">
        {route.name}
      </StyledLink>
    ))

    return (
      <Wrapper>
        <Brand>Header</Brand>
        <Controls>
          <div>Themes:</div>
          <Button small onChange={() => this.props.onThemeChange('themeGreen')}>
            Green
          </Button>
          <Button small onChange={() => this.props.onThemeChange('themeRed')}>
            Red
          </Button>
          <Button
            small
            onChange={() => this.props.onThemeChange('themePurple')}
          >
            Purple
          </Button>
          <Button small onChange={() => this.props.onThemeChange('themeMain')}>
            Main
          </Button>
        </Controls>

        <Navigation>{links}</Navigation>
      </Wrapper>
    )
  }
}

export default TheHeader

const Wrapper = styled.div`
  height: 4rem;
  padding: 0 2rem;

  box-shadow: 0px  0 4px 2px ${props => props.theme.complimentary}

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Controls = styled('div')`
  display: flex;
  align-items: center;

  > div {
    margin-right: 1rem;
  }

  > button {
    margin-right: 0.5rem;
  }
`

const Navigation = styled('div')`
  display: flex;
  margin: 0 -0.6rem;
`
const StyledLink = styled(NavLink)`
  padding: 0 0.6rem;
  text-decoration: none;
  color: ${nord.nord3};
  position: relative;
  transition: 0.3s ease-in-out;

  &:before {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 5px;

    bottom: -8px;
    left: calc(50% - 2.5px);

    border: 1px solid ${props => props.theme.accent};
    border-radius: 10px;
    background: ${props => props.theme.accent};

    opacity: 0;

    transition: opacity 0.3s ease-in-out;
  }

  &:hover,
  &.active {
    color: ${props => props.theme.accent};
    &:before {
      opacity: 1;
    }
  }
`
const Brand = styled('h1')`
  font-size: 1.8rem;
  color: ${props => props.theme.accent};
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    width: 40px;
    left: calc(50% - 20px);
    bottom: -4px;
    border: 1px solid ${props => props.theme.accent};
  }
`
