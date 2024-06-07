import React from 'react';
import './CloseButton.css'; // Импорт стилей для кнопки

const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="closeButton py-4 px-6 font-poppins font-medium text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none">
      Close
    </button>
  );
};

export default CloseButton;