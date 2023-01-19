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
                <form className="contact_form" name="submit-to-google-sheet">
                    <div className="contact_name">
                        <input type="text" name='name' className="form_name" placeholder="Your Name" />
                        <input type="email" name='email' className="form_name" placeholder="Your Email"/>
                    </div>
                    <input type="text" name='subject' className="form_subject" placeholder="Subject"/>
                    <textarea className="form_text" name='message' placeholder="Say What You Need to Say ..."/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact