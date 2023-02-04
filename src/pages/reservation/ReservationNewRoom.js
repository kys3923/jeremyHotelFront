import hiltonLogo from '../../img/hiltonLogo.svg';
import { useState, useEffect } from 'react';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md";

const ReservationNewRoom = ({ submitForm, setSubmitForm, step, setStep }) => {

  const [ reservatedRoom, setReservatedRoom ] = useState([])
  const [ numberOfRoom, setNumberOfRoom ] = useState(0);
  const [ updatedTimes, setUpdatedTimes ] = useState(0);

  const addRoom = (e) => {
    e.preventDefault();
    let currentNumber = numberOfRoom;
    let newNumberofRoom = currentNumber += 1;
    setNumberOfRoom(newNumberofRoom);
    
    let roomTemplate = {
        id: newNumberofRoom,
        adult: 0,
        kids: 0,
        typeofRoom: ''
      };
      setReservatedRoom(prev => [...prev, roomTemplate])
  }

  const removeRoom = (e, id) => {
    e.preventDefault();
    let filteredReservation = reservatedRoom.filter(room => room.id !== id)
    setReservatedRoom(filteredReservation)
  }

  const removeAdult = async (e, id, index) => {
    e.preventDefault();
    let currentReservations = reservatedRoom;
    let foundReservation = reservatedRoom.find(room => room.id === id);
    if (foundReservation.adult === 0) return (console.log('number is 0'));
    if (foundReservation.adult > 0 ) {
      let newNum = foundReservation.adult -= 1;
      let updatingObj = {
        id: foundReservation.id,
        adult: newNum,
        kids: foundReservation.kids,
        typeofRoom: foundReservation.typeofRoom
      };
      await currentReservations.splice(index, 1, updatingObj);
      setReservatedRoom(currentReservations)
      let num = updatedTimes
      await setUpdatedTimes(num -= 1);
    };
  }

  const addAdult = async (e, id, index) => {
    e.preventDefault();
    let currentReservations = reservatedRoom;
    let foundReservation = reservatedRoom.find(room => room.id === id);
    let newNum = foundReservation.adult += 1;
    let updatingObj = {
      id: foundReservation.id,
      adult: newNum,
      kids: foundReservation.kids,
      typeofRoom: foundReservation.typeofRoom
    };
    await currentReservations.splice(index, 1, updatingObj);
    setReservatedRoom(currentReservations)
    let num = updatedTimes
    await setUpdatedTimes(num += 1);
  }

  const addKid = async (e, id, index) => {
    e.preventDefault();
    let currentReservations = reservatedRoom;
    let foundReservation = reservatedRoom.find(room => room.id === id);
    let newNum = foundReservation.kids += 1;
    let updatingObj = {
      id: foundReservation.id,
      adult: foundReservation.adult,
      kids: newNum,
      typeofRoom: foundReservation.typeofRoom
    };
    await currentReservations.splice(index, 1, updatingObj);
    setReservatedRoom(currentReservations)
    let num = updatedTimes
    await setUpdatedTimes(num += 1);
  }

  const removeKid = async (e, id, index) => {
    e.preventDefault();
    let currentReservations = reservatedRoom;
    let foundReservation = reservatedRoom.find(room => room.id === id);
    if (foundReservation.kid === 0) return (console.log('number is 0'));
    if (foundReservation.kid > 0 ) {
      let newNum = foundReservation.kids -= 1;
      let updatingObj = {
        id: foundReservation.id,
        adult: foundReservation.adult,
        kids: newNum,
        typeofRoom: foundReservation.typeofRoom
      };
      await currentReservations.splice(index, 1, updatingObj);
      setReservatedRoom(currentReservations)
      let num = updatedTimes
      await setUpdatedTimes(num -= 1);
    };
  }

  const changeHandler = async (e, id, index) => {
    let currentReservations = reservatedRoom;
    let foundReservation = reservatedRoom.find(room => room.id === id);
    let updatingObj = {
      id: foundReservation.id,
      adult: foundReservation.adult,
      kids: foundReservation.kids,
      typeofRoom: e.target.value
    };
    await currentReservations.splice(index, 1, updatingObj);
    setReservatedRoom(currentReservations);
    let num = updatedTimes;
    await setUpdatedTimes(num += 1)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitForm(prev => ({
      ...prev,
      reservatedRooms: reservatedRoom 
    }))
    setStep(step += 1)
  }

  const goBackButton = (e) => {
    e.preventDefault();
    setStep(step -= 1)
  }

  return (
    <section className="flex flex-col items-center p-10">
      {submitForm ?
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-2/3 border-gray-200 px-8 py-10 flex flex-col">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} />
            <p className="mt-4"><span className="text-blue-800 font-bold">Step&nbsp;{step}/4</span> - Room Selection</p>
          </div>
          <div className="pt-4 mb-4">
            <p className="my-2 text-sm">You're about to make a reservation at <span className="text-blue-800 font-bold">{submitForm.location}</span>. Please select your room and guests.</p>
          </div>
          <form
            onSubmit={submitHandler}
          >
            <div className='flex flex-nowrap mb-4'>
              <div className='w-1/4 flex justify-center'></div>
              <div className='w-1/4 flex justify-center'><p className='font-bold text-blue-800'>Adult</p></div>
              <div className='w-1/4 flex justify-center'><p className='font-bold text-blue-800'>Kids</p></div>
              <div className='w-1/4 flex justify-center'><p className='font-bold text-blue-800'>Room</p></div>
            </div>
            {reservatedRoom.length === 0 ?
              <div className='w-full flex justify-center py-2 bg-gray-200'>
                <p>Please add a room</p>
              </div>
              :
              reservatedRoom.map((room, i) => {
              return <div key={room.id} className='flex flex-nowrap mb-2'>
                <div className='w-1/4 flex justify-left items-center'>
                  <p onClick={(e) => removeRoom(e, room.id)}><MdOutlineRemoveCircleOutline /></p>
                  <p>Room {i+1}:</p>
                </div>
                <div className='w-1/4 flex justify-center items-center'>
                  <p onClick={(e) => removeAdult(e, room.id, i)}><MdOutlineRemoveCircleOutline /></p>
                  <p className='px-2'>{room.adult}</p>
                  <p onClick={(e) => addAdult(e, room.id, i)}><MdOutlineAddCircleOutline /></p>
                </div>
                <div className='w-1/4 flex justify-center items-center'>
                  <p onClick={(e) => removeKid(e, room.id, i)}><MdOutlineRemoveCircleOutline /></p>
                  <p className='px-2'>{room.kids}</p>
                  <p onClick={(e) => addKid(e, room.id, i)}><MdOutlineAddCircleOutline /></p>
                </div>
                <select className='w-1/4 flex justify-center items-center' onChange={(e) => changeHandler(e, room.id, i)}>
                  <option className='text-center'>Select</option>
                  <option value='Single, Queen' className='text-center'>Single, Queen</option>
                  <option value='Single, King' className='text-center'>Single, King</option>
                  <option value='Single, Twin' className='text-center'>Single, Twin</option>
                  <option value='Double' className='text-center'>Double</option>
                  <option value='Triple' className='text-center'>Triple</option>
                  <option value='Deluxe' className='text-center'>Deluxe</option>
                  <option value='Suite' className='text-center'>Suite</option>
                  <option value='Penthouse' className='text-center'>Penthouse</option>
                </select>
              </div>
            })}
            <div className='flex justify-center'>
              <button onClick={addRoom} className='truncate px-4 py-2 w-1/2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4'>Add Room</button>
            </div>
            <div className='flex flex-row gap-1 justify-center'>
              <button className="truncate px-4 py-2 w-1/2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-900 mt-4 hover:text-white" onClick={goBackButton}>Previous</button>
              <button type='submit' className="truncate px-4 py-2 w-1/2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">Next: Confirmation</button>
            </div>
          </form>
        </div>
      :
        <p>Loading...</p>
      }
    </section>
  );
}
export default ReservationNewRoom;