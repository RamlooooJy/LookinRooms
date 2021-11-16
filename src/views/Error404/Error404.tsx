import React from 'react';
import { StyledError404 } from './styled';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import { Flex } from '../../Application/globalStyled';

const Error404 = () => {
  const history = useHistory()
  const onClick = () => {
    history.goBack()
  }
  return (
    <StyledError404>
      <Flex>
        Error 404. Not Match Page
        <Button secondary margin='10px 5px' onClick={onClick}>Go back</Button>
      </Flex>
    </StyledError404>
  );
};

export default Error404;
