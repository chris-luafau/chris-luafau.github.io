
import React from 'react'
import styled from 'styled-components'
import { PlayButton, Timer, Progress, VolumeControl } from 'react-soundplayer/components'
import { withSoundCloudAudio } from 'react-soundplayer/addons'

const TrackName = styled.h2 `
  position: relative;
  transform: translateY(200%);
  color: white;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 10px;
`

const Div = styled.div `
  display: flex;
  justify-content: flex-start;
`

const StyledPlayButton = styled(PlayButton) `
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  padding: 0px 0px 0px 0px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border-style: solid;
  border-width: 22px 0px 22px 44px;
  border-color: transparent transparent transparent #fc561e;
  border-radius: 3px;
  &:focus, &:active, &:visited, &:link {
    text-decoration: none;
    border-color: transparent transparent transparent dodgerblue;
  }
`

const StyledPauseButton = styled(StyledPlayButton) `
  border-style: double;
  border-width: 0px 0px 0px 22px;
`

const StyledTimer = styled(Timer) `
  align-self: center;
  transform: translateY(200%);
  color: white;
  text-shadow: 10px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
`

const MusicPlayer = withSoundCloudAudio(props => {
  let { track, currentTime, duration, backgroundImg } = props;

  const Wrapper = styled.div `
    background-image: url(${backgroundImg});
    background-size: cover;
    width: 640px;
    height: 150px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `

  return (
    <Wrapper>
      <TrackName>
        {track ? track.title : 'Loading...'}
      </TrackName>
      <StyledTimer
        className="custom-player-timer"
        duration={track ? track.duration / 1000 : 0}
        currentTime={currentTime}
        {...props} />
      <Div>
        <StyledPlayButton
          onPlayClick={() => {
            console.log('play button clicked!');
          }}
          {...props} />
        {/*
          <VolumeControl
            className='mr2 flex flex-center'
            buttonClassName="flex-none h2 button button-transparent button-grow rounded"
            {...props}
        />*/}
        <Progress
          value={(currentTime/duration) * 100 || 0 }
          soundCloudAudio={track}
          {...props}
        />

      </Div>
    </Wrapper>
          );
        })

export default MusicPlayer
