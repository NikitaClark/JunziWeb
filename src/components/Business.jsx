import React, { useState } from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Modal from './Modal';
import ContactForm from './ContactForm';
import CloseButton from './CloseButton';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col p-3 rounded-[20px] mb-2 ${index !== features.length - 1 ? "mb-0" : "mb-0"} feature-card`}>
    <div className={`w-[85px] h-[85px] rounded-full `}>
      <img src={icon} alt="star" className="w-[50%] h-[100%] object-contain" />
    </div>
    <div className="flex justify-between flex-col px-0 py-2 rounded-[20px] max-w-[410px] md:mr-10 sm:mr-2 mr-0 my-0 feedback-card">
      <h4 className="font-poppins font-semibold text-white text-[26px] leading-[9.4px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You focus on your business, <br className="sm:block hidden" /> we'll handle the tech.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-28`}>
          "Let us handle the technical intricacies while you dedicate your time and energy to growing your business. 
          With our expertise managing the tech side, you can stay laser-focused on seizing opportunities, 
          expanding your reach, and achieving your business objectives with confidence."
        </p>
        <Button styles={`mt-20`} onClick={openModal} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <ContactForm />
        <CloseButton onClick={closeModal} />
      </Modal>
    </section>
  );
};

export default Business;