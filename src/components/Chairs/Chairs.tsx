import React, {FC} from 'react';
import {uid} from "../../common/utils";
import {ChairT, TableT} from "../../common/interfaces";
import { StyledChair } from './styled';

const Chairs:FC<{data: TableT}> = ({data}) => {
  const chairs: () => ChairT[] = () => {
    const guests = [...Array.from({length: data.GuestsAmount})].map(_ => 'default')
    const additionalGuests = [...Array.from({length: data.AdditionalGuestAmount || 0})].map(_ => 'more')
    return [...guests, ...additionalGuests] as ChairT[]
  }
  return (
    <>
      {
        chairs().map((color) => <StyledChair key={uid()} color={color}/>)
      }
    </>
  );
};

export default Chairs;
