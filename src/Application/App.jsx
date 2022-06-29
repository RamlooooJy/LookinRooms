import React from 'react';
import RouterView from '../router';
import {Absolute, Global, StyledApp} from './globalStyled'
import {ThemeProvider} from 'styled-components';
import {useMounted} from '../hooks/useMounted';
import ZoomController from '../components/ZoomController/ZoomController';
import {GlobalTheme} from './globalValues';

const Application = () => {
    const [height] = useMounted()
    return <ThemeProvider theme={GlobalTheme}>
        <Global/>
        <StyledApp Hheight={height} className='application'>
            <RouterView/>
            <Absolute transform={'translateY(-50%)'} top={'50%'} left={0} fixedRight>
                <ZoomController/>
            </Absolute>
        </StyledApp>
    </ThemeProvider>
}
export default Application
