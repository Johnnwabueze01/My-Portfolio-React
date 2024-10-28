import React, { useRef } from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'

import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vidp0eo', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <serction id="contactpage">
        <div id="contact">
            <h1 className="contactpagetitle">Contact Me</h1>
            <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className='email' placeholder='Your Email'/>
                <textarea className='msg' name="message" rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitbtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className="link" />
                    <img src={TwitterIcon} alt="" className="link" />
                    <img src={YoutubeIcon} alt="" className="link" />
                    <img src={InstagramIcon} alt="" className="link" />

                </div>
            </form>
        </div>
    </serction>
  )
}

export default Contact