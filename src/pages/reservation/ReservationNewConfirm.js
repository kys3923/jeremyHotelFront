import hiltonLogo from '../../img/hiltonLogo.svg';
import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReservationNewConfirm = ({ submitForm, step, setStep }) => {

  const [ comment, setComment ] = useState('');

  let navigate = useNavigate();

  const commentHandler = (e) => {
    setComment(e.target.value);
  }

  const goBackButton = (e) => {
    e.preventDefault();
    setStep(step -= 1)
  }

  const dateHandler = (data) => {
    let newDate = moment(data).format('MM/DD/YYYY');
    return newDate
  }

  const submitHandler = (e) => {
    e.preventDefault();

    let newSubmitForm = {
      firstName: submitForm.firstName,
      lastName: submitForm.lastName,
      location: submitForm.location,
      contactNumber: submitForm.contactNumber,
      customerEmail: submitForm.customerEmail,
      checkIn: dateHandler(submitForm.checkIn),
      checkOut: dateHandler(submitForm.checkOut),
      reservatedRooms: submitForm.reservatedRooms,
      comment: comment,
      status: 'new'
    }

    const requestToApi = async (data) => {
      const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/reservations/register`, data)
      if (request.status === 200 ) {
        navigate(`/reservation/${request.data.reservation._id}`, {state: request.data.reservation})
      } else {
        console.log('not successful transaction', request)
      }
    }

    requestToApi(newSubmitForm)
  }

  return (
    <section className="flex flex-col items-center p-10">
      {submitForm ?
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-2/3 border-gray-200 px-8 py-10 flex flex-col md:items-center">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} alt='logo'/>
            <p className="mt-4"><span className="text-blue-800 font-bold">Step&nbsp;{step}/4</span> - Room Confirmation</p>
          </div>
          <div className="pt-4 mb-4 md:w-72 lg:w-96">
            <p className="my-2 text-sm">You're about to make a reservation at <span className="text-blue-800 font-bold">{submitForm.location}</span>. Please review your reservation.</p>
          </div>
          <div className='text-sm w-full md:w-72 lg:w-96'>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Location:</p>
              <p className='w-2/3 truncate'>{submitForm.location}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>First Name:</p>
              <p className='w-2/3 truncate'>{submitForm.firstName}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Last Name:</p>
              <p className='w-2/3 truncate'>{submitForm.lastName}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Email:</p>
              <p className='w-2/3 truncate'>{submitForm.customerEmail}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Contact:</p>
              <p className='w-2/3 truncate'>{submitForm.contactNumber}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Check in:</p>
              <p className='w-2/3 truncate'>{dateHandler(submitForm.checkIn)}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Check out:</p>
              <p className='w-2/3 truncate'>{dateHandler(submitForm.checkOut)}</p>
            </div>
            <div>
              {submitForm.reservatedRooms.map((room, i) => {
                return <div key={i} className='flex flex-col w-full border border-gray-200 rounded-md p-4 my-4'>
                  <div className='flex w-full justify-center mb-4 border-b border-grey-100 pb-4'>
                    <p className='font-bold text-blue-800'>Room {i +1}</p>
                  </div>
                  <div className='flex gap-2 w-full'>
                    <div className='flex w-1/3 justify-center'>
                      <p className='mr-4 text-blue-800 truncate'>{room.typeOfRoom}</p>
                    </div>
                    <div className='flex w-1/3 justify-center'>
                      <p className='mr-4'>Adult:</p>
                      <p className='text-blue-800 font-bold'>{room.adult}</p>
                    </div>
                    <div className='flex w-1/3 justify-center'>
                      <p className='mr-4'>Kids:</p>
                      <p className='text-blue-800 font-bold'>{room.kids}</p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          <form
            onSubmit={submitHandler}
            className='text-sm w-full md:w-72 lg:w-96'
          >
            <div>
              <p className='mb-2'>Leave comment on your reservation</p>
            </div>
            <div>
              <textarea cols='3' rows='4' value={comment} onChange={commentHandler} className='w-full border rounded-md p-4'/>
            </div>
            <div>
              <div className='flex flex-row gap-1 justify-center'>
                <button className="truncate px-4 py-2 w-1/2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-900 mt-4 hover:text-white" onClick={goBackButton}>Previous</button>
                <button type='submit' className="truncate px-4 py-2 w-1/2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">Submit</button>
              </div>
            </div>
          </form>
        </div>
      :
        <p>Loading...</p>
      }
    </section>
  );
}
export default ReservationNewConfirm;