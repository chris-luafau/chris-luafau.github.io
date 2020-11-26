
import React from 'react'
import styled from 'styled-components'
import WorkerImg from '../assets/anime-worker.png'

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
  color: dodgerblue;
  font-size: 2em;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
`

const Img = styled.img `
  height: auto;
  max-width: 2%;
`

export default class Photos extends React.Component {
  render() {
    return (
      <Div>
        <H2>Photos</H2>
        <P>Currently in construction...<Img src={WorkerImg}/></P>
      </Div>
    )
  }
}
