import React from 'react'
import ExpItem from '../../components/expItem/ExpItem'
import './experience.css'

const Experience = () => {
    const expItem = [
        {
            title: "Lab Assistant",
            location: "UPN Veteran Yogyakarta",
            date: "March 2021 - Present"
        },
        {
            title: "Full Stack Web Developer",
            location: "Rumahweb Indonesia",
            date: "March 2022 - May 2022"
        }
    ]
  return (
    <section id="exp">
        <div className="container_padding">
          <div className="exp_content">
            <h1>Experience</h1>
            <div className="exp-item_container">
                <ExpItem title={expItem[0].title} location={"At " + expItem[0].location} date={expItem[0].date} />
                <ExpItem title={expItem[1].title} location={"At " + expItem[1].location} date={expItem[1].date} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience