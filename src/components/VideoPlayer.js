
import React from 'react'
import Youtube from 'react-youtube'

// https://www.youtube.com/watch?v=s--ATPblCTE
//https://youtu.be/s--ATPblCTE

export default class VideoPlayer extends React.Component {
  videoOnReact(event) {
    event.target.pauseVideo()
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      },
    }
    const {videoId} = this.props
    return (
      <Youtube
        videoId={videoId}
        opts={opts}
        onReact={this.videoOnReady}
      />
    )
  }
}
