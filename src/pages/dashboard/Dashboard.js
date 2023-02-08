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
  const [ showModal, setShowModal ] = useState(true);
  const [ pickedReservation, setPickedReservation ] = useState('');

  let apiAddress = process.env.REACT_APP_SERVER_URL;
  
  useEffect(() => {
    let isMounted = true;
    const apiCall = async () => {
      const reqeustToApi = await axios.get(`${apiAddress}/reservations/all`)
      if(!!isMounted) {
        if(reqeustToApi.data.success) {
          setReservations(reqeustToApi.data.reservations)
        }
      }
    }
    apiCall();
    return () => {
      isMounted = false;
    }

  },[triggerUseEffect]) // eslint-disable-line react-hooks/exhaustive-deps

  const setSection = (String) => {
    if (String === 'new') {
      return <DashboardNew reservations={reservations} settingModal={settingModal}  />
    }
    if (String === 'current') {
      return <DashboardCurrent reservations={reservations} settingModal={settingModal} />
    }
    if (String === 'history') {
      return <DashboardHistory reservations={reservations} settingModal={settingModal} />
    }
  }

  const settingModal = (e, id) => {
    e.preventDefault();
    setPickedReservation(id)
    setShowModal(true)
  }

  return (
    <>
      <DashboardHeader currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {setSection(currentSection)}
      <DashboardModal pickedReservation={pickedReservation} setShowModal={setShowModal} reservations={reservations} showModal={showModal} triggerUseEffect={triggerUseEffect} setTriggerUseEffect={setTriggerUseEffect}/>
    </>
  );
}
export default Dashboard;