import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

import { nord } from 'styles/colors'
import routes from 'router/routes'

export class TheHeader extends Component {
  render() {
    const links = routes.map((route, index) => (
      <StyledLink to={route.path} key={index}>
        {route.name}
      </StyledLink>
    ))

    return (
      <Wrapper>
        <div>Header</div>
        <Navigation>{links}</Navigation>
      </Wrapper>
    )
  }
}

export default TheHeader

const Wrapper = styled.div`
  height: 4rem;
  padding: 0 2rem;

  box-shadow: 0px  0 4px 2px #efefef

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navigation = styled('div')`
  display: flex;
  margin: 0 -0.6rem;
`
const StyledLink = styled(Link)`
  padding: 0 0.6rem;
`
