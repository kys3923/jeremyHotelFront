import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdOutlineClose } from "react-icons/md";

const Modal = ({TYSFD, modalId, setIsModalOpen, isModalOpen, ESL}) => {

  const [receivedData, setReceivedData] = useState();

  useEffect(() => {
    let isLoading = true;

    const settingState = async (arry) => {
      if (isLoading && !!TYSFD && modalId < 19) {
        let foundData = TYSFD.find(obj => obj.id === modalId)
        console.log(foundData, 'at modal')
        await setReceivedData(foundData);
      }

      if (isLoading && !!ESL && modalId >= 20) {
        let foundData = ESL.find(obj => obj.id === modalId)
        console.log(foundData, 'at modal')
        await setReceivedData(foundData);
      }
    }

    return () => {
      settingState(TYSFD)
      isLoading= false;
    }
  }, [isModalOpen, modalId])

  const imgSelector = (id) => {
    if (id === 1) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf1 bg-center bg-cover mt-4`
    }
    if (id === 2) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf2 bg-center bg-cover mt-4`
    }
    if (id === 3) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf3 bg-center bg-cover mt-4`
    }
    if (id === 4) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf4 bg-center bg-cover mt-4`
    }
    if (id === 5) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf5 bg-center bg-cover mt-4`
    }
    if (id === 6) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf6 bg-center bg-cover mt-4`
    }
    if (id === 7) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-tysf7 bg-center bg-cover mt-4`
    }
    if (id === 20) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-esl1 bg-center bg-cover mt-4`
    }
    if (id === 21) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-esl2 bg-center bg-cover mt-4`
    }
    if (id === 22) {
      return `w-full h-64 md:h-80 bg-gray-600 mb-2 flex justify-center items-center bg-esl3 bg-center bg-cover mt-4`
    }
  }

  return (
    <>
      {receivedData ?
        <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
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
                      <p className='w-full text-center font-bold'>{receivedData.textTitleCase}</p>
                      <p onClick={() => setIsModalOpen(false)}><MdOutlineClose className='w-6 h-6 hover:cursor-pointer' /></p>
                    </div>
                    {/* IMG box */}
                    <div className={imgSelector(receivedData.id)} />
                    {/* Text box1 */}
                    <div className='flex flex-col p-8'>
                      <h3 className='text-3xl font-extrabold text-blue-800 mb-4'>{receivedData.title}</h3>
                      {!!receivedData.detail ?
                        <p>{receivedData.detail}</p>
                      :
                      null
                      }
                      {!!receivedData.detail2 ?
                        <p>{receivedData.detail2}</p>
                      :
                      null
                      }
                    </div>
                    {/* button box */}
                    <div className='w-full flex justify-center'>
                      <button 
                      onClick={() => setIsModalOpen(false)}
                      className='px-8 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-900 mb-4 focus:outline-none'
                      >
                        {receivedData.buttonText}
                      </button>
                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      :
      <p>Loading...</p>
      }
    </>
  );
}
export default Modal;

