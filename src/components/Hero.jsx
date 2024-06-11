import React, { useState } from 'react';
import styles from '../style'; // Импорт стилей для Hero
import { group } from '../assets';
import GetStarted from './GetStarted';
import Modal from './Modal';
import ContactForm from './ContactForm';
import CloseButton from './CloseButton'; // Импорт нового компонента CloseButton
import './MovingText.css'; // Импорт стилей для двигающегося текста

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]">
            Empowering <br/>
            <span className="text-gradient">Tomorrow's</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted onClick={openModal} />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Innovators with Custom Software Solutions
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          "At our core, we excel at delivering affordable, high-quality custom software solutions with lightning-fast turnaround times. Your vision, our expertise, unbeatable results."
        </p>
      </div>

      <div className="relative flex-1">
        <img src={group} alt="billing" className="w-full h-full relative z-5" />
        <div className="absolute z-0 w-[0%] h-[0%] top-0 left-0 pink__gradient"/>
        <div className="absolute z-1 w-[70%] h-[80%] rounded-full bottom-[10%] left-[10%] white__gradient"/>
        <div className="absolute z-0 w-[50%] h-[50%] right-[5%] bottom-[5%] blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted onClick={openModal} />
      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <ContactForm />
        <CloseButton onClick={closeModal} />
      </Modal>

      <div className="marquee-container">
        <div className="marquee marquee-left">
          <span>C# Rails Node.js Java React .NET Python C# Rails Node.js Java React .NET Python </span>
        </div>
        <div className="marquee marquee-right">
          <span>Angular PHP Android iOS Golang Vue.js C++ JavaScript Swift Angular PHP Android iOS Golang Vue.js C++ JavaScript Swift</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
