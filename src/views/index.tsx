import React, {FC} from 'react';
import {StyledTablesMap} from './commonStyled';


const TablesMap:FC = ({children}) => {
  return <StyledTablesMap>
      {children}
    </StyledTablesMap>
};

export default TablesMap;
