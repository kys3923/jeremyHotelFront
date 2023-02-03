import hiltonLogo from '../../img/hiltonLogo.svg';

const ReservationNewName = ({locationsData, submitForm, setSubmitForm, step, setStep}) => {
  
  let { firstName, lastName, contactNumber, customerEmail, location } = submitForm;

  const changeHandler = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let sessionData = sessionStorage.reservationLocation

    const settingState = async (data) => {
      if (data) {
        await setSubmitForm((prev) => ({
          ...prev,
          location: data
        }))
        await sessionStorage.clear('reservatioinLocation', '')
      }
    }
    settingState(sessionData)
    setStep(step += 1)
  }
  
  return (
    <section className="flex flex-col items-center p-10">
      {submitForm ?
        <div className="border-2 shadow-md rounded-md w-11/12 md:w-1/2 border-gray-200 px-8 py-10 flex flex-col">
          <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
            <img src={hiltonLogo} />
            <p className="mt-4"><span className="text-blue-800 font-bold">Step&nbsp;{step}/4</span> - Cutomer Information</p>
          </div>
          <div className="pt-4 mb-4">
            <p className="my-2 text-sm">You're about to make a reservation at <span className="text-blue-800 font-bold">{sessionStorage.reservationLocation}</span>. Please tell us your contact information.</p>
          </div>
          <form className="flex flex-col" onSubmit={submitHandler}>
            <input type='text' name='firstName' placeholder="First Name" className="px-4 py-2 border rounded-md border-gray-200 focus:ring-blue-800 focus:ring-2 focus:outline-none mb-4" onChange={changeHandler} value={firstName} />
            <input type='text' name='lastName' placeholder="Last Name" className="px-4 py-2 border rounded-md border-gray-200 focus:ring-blue-800 focus:ring-2 focus:outline-none mb-4" onChange={changeHandler} value={lastName} />
            <input type='text' name='contactNumber' placeholder="Contact Number" className="px-4 py-2 border rounded-md border-gray-200 focus:ring-blue-800 focus:ring-2 focus:outline-none mb-4" onChange={changeHandler} value={contactNumber} />
            <input type='email' name='customerEmail' placeholder="Email address" className="px-4 py-2 border rounded-md border-gray-200 focus:ring-blue-800 focus:ring-2 focus:outline-none mb-4" onChange={changeHandler} value={customerEmail} />
            <button type='submit' className="px-8 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">Next: Dates</button>
          </form>
        </div>
      :
        <p>Loading...</p>
      }
    </section>
  );
}
export default ReservationNewName;