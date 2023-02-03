import { useState, useEffect } from 'react';

import ReservationNewName from './ReservationNewName';
import ReservationNewCheck from './ReservationNewCheck';
import ReservationNewRoom from './ReservationNewRoom';
import { locationsData } from '../../data/TextAndImage';

const ReservationNew = (props) => {

  
  const [ submitForm, setSubmitForm ] = useState({
    customerEmail: '',
    firstName: '',
    lastName: '',
    checkIn: '',
    checkOut: '',
    numberRoom: 0,
    numberGuest: {
      adults: 0,
      kids: 0,
    },
    roomGrade: '',
    location: '',
    comment: '',
    contactNumber: '',
  });
  const [ step, setStep ] = useState(1);

  useEffect(() => {
    console.log(submitForm, step)
  },[submitForm, step])
  
  const pageDistributor = (Number) => {
    if (Number === 1) {
      return <ReservationNewName locationsData={locationsData} submitForm={submitForm} setSubmitForm={setSubmitForm} step={step} setStep={setStep} />
    }
    if (Number === 2 ) {
      return <ReservationNewCheck submitForm={submitForm} setSubmitForm={setSubmitForm} step={step} setStep={setStep} />
    }
    if (Number === 3 ) {
      return <ReservationNewRoom submitForm={submitForm} setSubmitForm={setSubmitForm} step={step} setStep={setStep} />
    }
    
  }

  return (
    <>
      {pageDistributor(step)}
    </>
  );
}
export default ReservationNew;