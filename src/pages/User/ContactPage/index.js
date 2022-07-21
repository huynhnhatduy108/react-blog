import React from 'react';
import Footer from '../../../components/Footer';
import "./style.css";
import ImgContact from './../../../assets/img/undrawcontact.svg';

function ContactPage() {
window.scrollTo(0, 0);

  return (
    <div className='contact__page'>
        <div className='contact__page-container grid wide'>
            <div className='contact__page-row row no-gutters'>
                <div className='contact__page-left col l-6 m-6 c-12'>
                    <div className='contact__left-title'>
                        <h1 className=''>Let's talk about everything!</h1>
                    </div>
                    <div className='contact__left-question'>
                        <p>Please don’t contact us for theme support-related questions as they will be ignored. Use our Support Forum. </p>
                    </div>
                    <div className='contact__left-img'>
                        <img src={ImgContact}/>
                    </div>
                </div>
                <div className='contact__page-right col l-6 m-6 c-12'>
                    <div>
                        <div className='contact__input'>
                            <input placeholder='Your name'/>
                        </div>
                        <div className='contact__input'>
                            <input placeholder='Email'/>
                        </div>
                        <div className='contact__input'>
                            <input placeholder='Subject'/>
                        </div>
                        <div className='contact__input-mess'>
                            <textarea placeholder='Write your message'></textarea>
                        </div>
                        <div className='contact__button'>
                            <button className=''>SEND MESSGAE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage