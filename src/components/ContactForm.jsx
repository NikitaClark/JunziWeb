import React, { useState } from 'react';
import { logo } from "../assets";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em', justifyContent: 'center' }}>
      <img src={logo} alt="hoobank" className="w-[250px] h-[64px]" />
      <p >
        Thanks for your interest. Enter your name and details so we can connect
        you with one of our team.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em', color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="email">Your work email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em', color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label>Select your service</label>
          <div>
            <input
              type="radio"
              id="customSoftwareDevelopment"
              name="service"
              value="Custom Software Development"
              checked={formData.service === 'Custom Software Development'}
              onChange={handleChange}
              required
            />
            <label htmlFor="customSoftwareDevelopment">Custom Software Development</label>
          </div>
          <div>
            <input
              type="radio"
              id="mobileAppDevelopment"
              name="service"
              value="Mobile App Development"
              checked={formData.service === 'Mobile App Development'}
              onChange={handleChange}
              required
            />
            <label htmlFor="mobileAppDevelopment">Mobile App Development</label>
          </div>
          <div>
            <input
              type="radio"
              id="UX/UIDesign"
              name="service"
              value="UX/UI Design"
              checked={formData.service === 'UX/UI Design'}
              onChange={handleChange}
              required
            />
            <label htmlFor="UX/UIDesign">UX/UI Design</label>
          </div>
          <div>
            <input
              type="radio"
              id="AIandDataScience"
              name="service"
              value="AI and Data Science"
              checked={formData.service === 'AI and Data Science'}
              onChange={handleChange}
              required
            />
            <label htmlFor="AIandDataScience">AI and Data Science</label>
          </div>
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="message">How can we help?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5em', color: 'black' }}
            required
          />
        </div>
        <Button styles={{ padding: '0.5em 1em' }} />
      </form>
    </div>
  );
};

export default ContactForm;