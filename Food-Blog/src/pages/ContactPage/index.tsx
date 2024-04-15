import React from 'react';
import './Contactus.css'; // Import your CSS file here

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbxjQv1_gWjNgxoGiE2PpBmQz-QxVlktAUkFWZAFm7TsY4ilNspPXWPBBojzWHVR9AeF/exec', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully');
          window.location.reload();
          // window.location.href="https://google.com";
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((error) => {
        alert('Something went wrong');
        console.error(error);
      });
  };

  return (
    <div className="container" >
      <div style={{ textAlign: 'center' }}>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8  font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback ? Need details about Your Dishes Add This Blog ? Let us know.</p>
      </div>
      <div className="row">
        <div className="column">
          <form id="submit-form" onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="name" placeholder="Your name.." />
            <label htmlFor="lname">Email</label>
            <input type="text" id="lname" name="email" placeholder="Your Email..." />
            <label htmlFor="country">Country</label>
            <select id="country" name="color">
              <option value="India">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="Australia">Australia</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="message" placeholder="Write something.." style={{ height: '170px' }}></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="column">
        <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src='/description/chili.jpg' alt="Chili" />
                        <img className="w-full rounded-lg" src='description/chicken.jpg' alt="office content 1" />
                    </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
