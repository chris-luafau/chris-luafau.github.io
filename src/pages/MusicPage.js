
import React from 'react'
import styled from 'styled-components'
import WorkerImg from '../assets/anime-worker.png'
import VideoPlayer from '../components/VideoPlayer.js'
import MusicPlayer from '../components/MusicPlayer.js'
import StudySpaceImg from '../assets/studyspacethumbnails.PNG'
import HMU from '../assets/HMU.jpg'
import OurWay from '../assets/ourway.jpg'
import DiveIn from '../assets/dive-in.jpg'
import Haunted from '../assets/haunted.jpg'
import Durarara from '../assets/durarara.png'
import PSO from '../assets/pso.jpg'
import StickWitU from '../assets/stickwitu.jpg'
import WhenIHadU from '../assets/whenihadu.jpg'
import MissUAlready from '../assets/missualready.jpg'

const H2 = styled.h2 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
`

const H3 = styled.h3 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 1.5em;
  font-weight: 300;
`

const P = styled.p `
  text-align: center;
  /*color: #967bb6;*/
  color: #3f3f3f;
  font-size: 1.4em;
  font-weight: 500;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
`
const Img = styled.img `
  height: auto;
  max-width: 2%;
`

const VideoPlayerWrapper = styled.div `
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const MusicPlayerWrapper = styled.div `
  width: 80vw;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const clientId = 'dV0jpQ1RaaPeGmiJcmR05K9OPzSaUAZJ'

export default class Music extends React.Component {
  render() {
    return (
      <Div>
        <H2>Music</H2>
        <H2>Holocene</H2>
        <P>My band that I started with my friends. We've only posted a few covers on YouTube.
          <br />
          We're hoping to release some original music soon! Here's some of our covers. I'm playing the keys! :)
        </P>
        <VideoPlayerWrapper>
          <VideoPlayer videoId='q4iLU52_d6c' />
          <VideoPlayer videoId='s--ATPblCTE' />
          <VideoPlayer videoId='ZXAUA4r56nA' />
        </VideoPlayerWrapper>
        <br /><br />
        <H2>Nezzie</H2>
        <P>
          This is my original solo music that I release under the name "Nezzie".
          <br />
          The name is originally my gamer handle that I came up with while playing an MMORPG called Aion years ago.
          <br />
          I've yet to fully produce and release a track but I will someday soon!
          <br />
          Here is some of my demo's that I've created. :)
        </P>
        <br /> <br />
        <MusicPlayerWrapper>
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/songidea143'
            backgroundImg={Haunted}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/dive-in-demo'
            backgroundImg={DiveIn}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/raw-demo'
            backgroundImg={Durarara}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/ourway'
            backgroundImg={OurWay}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/137-instatrim'
            backgroundImg={MissUAlready}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/stickwitu-cover'
            backgroundImg={StickWitU}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/songidea55'
            backgroundImg={PSO}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/songidea145'
            backgroundImg={HMU}
            onReady={ () => console.log('loaded.') } />
          <MusicPlayer
            clientId={clientId}
            resolveUrl='https://soundcloud.com/nezzi3/whenihadu'
            backgroundImg={WhenIHadU}
            onReady={ () => console.log('loaded.') } />
        </MusicPlayerWrapper>
      </Div>
    )
  }
}
