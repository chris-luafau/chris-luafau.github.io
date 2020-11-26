
import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import WorkerImg from '../assets/anime-worker.png'
import { Page, slideInLeft, slideOutLeft } from '../components/Page.js'


const H2 = styled.h2 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
`

const P = styled.p `
  text-align: center;
  /*color: #967bb6;*/
  color: #3f3f3f;
  font-size: 2em;
  text-transform: uppercase;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
`
const Span = styled.div `
  font-size: 1rem;
  color: #3f3f3f;
  text-align: center;
`
const Img = styled.img `
  height: auto;
  max-width: 2%;
`

const HomePage = styled(Page) `
  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }
`

export default class Home extends React.Component {
  render() {
    return (
        <Div>
          <br /><br /><br /><br />
          <P>
            Hi! <br />
            Welcome to my little space on the internet :)
            <br /><br />
          </P>
          <Span>(Built using React. Styled with styled-components)</Span>

        </Div>
      )
    }
}
