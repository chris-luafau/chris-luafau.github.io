
import React from 'react'
import styled from 'styled-components'
import LinkedInLogo from '../assets/linkedin-log.png'
import AtBlizzardImg from '../assets/at-blizzard-Copy.jpg'
import { Page, slideInRight, slideOutRight } from '../components/Page.js'


const H2 = styled.h2 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
`

const P = styled.p `
  text-align: justify;
  /*color: #967bb6;*/
  color: #3f3f3f;
  font-size: 1.4em;
  min-width: 350px;
  margin-left: 30px;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`

const Img = styled.img `
  max-width: 100%;
  min-width: 100%;
  height: auto;
`

const BioWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: flex-start;
  width: 50%;
`

const ImgContainer = styled.div `
  width: 50%;
`

const BioTextWrapper = styled.div `
  width: 50%;
`

const Logo = styled.img `
  width: 30px;
  height: auto;
`
const A = styled.a `
  width: 30px;
  height: auto;
  margin-top: 5px;
`
const AboutPage = styled(Page) `
  &.page-enter {
    animation: ${slideInRight} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 1s forwards;
  }
`
const ContactDiv = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: #3f3f3f;
`

const ContactInfo = () => {
  return (
    <ContactDiv>
      E-mail: cluafau@gmail.com
      <A href="https://linkedin.com/in/chris-luafau" rel="noopener" target="_blank"><Logo src={LinkedInLogo}></Logo></A>
    </ContactDiv>
  )
}


export default class About extends React.Component {
  render() {
    return (
      <AboutPage>
        <Div>
          <H2>About Me</H2>
          {/*<P>Currently in construction...<Img src={WorkerImg}/></P>*/}
          <BioWrapper>
            <ImgContainer>
              <Img src={AtBlizzardImg}></Img>
            </ImgContainer>
            <BioTextWrapper>
              <P>
                Hey there!
                I'm an Orange County based software engineer, musician, and just an all-around creator of "stuff."
                <br /><br />
                From developing exciting web/mobile applications, to writing and producing a new song, to going for a walk and taking photos, to DMing a homemade D&D campaign for my friends.
                <br /><br />
                I enjoy the process of starting with a simple idea and building it into something I can share with others.
                <br /><br />
              </P>
              <ContactInfo />
            </BioTextWrapper>
          </BioWrapper>
        </Div>
      </AboutPage>
    )
  }
}
