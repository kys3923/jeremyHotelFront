import { useState } from 'react';
 
import ReservationHero from "./ReservationHero";
import { locationsData } from '../../data/TextAndImage';

const Reservation = (props) => {

  return (
    <>
      <ReservationHero locationsData={locationsData} />
      {/* <ReservationForm /> */}
    </>
  );
}
export default Reservation;