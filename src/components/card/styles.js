import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Figure = styled.figure`
  position: relative;
  margin-bottom: 8px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px 10px 0px 0px;
  & img {
    width: 100%;
    max-width: 100%;
    height: 260px !important;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 3px 0px;
    border: 7px solid rgb(255, 255, 255);
    border-radius: 10px 10px 0px 0px;
    position: relative !important;
  }
`

export const CardDescription = styled.div`
  height: 50px;
  overflow: hidden;
  position: relative;
  color: rgb(255, 255, 255);
  text-align: center;
  background: none 0px 0px repeat scroll rgb(38, 38, 38);
  border-radius: 3px;
`

export const CardName = styled.div`
  height: 50px;
  vertical-align: middle;
  display: flex;
  padding-bottom: 5px;
`

export const Title = styled.h1`
  line-height: 1.5;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
`

export const CardInfo = styled.div`
  text-align: center;
  background: none 0px 0px repeat scroll rgb(38, 38, 38);
  width: 100%;
  -webkit-transition: right 0.3s ease;
  -moz-transition: right 0.3s ease;
  -o-transition: right 0.3s ease;
  transition: right 0.3s ease;
  position: absolute;
  bottom: -50px;
  opacity: 0;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  z-index: 2;
`

export const SpanLogo = styled.span`
  opacity: 0;
  white-space: nowrap;
`

export const CardButtom = styled.button`
  border: 0;
  color: #fff;
  padding: 0.9em;
  font-size: 0.8em;
  width: 50px;
  overflow: hidden;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  text-transform: none;
  font-family: sans-serif;
  line-height: 1.15;
  margin: 0;
  white-space: nowrap;
  background-position-x: 15px;
  background-position-y: center;
  background-repeat: no-repeat;
  background-origin: initial;
  background-color: transparent;
  font-size: 11px;
  cursor: pointer;
  &:hover {
    width: 130px;
    position: relative;
    background-color: #9bb6aa;
    border-color: #9bb6aa;
    height: 50px;
  }
  &:hover ${SpanLogo} {
    opacity: 1;
  }
`

export const ImageLogo = styled.img`
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-bottom: 5px;
`

export const Cardboard = styled.div`
  position: relative;
  margin: 10px;
  display: block;
  flex: 0 0 auto;
  width: 16.66666667%;
  min-width: 180px;
  max-width: 200px;
  position: relative;
  &:hover ${CardInfo} {
    opacity: 1;
    bottom: 0;
    z-index: 1;
  }
`
