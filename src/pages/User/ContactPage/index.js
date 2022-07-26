import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import "./style.css";
import ImgContact from './../../../assets/img/undrawcontact.svg';
import { validateEmail } from '../../../utils/helper';
import axios from 'axios';
import { notificationCustom } from '../../../components/Notification';

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [mess, setMess] = useState("");
    const [validate, setValidate] = useState(false);

    const handleSumit = async () =>{
        if (!name || !email || !mess || !validateEmail(email)){
            setValidate(true);
        }else{
            setValidate(false);
            const [date, time] = new Date().toLocaleString().split(",");
            const data ={
                name:name,
                email: email, 
                subject:subject,
                message:mess,
                date: date, 
                time: time
            }
            await axios.post("https://sheet.best/api/sheets/75dc1251-3452-47a6-82f4-02e31a34b613",data)
                .then((response) => {
                    notificationCustom('Send contact successfull. Thank you!', true)
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMess("")
                })
                .catch((err) =>{
                    console.log("err", err);
                    notificationCustom('Systems error. Sorry and try again later!', false)

                });
        }
    }

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
                                <input placeholder='Your name' value={name} onChange={(event)=>setName(event.target.value)}/>
                                {(validate&&!name)?<div className='validate_contact'>Please input your name!</div>:""}
                            </div>
                            <div className='contact__input'>
                                <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                                {(validate&&!email)?<div className='validate_contact'>Please input your email!</div>
                                :(validate&&!validateEmail(email))?<div className='validate_contact'>Email wrong format!</div>
                                :""}
                            </div>
                            <div className='contact__input'>
                                <input placeholder='Subject' value={subject} onChange={(event)=>setSubject(event.target.value)}/>
                            </div>
                            <div className='contact__input-mess'>
                                <textarea placeholder='Write your message' value={mess} onChange={(event)=>setMess(event.target.value)}>{mess}</textarea>
                                {(validate&&!mess)?<div className='validate_contact'>Please input message!</div>:""}
                            </div>
                            <div className='contact__button'>
                                <button className='' onClick={handleSumit}>SEND MESSAGE</button>
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