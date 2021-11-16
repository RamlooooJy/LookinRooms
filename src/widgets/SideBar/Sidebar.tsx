import React, {FC} from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import DatePicker from "../../components/DatePicker";
import {StyledControlsContainer, StyledSidebar} from "./styled";
import AdminBar from "../../components/AdminBar/AdminBar";
import {Dimensions, Flex} from "../../Application/globalStyled";
import {dimensions} from "../../store/dimension/dimensions";
import {observer} from "mobx-react-lite";

const Sidebar: FC = observer(() => {
  const [size, isCompact] = [dimensions.width, dimensions.width < Dimensions.phoneAndTablet]
  return <StyledSidebar className={'sidebar'}>
    <Flex direction={isCompact ? 'row' : 'column'}>
      {size > Dimensions.phone && <Logo little={isCompact}/>}
      <Navigation isCompact={isCompact} size={size}/>
    </Flex>
    <StyledControlsContainer>
      <DatePicker/>
      <AdminBar/>
    </StyledControlsContainer>
  </StyledSidebar>
})

export default Sidebar
