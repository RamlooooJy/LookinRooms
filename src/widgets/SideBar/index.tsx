import {FC} from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import DatePicker from "../../components/DatePicker";
import {StyledSidebar} from "./styled";

const Sidebar: FC = () => {
  return <StyledSidebar className={'sidebar'}>
    <Logo/>
    <Navigation/>
    <DatePicker />
    <div className="adminbar"></div>

  </StyledSidebar>
}

export default Sidebar
