import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { injectGlobal } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'

import resetStyles from 'styles/reset'
import { nord, themes } from 'styles/colors'

import AppRouter from 'router'
import Header from 'components/layout/TheHeader'
import Footer from 'components/layout/TheFooter'

class App extends Component {
  state = {
    theme: themes['themeMain'],
  }
  handleThemeChange = theme => {
    this.setState({
      theme: themes[theme],
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Router>
          <Wrapper>
            <Header onThemeChange={this.handleThemeChange} />
            <AppRouter />
            <Footer />
          </Wrapper>
        </Router>
      </ThemeProvider>
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
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`
