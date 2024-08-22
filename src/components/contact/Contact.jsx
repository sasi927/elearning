import React from "react";
import { useState } from "react";
import "./contact.css";
import message_icon from "../../../public/assets/msg-icon.png";
import mail_icon from '../../../public/assets/mail-icon.png'
import phn_icon from '../../../public/assets/phone-icon.png'
import location_icon from '../../../public/assets/location-icon.png'
import white_arrow from '../../../public/assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={message_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>

          <ul>
            <li><img src={mail_icon} alt="" />Contact@Edusity.co</li>
            <li><img src={phn_icon}alt="" />+91-033-2777-9999</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
          </ul>
        </div>
        <div className="contact-col">
            <form  onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>

                <label >Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required/>

                <label >Your Email</label>
                <input type="email" name="name" placeholder="Enter your email id" required/>

                <label >Write your messages here</label>
                <textarea name="" id="" cols="" rows="6" placeholder="Enter your message"></textarea>
                <button type="submit" className="btn darkbtn">Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
