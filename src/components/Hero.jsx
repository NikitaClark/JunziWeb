import React, { useState } from 'react';
import styles from '../style'; // Импорт стилей для Hero
import { group } from '../assets';
import GetStarted from './GetStarted';
import Modal from './Modal';
import ContactForm from './ContactForm';
import CloseButton from './CloseButton'; // Импорт нового компонента CloseButton

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
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Empowering <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Tomorrow's</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted onClick={openModal} />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Innovators with Custom Software Solutions
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          "At our core, we excel at delivering affordable, high-quality custom software solutions with lightning-fast turnaround times. Your vision, our expertise, unbeatable results."
        </p>
      </div>

      <div className={`flex-1 ${styles.flexCenter}  md:my-0 my-10 relative ${styles.imageContainer}`}>
        <img src={group} alt="billing" className={`${styles.image}`} />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted onClick={openModal} />
      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <ContactForm />
        <CloseButton onClick={closeModal} />
      </Modal>
    </section>
  );
};

export default Hero;