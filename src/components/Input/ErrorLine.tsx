import React, {FC} from 'react';
import { StyledError } from './styled';

const ErrorLine:FC = ({children}) => {
  return (
    <StyledError>
      {children}
    </StyledError>
  );
};

export default ErrorLine;
