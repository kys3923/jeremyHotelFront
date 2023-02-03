import hiltonLogo from '../../img/hiltonLogo.svg';

const ReservationNewCheck = ({ submitForm, setSubmitForm, step, setStep }) => {

  let { checkIn, checkOut } = submitForm;

  const changeHandler = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setStep(step += 1)
  }

  const goBackButton = (e) => {
    e.preventDefault();
    setStep(step -= 1)
  }

  return (
    <section className="flex flex-col items-center p-10">
      {submitForm ?
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-1/2 border-gray-200 px-8 py-10 flex flex-col">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} />
            <p className="mt-4"><span className="text-blue-800 font-bold">Step&nbsp;{step}/4</span> - Staying Dates</p>
          </div>
          <div className="pt-4 mb-4">
            <p className="my-2 text-sm">You're about to make a reservation at <span className="text-blue-800 font-bold">{submitForm.location}</span>. Please tell us your staying period.</p>
          </div>
          <form
            onSubmit={submitHandler}
          >
            <div className='w-full flex justify-between items-center mb-4'>
              <label htmlFor='checkIn'>
                Check In:
              </label>
              <input type='date' name='checkIn' className='w-2/3 px-4 py-2 border border-gray-200 rounded-md text-center' value={checkIn} onChange={changeHandler} />
            </div>
            <div className='w-full flex justify-between items-center mb-4'>
              <label htmlFor='checkOut'>
                Check Out:
              </label>
              <input type='date' name='checkOut' className='w-2/3 px-4 py-2 border border-gray-200 rounded-md text-center' value={checkOut} onChange={changeHandler} />
            </div>
            <div className='flex flex-row gap-1 justify-center'>
              <button className="truncate px-4 py-2 w-1/2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-900 mt-4 hover:text-white" onClick={goBackButton}>Previous</button>
              <button type='submit' className="truncate px-4 py-2 w-1/2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">Next: Room Selection</button>
            </div>
          </form>
        </div>
      :
        <p>Loading...</p>
      }
    </section>
  );
}
export default ReservationNewCheck;