import React, {FC} from 'react';
import {StyledSign} from './StyledSign';

const Sign: FC = ({children}) => {
  return (
    <StyledSign>{children}</StyledSign>
  );
}

export default Sign;
