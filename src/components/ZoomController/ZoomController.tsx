import React, {createRef} from 'react';
import styled from "styled-components";
import {makeAutoObservable} from "mobx";
import {StaticDimensions} from "../../Application/globalValues";

export const zooRef = createRef()

class Zoom {
  public zoom = 1
  constructor() {
    makeAutoObservable(this)
  }
  setZoom(num: number) {
    console.log(num, this.zoom)
    this.zoom = num
  }
  scalePlusPlus = () => {
    const value = Number(this.zoom) === 3 ? this.zoom : (Number(this.zoom) + 0.2).toFixed(1)
    this.setZoom(+value)
  }

  scaleSubSub = () => {
    const value = Number(this.zoom) === 0.2 ? this.zoom : (Number(this.zoom) - 0.2).toFixed(1)
    this.setZoom(+value)
  }

}
export const zoom = new Zoom()

const ZoomController = () => {
  return (
    <Div>
      <div onClick={zoom.scalePlusPlus}>+</div>
      <div onClick={zoom.scaleSubSub}>-</div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  @media (min-width: ${StaticDimensions.tablet}px) {
    display: none;
  }
  flex-direction: column;
  width: 12vw;
  height: 20vh;
  max-width: 50px;
  max-height: 100px;
  align-items: stretch;
  justify-content: stretch;
  user-select: none;

  div {
    border-radius: 0 0 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    background: ${props => props.theme.colors.secondaryTransparent};
    font-size: 2rem;

    &:first-child {
      border-radius: 50% 50% 0 0;
      border-bottom: 1px solid ${props => props.theme.colors.background};;
    }

    &:active {
      transform: scale(1.1);
      box-shadow: inset 0 0 10px #2d2d2d;
      background: ${props => props.theme.colors.secondary};
    }
  }
`

export default ZoomController;
