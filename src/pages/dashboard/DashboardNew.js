import moment from 'moment';
import axios from 'axios';

const DashboardNew = ({reservations, setTriggerUseEffect, settingModal}) => {

  const buttonHandler = (e) => {
    console.log('clicked')
  }

  const phoneNumber = (String) => {
    let areaCode = String.substr(0, 3)
    let threeDigit = String.substr(3, 3)
    let fourDigit = String.substr(6,4)
    let finalFormat = `(${areaCode}) ${threeDigit}-${fourDigit}`
    return finalFormat
  }

  console.log(reservations)
  return (
    <nav>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 pt-3'>
        {!!reservations ?
          reservations.map((reservation, i) => {
            return <ul key={i} className='flex flex-col p-6 items-center border-gray-200 border-2 rounded-md shadow-lg w-full hover:shadow-none hover:border-blue-800 md:items-start' onClick={(e) => settingModal(e, reservation._id)}>
              <li className='text-blue-800'>{reservation.location}</li>
              <li>{reservation.firstName} {reservation.lastName}</li>
              <li className='text-sm mb-2'>{reservation.customerEmail}</li>
              <li className='text-sm'>{reservation.checkIn} ~ {reservation.checkOut}</li>
              {/* <p>{phoneNumber(reservation.contactNumber)}</p> */}
            </ul>
          })
        :
        <p>loading...</p>
        }
      </div>
    </nav>
  );
}
export default DashboardNew;