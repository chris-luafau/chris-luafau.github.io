import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

const UnderlineAni = keyframes `
  from {
    width: 0px;
  }
  to {
    /*width: 524px;*/
    width: 330px;
  }
`

const Ul = styled.ul`
  /*width: 560px;*/
  width: 329.53px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  box-shadow: 0 4px 4px -4px dodgerblue;
  li {
    float: left;
    display: flex;
  }
  animation: ${UnderlineAni} 2s forwards;
`
const Li = styled.li `
  text-decoration: none;
  /*color: #967bb6; Lavender */
  color: dodgerblue;
  padding-left: 5px;
  padding-right: 5px;
`

const StyledDirectory = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
`
const StyledLink = styled(Link) `
  :active, :focus {
    text-shadow: 0px 0px 6px #09FDF4, 0px 0px 12px #09FDF4, 0px 0px 24px #09FDF4, 0px 0px 48px #09FDF4;
  }
`

export default class Directory extends React.Component {
  render() {
    return (
      <StyledDirectory>
        <Ul>
          <StyledLink to='/about'>
            <Li>About</Li>
          </StyledLink>
          <StyledLink to='/projects'>
            <Li>Projects</Li>
          </StyledLink>
          <StyledLink to="/resume">
            <Li>Resume</Li>
          </StyledLink>
          {/*
            <StyledLink to="/music">
            <Li>Music</Li>
            </StyledLink>
            <StyledLink to="/photos">
            <Li>Photos</Li>
            </StyledLink>
          */}
        </Ul>
      </StyledDirectory>
    )
  }
}
