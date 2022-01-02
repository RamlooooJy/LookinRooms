import React, {FC} from "react";
import {RoomItemT, Rooms} from "../../common/dataInterfaces";
import {StyledAdminTableBody} from "./styled";
import {TableHeadersT} from "./AdminTable";

const AdminTableBody:FC<{data: RoomItemT[], tableHeaders: TableHeadersT, title: Rooms}> = ({title, tableHeaders, data}) => {
  if (!data) return <></>
  return <StyledAdminTableBody className="body" headers={tableHeaders}>
    <div className="row title">{title}</div>
    {data.map(table =>
      <div className="row">
        <div className="column">
          {table.TableNumber}
        </div>
        <div className="column">
          <div className="subrow">
            <div className="column">
              {table.TableInfo.Price}
            </div>
            <div className="column">
              {table.TableInfo.AvailableGuestAmount}/{table.TableInfo.TotalGuestWithAdditional}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="subrow">
            <div className="column">
              {table.Reserved?.Guest.GuestName}
            </div>
            <div className="column">
              {table.Reserved?.Guest.PhoneNumber}
            </div>
            <div className="column">
              {table.Reserved?.Guest.GuestsAmount}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="subrow">
            <div className="column">
              {table.Reserved?.Money.ReceivedMoney}
            </div>
            <div className="column">
              {table.TableInfo.Price - (table.Reserved?.Money.ReceivedMoney || 0)}
            </div>
          </div>
        </div>
        <div className="column">
          <div>
            {table.Reserved?.Agent.Name}
          </div>
          <div>
            {table.Reserved?.Agent.Promo}
          </div>
          <div>
            {table.Reserved?.Agent.Phone}
          </div>
        </div>
        <div className="column">
          {table.Reserved?.Date}
        </div>
        <div className="column">
          {table.Reserved?.Info}
        </div>
      </div>
    )}
  </StyledAdminTableBody>
};

export default AdminTableBody;
