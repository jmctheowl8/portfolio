import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'


const Contact = () => {
    const refForm = useRef()

    emailjs.init({
      publicKey: 'M3SC0U0lmsxT1_8Ma',
    });
    
    const sendEmail = (e) => {
      e.preventDefault();
      console.log('Form Data:', refForm.current);

      emailjs
        .sendForm( 'service_mjz2n3v','template_dbvtjde', refForm.current)
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully');
            window.location.reload(false);
          },
          (error) => {
            console.log('Error:', error);
            alert('Error');
          }
        );
    };
    
    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                Contact
              </h1>
              <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
              </p>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </>
      )
}

export default Contact;