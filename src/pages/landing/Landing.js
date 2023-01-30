import { useState } from 'react';

import JoinHonors from "./JoinHonors";
import FindYourStay from "./FindYourStay";
import TakeYourStayFurther from "./TakeYourStayFurther";
import StayLittleLonger from './StayLittleLonger';
import ExperienceStayLike from './ExperienceStayLike';
import HeartGreatTrip from './HeartGreatTrip';
import LogoBox from './LogoBox';
import Modal from './Modal';

// import Data
import { TakeYourStayFurtherData, StayALittleLongerData, ExperienceStayLikeData, HearGreatTripData, LogoData } from '../../data/TextAndImage';


const Landing = (props) => {

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ modalId, setModalId] = useState('');

  const bodyStyle = (boolean) => {
    if(isModalOpen) {
      return 'overscroll-contain'
    } else {
      return 'scroll-smooth'
    }
  }

  return (
    <div className={bodyStyle(isModalOpen)}>
      <JoinHonors />
      <FindYourStay />
      <TakeYourStayFurther Data={TakeYourStayFurtherData} setModalId={setModalId} setIsModalOpen={setIsModalOpen} />
      <StayLittleLonger StayALittleLongerData={StayALittleLongerData} />
      <ExperienceStayLike Data={ExperienceStayLikeData} setModalId={setModalId} setIsModalOpen={setIsModalOpen} />
      <HeartGreatTrip Data={HearGreatTripData} />
      <LogoBox LogoData={LogoData} />

      {/* MODAL */}
      {
        isModalOpen ?
        <Modal TYSFD={TakeYourStayFurtherData} modalId={modalId} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} ESL={ExperienceStayLikeData} />
        :
        null
      }
    </div>
  );
}
export default Landing;