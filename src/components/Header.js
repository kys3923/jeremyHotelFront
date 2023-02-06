// Images
import hiltonLogo from '../img/hiltonLogo.svg';
import { MdAccountCircle, MdDehaze, MdClose } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const modalHandler = (e) => {
    setIsModalOpen(!isModalOpen)
  }

  const logoutHandler = (e) => {
    console.log('clicked')
    if (sessionStorage.authToken) {
      sessionStorage.clear('authToken', '');
      navigate('/');
    }
  }

  return (
    <nav className="sticky top-0 bg-white z-50">
      {/* Responsive */}
      <div className='px-4 py-3 md:flex md:flex-row md:items-center font-bold hidden border-b border-gray-500'>
        {/* Img box */}
        <div className='w-48 mr-4'>
          <a href='/'><img src={hiltonLogo} alt='logo'/></a>
        </div>

        {/* Links */}
        <ul className="flex flex-row">
          <li className="mr-4 hover:text-gray-500"><a href='/location'>Locations</a></li>
          <li className="mr-4 hover:text-gray-500"><a href='/reservation'>Reservation</a></li>
        </ul>

        {/* Account */}
        <ul className='flex justify-end w-full gap-4'>
          {sessionStorage.authToken ? <>
            <li className="mr-2"><a href='/dashboard' className='hover:text-blue-800'>Dashboard</a></li>
            <li onClick={logoutHandler} className='hover:cursor-pointer hover:text-blue-800'>logout</li>
          </> 
          :
            <li><a href='login' className='flex flex-row flex-nowrap items-center hover:text-gray-500'><MdAccountCircle />Employee Login</a></li>
          }
        </ul>
      </div>
      {/* less than small size window */}
      <div className='px-4 py-3 flex flex-row items-center font-bold md:hidden border-b border-gray-500'>
        {/* Img box */}
        <div className='w-24 mr-4'>
          <a href='/'><img src={hiltonLogo} alt='logo' /></a>
        </div>

        {/* Hamburger */}
        <div className='flex justify-end w-full'>
          {
            isModalOpen ?
            <p className='block hover:cursor-pointer' onClick={modalHandler}><MdClose className='w-6 h-6' /></p>
            :
            <p className='block hover:cursor-pointer' onClick={modalHandler}><MdDehaze className='w-6 h-6' /></p>
          }
        </div>

      </div>
      {/* popup */}
      { isModalOpen ?
        <div className='md:hidden fixed z-20 bg-white w-full'>
          <div className='flex flex-col justify-between h-full pt-8'>
            <div className='border-t border-gray-400'>
              <p><a href='/location' className='h-24 flex justify-center items-center  font-bold border-b border-gray-400 hover:text-gray-500'>Locations</a></p>
              <p><a href='/reservation' className='h-24 flex justify-center items-center  font-bold border-b border-gray-400 hover:text-gray-500'>Reservation</a></p>
            </div>
            {sessionStorage.authToken ?
              <div>
                <p><a href='/dashboard' className='h-24 flex justify-center items-center  font-bold border-b border-gray-400 hover:text-gray-500'>Dashboard</a></p>
                <p className='h-24 flex justify-center items-center  font-bold border-b border-gray-400 hover:text-gray-500'
                  onClick={logoutHandler}
                >LogOut</p>
              </div>
              :
              <div>
                <p><a href='/login' className='h-24 flex justify-center items-center  font-bold border-b border-gray-400 hover:text-gray-500 mb-8'><MdAccountCircle className='w-5 h-5 mr-2'/>Employee Login</a></p>
              </div>
            }
          </div>
        </div>
      :
      null
      }
    </nav>
  );
}
export default Header;