import React, {FC} from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import DatePicker from "../../components/DatePicker";
import {StyledControlsContainer, StyledSidebar} from "./styled";
import AdminBar from "../../components/AdminBar";
import {Dimensions, Flex} from "../../Application/globalStyled";
import {isMobile} from "../../common/utils";

const Sidebar: FC = () => {
  const notMobile = window.innerWidth > Dimensions.phone
  return <StyledSidebar className={'sidebar'}>
    <Flex direction={window.innerWidth < Dimensions.phoneAndTablet ? 'row' : 'column'}>
      {notMobile && <Logo little={isMobile()}/>}
      <Navigation/>
    </Flex>
    <StyledControlsContainer>
      <DatePicker/>
      <AdminBar/>
    </StyledControlsContainer>
  </StyledSidebar>
}

export default Sidebar
