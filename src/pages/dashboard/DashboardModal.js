import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { MdOutlineClose } from "react-icons/md";
import axios from 'axios';

const DashboardModal = ({pickedReservation, setShowModal, reservations, showModal, triggerUseEffect, setTriggerUseEffect}) => {

  const [ receivedData, setReceivedData ] = useState();

  useEffect(() => {
    let isMounted = true;

    const stateSetting = async () => {
      if (isMounted) {
        let foundData = reservations.find(reservation => reservation._id === pickedReservation)
        await setReceivedData(foundData)
      }
    }

    stateSetting()
    return () => {
      isMounted = false
    }
  }, [showModal, pickedReservation]) // eslint-disable-line react-hooks/exhaustive-deps

  const phoneNumber = (String) => {
    let areaCode = String.substr(0, 3)
    let threeDigit = String.substr(3, 3)
    let fourDigit = String.substr(6,4)
    let finalFormat = `(${areaCode}) ${threeDigit}-${fourDigit}`
    return finalFormat
  }

  let server = process.env.REACT_APP_SERVER_URL;

  const denyHandler = (e, id) => {
    e.preventDefault();
    const reqeustToApi = async (id) => {
      const reqeust = await axios.put(`${server}/reservations/deny/${id}`)
      if (reqeust.data.success) {
        setTriggerUseEffect(!triggerUseEffect);
        setShowModal(false)
      } else if (!reqeust.data.success) {
        console.log('success fail')
      }
    }
    reqeustToApi(id);
  }

  const confirmHandler = (e, id) => {
    e.preventDefault();
    const reqeustToApi = async (id) => {
      const reqeust = await axios.put(`${server}/reservations/confirm/${id}`)
      if (reqeust.data.success) {
        setTriggerUseEffect(!triggerUseEffect);
        setShowModal(false)
      }
    }
    reqeustToApi(id);
  }

  return (
    <>
      { receivedData ? 
        <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-3xl sm:p-6">
                  <div className='w-full flex flex-col'>
                    {/* Top box */}
                    <div className='flex flex-row w-full justify-center border-b pb-2'>
                      <p className='w-full text-center font-bold'><span className="text-sm text-gray-600">Reservation for</span> {receivedData.firstName} {receivedData.lastName}</p>
                      <p onClick={() => setShowModal(false)}><MdOutlineClose className='w-6 h-6 hover:cursor-pointer' /></p>
                    </div>
                    {/* Top box */}
                    <div className='flex flex-col w-full items-center border-b p-4 text-sm'>
                      <div className="grid grid-cols-3 w-9/12 my-2 border-b border-gray-200">
                        <p className="w-1/3 px-2 py-2">Location:</p>
                        <p className="col-span-2 font-bold text-blue-800 px-2 py-2">{receivedData.location}</p>
                      </div>
                      <div className="grid grid-cols-3 w-9/12 my-2 border-b border-gray-200">
                        <p className="w-1/3 px-2 py-2">Email:</p>
                        <p className="col-span-2 px-2 py-2">{receivedData.customerEmail}</p>
                      </div>
                      <div className="grid grid-cols-3 w-9/12 my-2 border-b border-gray-200">
                        <p className="w-1/3 px-2 py-2">Contact:</p>
                        <p className="col-span-2 px-2 py-2">{phoneNumber(receivedData.contactNumber)}</p>
                      </div>
                      <div className="grid grid-cols-3 w-9/12 my-2 border-b border-gray-200">
                        <p className="w-1/3 px-2 py-2">Dates:</p>
                        <p className="col-span-2 px-2 py-2">{receivedData.checkIn} ~ {receivedData.checkOut}</p>
                      </div>
                      <div className="grid grid-cols-3 w-9/12 my-2 border-b border-gray-200">
                        <p className="col-span-3 px-2 py-2">Rooms - {receivedData.reservatedRooms.length}</p>
                        {receivedData.reservatedRooms.map((room, i) => {
                          return <div key={i} className='col-span-3 px-2 py-2 grid grid-cols-3 bg-gray-100 rounded-md mb-2'>
                            <div className="flex justify-center items-center">
                              <p className="mr-2 truncate">Room:</p>
                              <p className="truncate font-bold text-blue-800">{room.typeOfRoom}</p>
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="mr-2 truncate">Adult:</p>
                              <p className="truncate font-bold text-blue-800">{room.adult}</p>
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="mr-2 truncate">Kids:</p>
                              <p className="truncate font-bold text-blue-800">{room.kids}</p>
                            </div>
                          </div>
                        })}
                      </div>
                      { receivedData.comment &&
                        <div className="grid grid-cols-3 w-9/12 my-2">
                          <p className="col-span-3 px-2 py-2">Comments</p>
                          <div className="col-span-3 px-2 py-2 border border-gray-200 mb-4 rounded-md">
                            <p>{receivedData.comment}</p>
                          </div>
                        </div>
                      }

                    </div>
                    {/* button box */}
                    <div className="w-full flex justify-center px-3 py-4">
                      <div className='w-9/12 grid grid-cols-3 gap-2 justify-center'>
                        <button 
                        onClick={()=> setShowModal(false)}
                        className='px-8 py-2 text-blue-800 border border-blue-800 rounded-md hover:bg-blue-900 hover:text-white mb-4 focus:outline-none'
                        >
                          Close
                        </button>
                        <button className='px-8 py-2 text-white bg-red-800 rounded-md hover:bg-red-900 mb-4 focus:outline-none' onClick={(e) => denyHandler(e, receivedData._id)}>Deny</button>
                        <button className='px-8 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-900 mb-4 focus:outline-none' onClick={(e) => confirmHandler(e, receivedData._id)}>Confirm</button>
                      </div>
                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      : null }
    </>
  );
}
export default DashboardModal;