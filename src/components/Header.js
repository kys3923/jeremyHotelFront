// Images
import hiltonLogo from '../img/hiltonLogo.svg';
import { MdAccountCircle, } from 'react-icons/md';

const Header = (props) => {
  return (
    <nav className='px-4 py-3 flex flex-row items-center font-bold'>
      {/* Img box */}
      <div className='w-48 mr-4'>
        <a href='/'><img src={hiltonLogo} /></a>
      </div>

      {/* Links */}
      <ul className="flex flex-row">
        <li className="mr-4 hover:text-gray-500"><a href='/location'>Locations</a></li>
        <li className="mr-4 hover:text-gray-500"><a href='/reservation'>Reservation</a></li>
      </ul>

      {/* Account */}
      <div className='flex justify-end w-full'>
        <a href='login' className='flex flex-row flex-nowrap items-center hover:text-gray-500'><MdAccountCircle />Employee Login</a>
        {sessionStorage.authToken ? <li className="mr-2"><a href='/dashboard'>Dashboard</a></li> : null}
      </div>
    </nav>
  );
}
export default Header;