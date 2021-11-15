import React, {useEffect, useState} from 'react';
import RouterView from '../router';
import {Global, GlobalTheme, StyledApp} from './globalStyled'
import {ThemeProvider} from 'styled-components';
import {useMounted} from '../hooks/useMounted';



const Application = () => {
    const onTouch = (ev) => {
        if (ev.touches.length > 1) {
            console.log('two fingers do scale / 2000')
        }
    }
    const [height] = useMounted()

    return <ThemeProvider theme={GlobalTheme}>
        <Global/>
        <StyledApp Hheight={height} onTouchStart={onTouch} className='application'>
            <RouterView/>
        </StyledApp>
    </ThemeProvider>
}
export default Application
