import hiltonLogo from '../../img/hiltonLogo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const ReservationSuccess = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const dateHandler = (data) => {
    let newDate = moment(data).format('MM/DD/YYYY');
    return newDate
  }

  const navigateToHome = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
    navigate('/');
  }

  return (
    <section className="flex flex-col items-center p-10">
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-2/3 border-gray-200 px-8 py-10 flex flex-col md:items-center">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} alt='logo' />
            <p className="mt-4"><span className="text-blue-800 font-bold">Success!</span></p>
          </div>
          <div className="pt-4 mb-4 md:w-72 lg:w-96">
            <p className="my-2 text-sm">Your reservation has been created at <span className="text-blue-800 font-bold">{location.state.location}</span></p>
          </div>
          <div className='text-sm w-full md:w-72 lg:w-96'>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Location:</p>
              <p className='w-2/3 truncate'>{location.state.location}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>First Name:</p>
              <p className='w-2/3 truncate'>{location.state.firstName}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Last Name:</p>
              <p className='w-2/3 truncate'>{location.state.lastName}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Email:</p>
              <p className='w-2/3 truncate'>{location.state.customerEmail}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Contact:</p>
              <p className='w-2/3 truncate'>{location.state.contactNumber}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Check in:</p>
              <p className='w-2/3 truncate'>{dateHandler(location.state.checkIn)}</p>
            </div>
            <div className='flex gap-2 mb-2'>
              <p className='w-1/3 truncate text-gray-600'>Check out:</p>
              <p className='w-2/3 truncate'>{dateHandler(location.state.checkOut)}</p>
            </div>
            <div>
              {location.state.reservatedRooms.map((room, i) => {
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
            <div className='w-full flex justify-center'>
              <p className='text-gray-500 text-xs'>Thank you for choosing Hilton.</p>
            </div>
            <div className='w-full flex justify-center'>
              <button className="truncate px-4 py-2 w-1/2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4" onClick={navigateToHome}>Home</button>
            </div>
          </div>
        </div>
    </section>
  );
}
export default ReservationSuccess;