import { useState, useEffect } from 'react';

const DashboardNew = ({reservations, settingModal}) => {

  const [ newReservations, setNewReservations ] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const settingState = (arry) => {
      let newArry = [];
      if (isMounted) {
        arry.forEach(reservation => {
          if(reservation.status === 'new') {
            newArry.push(reservation)
          }
        });
        setNewReservations(newArry)
        console.log(newArry)
      }
    }

    settingState(reservations)
    return () => {
      isMounted = false;
    }
  },[reservations])

  return (
    <nav>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 pt-3'>
        { newReservations.length > 0 ?
          newReservations.map((reservation, i) => {
            return <ul key={i} className='flex flex-col p-6 items-center border-gray-200 border-2 rounded-md shadow-lg w-full hover:shadow-none hover:border-blue-800 md:items-start' onClick={(e) => settingModal(e, reservation._id)}>
              <li className='text-blue-800'>{reservation.location}</li>
              <li>{reservation.firstName} {reservation.lastName}</li>
              <li className='text-sm mb-2'>{reservation.customerEmail}</li>
              <li className='text-sm'>{reservation.checkIn} ~ {reservation.checkOut}</li>
            </ul>
          })
        :
        null
        }
      </div>
    </nav>
  );
}
export default DashboardNew;