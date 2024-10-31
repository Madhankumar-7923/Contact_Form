import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import './contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_amrlkrt',
                'template_ay9yaya',
                form.current,
                {
                    publicKey: 'joniYzbQOifxLS21b',
                }
            )
            .then(
                (result) => {
                    console.log(result.text);

                    Swal.fire({
                        title: "Success!",
                        text: "Message Sent Successfully",
                        icon: "success"
                    });

                    // Reset the form after success
                    form.current.reset();
                },

                (error) => {
                    console.log('FAILED...', error.text);

                    Swal.fire({
                        title: "Failed!",
                        text: "Message Failed to sent",
                        icon: "error"
                    });
                },
            );
    };

    return (
        <section className='contact'>

            <form ref={form} onSubmit={sendEmail}>

                <h2>Contact Form</h2>

                <div className='input-box'>
                    <label htmlFor='user_name'>Full Name</label>
                    <input type='text' name='user_name' id='user_name' className='field' placeholder='Enter Your Name' required />
                </div>

                <div className='input-box'>
                    <label htmlFor='user_email'>Email Address</label>
                    <input type='email' name='user_email' id='user_email' className='field' placeholder='Enter Your email' required />
                </div>

                <div className='input-box'>
                    <label htmlFor='message'>Your Message</label>
                    <textarea name='message' id='message' className='field fieldMsg' placeholder='Enter your message' required></textarea>
                </div>

                <div className="button-box">
                    <button id='rstBtn' type='reset'>Cancel</button>
                    <button id='smtBtn' type='submit'>Send</button>
                </div>

            </form>

        </section>
    )
}

export default Contact