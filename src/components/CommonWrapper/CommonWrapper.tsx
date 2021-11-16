import React, {FC, useLayoutEffect, useRef} from 'react';
import {FlexI} from "../../Application/globalStyled";
import {StyledViewWrapper} from './StyledWrapper';
import {dimensions} from "../../store/dimension/dimensions";
import {observer} from "mobx-react-lite";
import {zoom} from "../ZoomController/ZoomController";


const CommonWrapper: FC<FlexI> = observer(({children, ...props}) => {
  const ref = useRef<any>()
  useLayoutEffect(() => {
    if(window.innerHeight < 500) {
      ref.current.style = `position: absolute; top: 0; left: 0; right: 0;`
    }
  }, [dimensions.width])

  return (
    <StyledViewWrapper ref={ref} scale={zoom.zoom} {...props}>
      {children}
    </StyledViewWrapper>
  );
});

export default CommonWrapper;
