import { useNavigate } from "react-router-dom";

const ReservationHero = ({locationsData}) => {

  const navigate = useNavigate();

  const buttonHandler = (e) => {
    e.preventDefault();

    sessionStorage.setItem('reservationLocation', `${e.target[0].value}`)
    navigate('/reservation/new');
  }

  return (
    <section className="flex flex-col lg:items-center">
      <div className="w-full h-72 bg-slate-500 lg:w-11/12 lg:h-96 lg:mx-8 lg:rounded-md lg:mt-8 bg-location7 bg-cover bg-center flex justify-center items-center flex-col">
        <div className="bg-black p-10 rounded-md bg-opacity-50 flex flex-row">
          <div className="flex flex-col text-white font-extrabold">
            <p>MAKE YOUR</p>
            <p>PERFECT STAY</p>
          </div>
          <div className="font-Kaushan flex items-center text-3xl text-blue-300 pl-3 pb-2">
            <p>Make a reservation</p>
          </div>
        </div>
        <form onSubmit={(e) => buttonHandler(e)} className='w-full flex justify-center items-center'>
          <select className="h-10 rounded-md px-4 py-2 w-60 mr-2 mt-4">
            <option>Select Location</option>
            {locationsData.map((data) => {
              return <option value={data.name} key={data.id}>{data.name}</option>
            })}
          </select>
          <button className="px-8 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">Start Reservation</button>
        </form>
      </div>
    </section>
  );
}
export default ReservationHero;