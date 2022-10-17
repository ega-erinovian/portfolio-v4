import React from 'react'
import './work.css';
import WorkItem from '../../components/work-item/WorkItem'

import GoldsGym from '../../assets/work/golds_gym.webp'
import GPT3 from '../../assets/work/GPT-3.webp'
import SNKRZ from '../../assets/work/SNKRZ.webp'
import Valoagent from '../../assets/work/Valoagent.webp'
import Bookmark from '../../assets/work/Bookmark.webp'

const Work = () => {
  const workDetails = [
    {
      img: GoldsGym,
      title: "Golds Gym",
      desc: "Lorem Ipsum Dolor sir amet"
    },
    {
      img: GPT3,
      title: "GPT-3 Official Website",
      desc: "Lorem Ipsum Dolor sir amet"
    },
    {
      img: SNKRZ,
      title: "Sneakerzee",
      desc: "Lorem Ipsum Dolor sir amet"
    },
    {
      img: Valoagent,
      title: "Valorant Agent Web",
      desc: "Lorem Ipsum Dolor sir amet"
    },
    {
      img: Bookmark,
      title: "Bookmark - One Click Bookmark!",
      desc: "Lorem Ipsum Dolor sir amet"
    },
  ]

  return (
    <section id='work'>
      <div className='container_padding'>
        <h1>Work</h1>
        <div className='work-item-container'>
          <WorkItem img={workDetails[0].img} title={workDetails[0].title} desc={workDetails[0].desc} />
          <div className='work-item-grid'>
          <WorkItem img={workDetails[1].img} title={workDetails[1].title} desc={workDetails[1].desc} />
          <WorkItem img={workDetails[2].img} title={workDetails[2].title} desc={workDetails[2].desc} />
          <WorkItem img={workDetails[3].img} title={workDetails[3].title} desc={workDetails[3].desc} />
          <WorkItem img={workDetails[4].img} title={workDetails[4].title} desc={workDetails[4].desc} />
          </div>
        </div>
        <button>See More Work</button>
      </div>
    </section>
  )
}

export default Work