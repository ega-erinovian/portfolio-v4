import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container_padding">
            <h1>Have A Project in Mind ?</h1>
            <div className="contact_content">
                <div className="contact_socmed">
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Github</a>
                    <a href="#">Netlify</a>
                    <a href="#">GMail</a>
                </div>
                <div className="contact_form">
                    <div className="contact_name">
                        <input type="text" className="form_name" placeholder="Your Name" />
                        <input type="email" className="form_name" placeholder="Your Email"/>
                    </div>
                    <input type="text" className="form_subject" placeholder="Subject"/>
                    <textarea className="form_text" placeholder="Say What You Need to Say ..."/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact