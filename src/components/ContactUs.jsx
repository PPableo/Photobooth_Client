import React, { useState } from "react";
import Container from "./Container";

function ContactUs({ onContactUsSubmit }) {
  const [name, setName] = useState("");
  const [ContactUsText, setContactUsText] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!ContactUsText.trim()) {
      formErrors.ContactUsText = "Message text is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const ContactUs = {
        name: name.trim(),
        ContactUsText: ContactUsText.trim(),
      };
      
      if (typeof onContactUsSubmit === 'function') {
        try {
          onContactUsSubmit(ContactUs);
          setName("");
          setContactUsText("");
          setErrors({});
        } catch (error) {
          console.error("Error submitting Contact:", error);
          setErrors({ submit: "Failed to submit Contact. Please try again." });
        }
      } else {
        console.error("onContactUsSubmit is not a function");
        setErrors({ submit: "Unable to submit. Please try again later." });
      }
    }
  };

  return (
    <Container>
      <div className="flex mt-20  flex-col items-center justify-center py-8 space-y-6 border-y border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl text-gray-700 dark:text-gray-300 font-bold text-center mb-8">Contact Us</h1>
        <div className="w-full max-w-md space-y-4">
          <div>
            <input
              className={`w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.name ? 'border-red-500' : ''
              }`}
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <textarea
              className={`w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.ContactUsText ? 'border-red-500' : ''
              }`}
              id="ContactUs"
              placeholder="Write your Message here"
              rows="4"
              value={ContactUsText}
              onChange={(e) => setContactUsText(e.target.value)}
            />
            {errors.ContactUsText && <p className="text-red-500 text-sm mt-1">{errors.ContactUsText}</p>}
          </div>
        </div>
{/* 
                  href="https://www.instagram.com/photohaus.to/"
                  className="relative bg-white px-6 py-3 text-lg font-semibold items-center justify-center before:absolute before:inset-0 before:rounded-none before:bg-white before:transition before:duration-300 sm:w-max" */}

        <button
          className="relative bg-black px-6 py-3 text-lg font-semibold items-center justify-center before:absolute before:inset-0 before:rounded-none before:bg-secondary before:transition before:duration-300 sm:w-ma"
          onClick={handleSubmit}
        >
                  <span className="relative text-white font-semibold text-gray-600">
                    Submit
                  </span>
        </button>
        {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
      </div>
    </Container>
  );
}

export default ContactUs;