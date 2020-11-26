import React from 'react'
import Directory from './Directory.js'
import styled, {createGlobalStyle, keyframes} from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import About from '../pages/AboutPage.js'
import Projects from '../pages/ProjectsPage.js'
import Resume from '../pages/ResumePage.js'
import Music from '../pages/MusicPage.js'
import Photos from '../pages/PhotosPage.js'
import Home from '../pages/HomePage.js'
import {Page} from './Page.js'
import BgImg from '../assets/watercolor-bg.png'
import KH2Font from '../assets/KH2ALLMENUItalic.woff';
import KHFont1 from '../assets/Cinema_Calligraphy_Web.ttf';
import EurostileURL from '../assets/Eurostile.ttf';

const AppWrapper = styled.div `
  width: inherit;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0;
`
const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-width: 870px !important;
    background-image: url(${BgImg});
    background-repeat: repeat-y;
  }
  html {
    margin: 0;
  }
  @font-face {
    font-family: 'KH';
    src: url(${EurostileURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: KH;
  }
`
const StyledApp = styled.div`
  max-width: 80%;
  min-width: 80%;
`
const Header = styled.div`
  /*color: #967bb6; Lavender*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100vw;
  min-width: 900px;
  margin: 0;
  margin-top: 1%;
  padding: 0;
  align-self: center;
`

const Span = styled.span `
  min-width: 10vw;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      color: inherit;
  }
  &:active, &:focus {
    text-shadow: 0px 0px 6px #09FDF4, 0px 0px 12px #09FDF4, 0px 0px 24px #09FDF4, 0px 0px 48px #09FDF4;
  }
  width: 10vw;
  white-space: nowrap;
  grid-column-start: 2;
  grid-column-end: 3;
`
const PageContainer = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
`
const Img = styled.img `
  width: 100vw;
`

export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <StyledApp>
          <Router>
            <Header>
              <StyledLink to="/"><Span>Chris Luafau</Span></StyledLink>
              <Directory />
            </Header>
            <PageContainer>
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition key={location.pathname} timeout={1000} classNames="page" location={location}>
                    <Page>
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/music" component={Music} />
                        <Route path="/photos" component={Photos} />
                      </Switch>
                    </Page>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </PageContainer>
          </Router>
        </StyledApp>
      </AppWrapper>
    )
  }
}
