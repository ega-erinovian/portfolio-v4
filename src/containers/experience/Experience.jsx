import React from 'react'
import ExpItem from '../../components/expItem/ExpItem'
import './experience.css'

const Experience = () => {
    const expItem = [
        {
            id: 1,
            title: "Lab Assistant",
            location: "UPN Veteran Yogyakarta",
            date: "March 2021 - Present"
          },
          {
            id: 2,
            title: "Full Stack Web Developer",
            location: "Rumahweb Indonesia",
            date: "March 2022 - May 2022"
          },
          {
            id: 3,
            title: "Chief Information Officer (CIO)",
            location: "Sirius Creative",
            date: "December 2022 - Now"
        }
    ]
  return (
    <section id="exp">
        <div className="container_padding">
          <div className="exp_content">
            <h1>Experience</h1>
            <div className="exp-item_container">
              {expItem && expItem.map((item) => <ExpItem key={item.id} title={item.title} location={"At " + item.location} date={item.date} />)}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience