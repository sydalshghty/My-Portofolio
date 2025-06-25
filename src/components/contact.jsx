import contactBackground from "../assets/Contact.png";
import scrollImg from "../assets/Scroll.svg";
import contactTitle from "../assets/Contact-Title.svg";
import contactLine from "../assets/Contact-Line 22.svg";
import { Link,NavLink } from "react-router-dom";
import sendIcon from "../assets/icon-send.svg";
import "../css/contact.css";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactDepartament(){
    const formRef = useRef();

    const [name, setName] = useState("Enter your name");
    const [email, setEmail] = useState("Enter your email");
    const [message, setMessage] = useState("Enter your needs");

    const sendEmail = (e) => 
        e.preventDefault();
        emailjs.sendForm(
            "service_12Saeed",
            "template_ID",
            formRef.current,
            "6Qr0bv84xnQ6VMGSL",
        )
        .then((result) => 
            console.log("The message has been sent successfully"))
        , (error) => {
            alert("There was an error while sending the message")
        }
    {
    }

    return(
        <div className="contact-departament">
            <img className="contact-background" src={contactBackground} alt="contact-background"/>
            <div className="container">
                <div className="title-contact">
                    <img className="scroll-img" src={scrollImg} alt="img-scroll"/>
                    <div className="col-content">
                        <img src={contactTitle} alt="img-contact"/>
                        <img src={contactLine} alt="img-line"/>
                        <p>I’m currently available for freelance work</p>
                    </div>
                </div>
                <div className="col-sendMessage">
                    <h1>Send me a message</h1>
                </div>
                <div className="form-content">
                    <form ref={formRef}>
                        <div className="name-email-cols">
                            <div className="col-name">
                                <div className="heading-name">
                                    <p>Your name</p>
                                    <span>*</span>
                                </div>
                                <input onFocus={() => {
                                    setName("");
                                }} 
                                onBlur={() => {
                                    setName("Enter your name");
                                }}
                                type="text" name="name" placeholder={name} required/>
                            </div>
                            <div className="col-email">
                                <div className="heading-email">
                                    <p>Your email</p>
                                    <span>*</span>
                                </div>
                                <input onFocus={() => {
                                    setEmail("");
                                }} 
                                onBlur={() => {
                                    setEmail("Enter your email");
                                }}
                                type="text" name="email" placeholder={email} required/>
                            </div>
                        </div>
                        <div className="message-col">
                            <div className="heading-message">
                                <p>Your message</p>
                                <span>*</span>
                            </div>
                            <input onFocus={() => {
                                setMessage("");
                            }} 
                            onBlur={() => {
                                setMessage("Enter your needs");
                            }}
                            type="text" name="message" placeholder={message} required/>
                        </div>
                        <div className="btn-col" onSubmit={sendEmail}>
                            <Link className="link-message" to={""}>Send Message</Link>
                            <img src={sendIcon} alt="message-img"/>
                        </div>
                    </form>
                </div>
                <div className="footer-content">
                    <div className="all-S-P">
                        <div className="right-service">
                            <p>© 2025 SaeedMohamed.All rights reserved.</p>
                        </div>
                        <div className="privacy-condtions">
                            <Link className="link" to={""}>Privacy Policy</Link>
                            <Link className="link" to={""}>Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className="social-Media">
                        <div className="col-social">
                            <NavLink target="_blank"  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>
                                <FontAwesomeIcon  className="icon" icon={faLinkedin}/>
                            </NavLink>
                        </div>
                        <div className="col-social">
                            <NavLink target="_blank" to={"https://wa.me/201271382350"}>
                                <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                            </NavLink>
                        </div>
                        <div className="col-social">
                            <NavLink target="_blank" to={"https://github.com/sydalshghty"}>
                                <FontAwesomeIcon className="icon" icon={faGithub}/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-design">
                        <p>Design By</p>
                        <span>saeedmohamed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactDepartament;