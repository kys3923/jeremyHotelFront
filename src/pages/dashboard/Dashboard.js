import axios from 'axios';
import { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardNew from './DashboardNew';
import DashboardCurrent from './DashboardCurrent';
import DashboardHistory from './DashboardHistory';
import DashboardModal from './DashboardModal';

const Dashboard = (props) => {

  const [ currentSection, setCurrentSection ] = useState('new');
  const [ triggerUseEffect, setTriggerUseEffect ] = useState(false);
  const [ reservations, setReservations ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ pickedReservation, setPickedReservation ] = useState('');

  let apiAddress = process.env.REACT_APP_SERVER_URL;
  
  useEffect(() => {
    let isMounted = true;
    const apiCall = async () => {
      if(!!isMounted) {
        const reqeustToApi = await axios.get(`${apiAddress}/reservations/all`)
        if(reqeustToApi.data.success) {
          setReservations(reqeustToApi.data.reservations)
        }
      }
    }
    
    return () => {
      apiCall();
      isMounted = false;
    }

  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  const setSection = (String) => {
    if (String === 'new') {
      return <DashboardNew reservations={reservations} setTriggerUseEffect={setTriggerUseEffect} settingModal={settingModal}  />
    }
    if (String === 'current') {
      return <DashboardCurrent />
    }
    if (String === 'history') {
      return <DashboardHistory />
    }
  }

  const settingModal = (e, id) => {
    e.preventDefault();
    setPickedReservation(id)
    setShowModal(true)
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false)
  }

  return (
    <>
      <DashboardHeader currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {setSection(currentSection)}
      { showModal && <DashboardModal pickedReservation={pickedReservation} closeModal={closeModal} />}
    </>
  );
}
export default Dashboard;