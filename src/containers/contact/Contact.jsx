import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container_padding">
            <h1>Have A Project in Mind ?</h1>
            <div className="contact_content">
                <div className="contact_socmed">
                    <a href="https://www.instagram.com/egaerinovian/" target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/in/ega-erinovian/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/ega-erinovian" target="_blank">Github</a>
                    <a href="https://app.netlify.com/teams/egaputra69/overview" target="_blank">Netlify</a>
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