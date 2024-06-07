import React, { useState } from 'react';
import styles from "../style";
import Button from "./Button";
import Modal from './Modal';
import ContactForm from './ContactForm';
import CloseButton from './CloseButton';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's bring your ideas to life</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to make robust, high quality, and affordable software so you can commit your time to growing your business.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button onClick={openModal} />
      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <ContactForm />
        <CloseButton onClick={closeModal} />
      </Modal>
    </section>
  );
};

export default CTA;
