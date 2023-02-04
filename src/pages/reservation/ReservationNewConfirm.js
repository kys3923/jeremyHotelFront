import hiltonLogo from '../../img/hiltonLogo.svg';
import { useState } from 'react';

const ReservationNewConfirm = ({ submitForm, setSubmitForm, step, setStep }) => {

  const [ comment, setComment ] = useState('');

  const commentHandler = (e) => {
    setComment(e.target.value);
  }

  const goBackButton = (e) => {
    e.preventDefault();
    setStep(step -= 1)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(comment, submitForm)
  }

  return (
    <section className="flex flex-col items-center p-10">
      {submitForm ?
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-2/3 border-gray-200 px-8 py-10 flex flex-col md:items-center">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} />
            <p className="mt-4"><span className="text-blue-800 font-bold">Step&nbsp;{step}/4</span> - Room Confirmation</p>
          </div>
          <div className="pt-4 mb-4 md:w-72 lg:w-96">
            <p className="my-2 text-sm">You're about to make a reservation at <span className="text-blue-800 font-bold">{submitForm.location}</span>. Please review your reservation.</p>
          </div>
          <div className='text-sm w-full md:w-72 lg:w-96'>
            <div className='flex justify-between'>
              <p>Location:</p>
              <p>{submitForm.location}</p>
            </div>
            <div className='flex justify-between'>
              <p>First Name:</p>
              <p>{submitForm.firstName}</p>
            </div>
            <div className='flex justify-between'>
              <p>Last Name:</p>
              <p>{submitForm.lastName}</p>
            </div>
            <div className='flex justify-between'>
              <p>Email:</p>
              <p>{submitForm.customerEmail}</p>
            </div>
            <div className='flex justify-between'>
              <p>Phone Number:</p>
              <p>{submitForm.contactNumber}</p>
            </div>
            <div className='flex justify-between'>
              <p>Date check in:</p>
              <p>{submitForm.checkIn}</p>
            </div>
            <div className='flex justify-between'>
              <p>Date check out:</p>
              <p>{submitForm.checkOut}</p>
            </div>
            <div>
              {submitForm.reservatedRooms.map((room, i) => {
                return <div key={i} className='flex'>
                  <div className='flex'>
                    <p>Room {i +1}:</p>
                    <p>{room.typeofRoom}</p>
                  </div>
                  <div className='flex'>
                    <p>Adult:</p>
                    <p>{room.adult}</p>
                  </div>
                  <div className='flex'>
                    <p>Kids:</p>
                    <p>{room.kids}</p>
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
              <p>Leave comment on your reservation</p>
            </div>
            <div>
              <textarea cols='3' rows='4' value={comment} onChange={commentHandler} className='w-full border'/>
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