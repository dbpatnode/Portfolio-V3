import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contact.style.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    setIsSubmitted(false);
    setError(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          //   console.log(result.text);
          console.log("result.text: ", result.text);
          if (result.text === "OK") {
            setIsSubmitted(!isSubmitted);
          }
        },
        (error) => {
          //   console.log(error.text);
          console.log("error.text: ", error.text);
          if (error.text) {
            setError(!error);
          }
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onClick={handleClick} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onClick={handleClick} required />
        </div>

        <div>
          <label>Subject</label>
          <input type="text" name="subject" onClick={handleClick} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" onClick={handleClick} required />
        </div>

        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
      {console.log(isSubmitted)}
      {isSubmitted && (
        <div>
          <p>Email sent! I'll get back to you shortly </p>
        </div>
      )}
      {error && (
        <div>
          <p>There seems to have been a problem. Please try again later. </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
