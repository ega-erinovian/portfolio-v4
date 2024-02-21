import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&to=egaputra71@gmail.com&su=${subject}&body=Hi Ega! I am ${name} (continue your message...)&tf=cm`;
    window.open(gmailLink, "_blank");
  };

  return (
    <section id="contact">
      <div className="container_padding">
        <h1>Have A Project in Mind ?</h1>
        <div className="contact_content">
          <div className="contact_socmed">
            <a
              href="https://www.instagram.com/egaerinovian/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ega-erinovian/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ega-erinovian"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://app.netlify.com/teams/egaputra69/overview"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </div>
          <form className="contact_form" name="submit-to-google-sheet">
            <input
              type="text"
              name="name"
              className="form_name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              className="form_subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <button onClick={sendEmail} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
