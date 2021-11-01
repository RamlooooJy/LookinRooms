import React from 'react';
import RouterView from '../../router';
import {Global, StyledApp} from './styled'

const Application = () => <>
    <Global/>
    <StyledApp className='application'>
        <RouterView/>
    </StyledApp>
</>
export default Application
