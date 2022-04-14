import React, { useState } from 'react';
import './contact.style.scss';
import emailjs from 'emailjs-com';

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
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
          if (result.text === 'OK') {
            setIsSubmitted(!isSubmitted);
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text) {
            setError(!error);
          }
        },
      );
    e.target.reset();
  };

  return (
    <div className='contact'>
      <p>
        Have a question? Think I might be a good fit? Just want to chat? Feel
        free to reach out below, I would love to hear from you!
      </p>
      <form onSubmit={sendEmail}>
        <div>
          <input
            type='text'
            name='name'
            placeholder='Name...'
            onClick={handleClick}
            required
          />
        </div>

        <div>
          <input
            type='email'
            name='email'
            placeholder='Email...'
            onClick={handleClick}
            required
          />
        </div>

        <div>
          <input
            type='text'
            name='subject'
            placeholder='Subject...'
            onClick={handleClick}
            required
          />
        </div>
        <div>
          <textarea name='message' onClick={handleClick} required />
        </div>

        <div>
          {/* <input type="submit" value="Send" /> */}
          <button type='submit'>
            {/* Send <i class='fa fa-angle-double-right'></i> */}
            {/* Send <i class='fa fa-arrow-circle-o-right'></i> */}
            Send <i class='fa fa-paper-plane'></i>
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className='success'>
          <p>Email sent! I'll get back to you shortly! 😊 </p>
        </div>
      )}
      {error && (
        <div className='error'>
          <p>
            {'There seems to have been a problem 😮 . Please try again later.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
