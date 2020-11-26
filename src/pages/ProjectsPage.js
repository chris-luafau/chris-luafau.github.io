
import React from 'react'
import styled from 'styled-components'
import StudySpaceImg from '../assets/studyspacethumbnails.PNG'
import GoLThumbnail from '../assets/gol-thumbnail.png'
import BJThumbnail from '../assets/bj-thumbnail.png'
import WorkerImg from '../assets/anime-worker.png'
import SuggestAnimeThumbnail from '../assets/suggest-anime-thumbnail.png'
import BlizzWorldThumbnail from '../assets/blizz-world-thumbnail.PNG'
import { Page, slideInRight, slideOutRight } from '../components/Page.js'


const H2 = styled.h2 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
`

const Wrapper = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-self: center;
  width: 80vw;
  min-width: 900px;
  height: auto;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
`
const ItemDescription = styled.p `
  flex-grow: 3;
  font-size: 2rem;
  visibility: hidden;
`
const Overlay = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: hidden;
`
const ImgLink = styled.div `
  opacity: 1;
`
const ImgDiv = styled.div `
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  opacity: 1;
  &:hover ${Overlay} {
    visibility: visible;
    opacity: 1 !important;
  }
  &:hover ${ImgLink} {
    opacity: 0.7;
  }
  min-width: 300px;
  max-width: 20vw;
  width: 20vw;
  height: auto;
  max-height: 20vh;
`

const Img = styled.img `
  margin: 10px;
  width: 100%;
  height: 100%;
`

const Item = styled.div `
  position: relative;
  height: auto;
  width: 25vw;
  align-self: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  min-width: 300px;
`
const P = styled.p `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
`
const Text = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size: 1.4vw;
  font-weight: bold;
  text-align: center;
  color: #3f3f3f;
`
const TempImg = styled.img `
  height: auto;
  max-width: 2%;
`

const A = styled.a `
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: inherit;
  }
`

const Button = styled.button `
  max-width: 10em;
  min-width: 5em;
  height: auto;
  margin-right: 5px;
  font-size: 90%;
`
const Buttons = styled.div `
  position: absolute;
  display: flex;
  align-self: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 200%);
`

const ProjectsPage = styled(Page) `
  &.page-enter {
    animation: ${slideInRight} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 1s forwards;
  }
`

export default class Projects extends React.Component {
  render() {
    return (
        <Div>
          <H2>My Projects</H2>
          <Wrapper>
            <Item>
              <ImgDiv>
                <ImgLink>
                  <Img src={StudySpaceImg} />
                </ImgLink>
                <Overlay>
                  <Text>
                    StudySpace
                  </Text>
                  <Buttons>
                    <Button>
                      <A href="https://chris-luafau.github.io/StudySpace" rel="noopener" target="_blank">Visit</A>
                    </Button>
                    <Button>
                      <A href="https://github.com/chris-luafau/StudySpace" rel="noopener" target="_blank">Code</A>
                    </Button>
                  </Buttons>
                </Overlay>
              </ImgDiv>
            </Item>
            <Item>
              <ImgDiv>
                <ImgLink>
                  <Img src={GoLThumbnail}></Img>
                </ImgLink>
                <Overlay>
                  <Text>
                    Game of Life Visualizer
                  </Text>
                  <Buttons>
                    <Button>
                      <A href="https://chris-luafau.github.io/game-of-life-visualizer" rel="noopener" target="_blank">Visit</A>
                    </Button>
                    <Button>
                      <A href="https://github.com/chris-luafau/game-of-life-visualizer" rel="noopener" target="_blank">Code</A>
                    </Button>
                  </Buttons>
                </Overlay>
              </ImgDiv>
            </Item>
            <Item>
              <ImgDiv>
                <ImgLink>
                  <Img src={BJThumbnail}></Img>
                </ImgLink>
                <Overlay>
                  <Text>
                    AI Blackjack
                  </Text>
                  <Buttons>
                    <Button>
                      <A href="https://kchao1910.github.io/Blackjack-AI/" rel="noopener" target="_blank">Visit</A>
                    </Button>
                    <Button>
                      <A href="https://github.com/Kchao1910/Blackjack-AI" rel="noopener" target="_blank">Code</A>
                    </Button>
                  </Buttons>
                </Overlay>
              </ImgDiv>
            </Item>
            {/*
              <Item>
              <ImgDiv>
                <ImgLink>
              <Img src={SuggestAnimeThumbnail}></Img>
                </ImgLink>
                <Overlay>
              <Text>
              Suggest: Anime
              </Text>
              <Buttons>
              <Button>
              <A href="https://chris-luafau.github.io/suggest-anime" rel="noopener" target="_blank">Visit</A>
              </Button>
              <Button>
              <A href="https://github.com/chris-luafau/suggest-anime" rel="noopener" target="_blank">Code</A>
              </Button>
              </Buttons>
                </Overlay>
              </ImgDiv>
              </Item>
            */}
            <Item>
              <ImgDiv>
                <ImgLink>
                  <Img src={BlizzWorldThumbnail}></Img>
                </ImgLink>
                <Overlay>
                  <Text>
                    Blizzard World Map Guide
                  </Text>
                  <Buttons>
                    <Button>
                      <A href="https://chris-luafau.github.io/blizzard-world-map-guide" rel="noopener" target="_blank">Visit</A>
                    </Button>
                    <Button>
                      <A href="https://github.com/chris-luafau/blizzard-world-map-guide" rel="noopener" target="_blank">Code</A>
                    </Button>
                  </Buttons>
                </Overlay>
              </ImgDiv>
            </Item>
          </Wrapper>
          <P>Currently in construction...<TempImg src={WorkerImg}/></P>
        </Div>
    )
  }
}
