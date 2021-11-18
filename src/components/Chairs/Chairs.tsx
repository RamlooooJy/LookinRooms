import React, {FC} from 'react';
import {uid} from "../../common/utils";
import {ChairT, RoomItemT} from "../../common/interfaces";
import {StyledChair} from './styled';

const Chairs:FC<{ data: RoomItemT }> = ({data}) => {
  const chairs: () => ChairT[] = () => {
    const guests = [...Array.from({length: data.TableInfo.AvailableGuestAmount})].map(_ => 'default')
    const additionalGuests = [...Array.from({length: data.TableInfo.TotalGuestWithAdditional - data.TableInfo.AvailableGuestAmount || 0})].map(_ => 'more')
    return [...guests, ...additionalGuests] as ChairT[]
  }
  return (
    <>
      {
        chairs().map((color) => <StyledChair frizzed={data.Locked} key={uid()} color={color}/>)
      }
    </>
  );
};

export default Chairs;
