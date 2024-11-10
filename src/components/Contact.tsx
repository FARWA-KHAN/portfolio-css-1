import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";
import "../app/styles/contact.css";


const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">"Let's stay connected"</h2>

                <p className="contact-text" data-aos="zoom-in-up">
                "Feel free to reach out—give me a call, drop a message!"
                </p>
                <div className="contact-flex" data-aos="zoom-in-up">
                <MdMarkEmailRead size={30} />khanfarwa392@gmail.com
            </div>
            <div className="contact-flex" data-aos="zoom-in-up">
                <MdPhoneCallback size={30} />(+92) 323960772
            </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;