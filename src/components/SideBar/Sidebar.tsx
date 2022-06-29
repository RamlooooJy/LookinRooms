import React, {FC} from "react";
import Logo from "../Logo";
import Navigation from "../Navigation/Navigation";
import DatePick from "../DatePicker/DatePick";
import {StyledControlsContainer, StyledSidebar} from "./styled";
import AdminBar from "../AdminBar/AdminBar";
import {Flex} from "../../Application/globalStyled";
import {dimensions} from "../../store/dimension/dimensions";
import {observer} from "mobx-react-lite";
import {StaticDimensions} from "../../Application/globalValues";

const Sidebar: FC = observer(() => {
  const [size, isCompact] = [dimensions.width, dimensions.width < StaticDimensions.phoneAndTablet]
  return <StyledSidebar className={'sidebar'}>
    <Flex direction={isCompact ? 'row' : 'column'}>
      {size > StaticDimensions.phone && <Logo little={isCompact}/>}
      <Navigation isCompact={isCompact} size={size}/>
    </Flex>
    <StyledControlsContainer>
      <DatePick/>
      <AdminBar/>
    </StyledControlsContainer>
  </StyledSidebar>
})

export default Sidebar
