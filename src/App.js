import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { injectGlobal } from 'react-emotion'

import resetStyles from 'styles/reset'
import { nord } from 'styles/colors'

import AppRouter from 'router'
import Header from 'components/layout/TheHeader'
import Footer from 'components/layout/TheFooter'

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <AppRouter />
          <Footer />
        </Wrapper>
      </Router>
    )
  }
}

export default App

injectGlobal`
  ${resetStyles}

  body{
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    color: ${nord.nord0};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
