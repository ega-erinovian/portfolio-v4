import React from 'react'
import './work.css';
import WorkItem from '../../components/work-item/WorkItem'

import Allison from '../../assets/work/Allison_web.webp'
import EComm from '../../assets/work/e-commerce_web.webp'
import Mario from '../../assets/work/mario_web.webp'
import Proyek from '../../assets/work/proyek-manager_web.webp'
import Reliance from '../../assets/work/reliance_wallet_app.webp'

const Work = () => {
  return (
    <section id='work'>
      <div className='container_padding'>
        <h1>Work</h1>
        <div className='work-item-container'>
          <WorkItem img={Mario} />
          <div className='work-item-grid'>
            <WorkItem img={EComm} />
            <WorkItem img={Allison} />
            <WorkItem img={Proyek} />
            <WorkItem img={Reliance} />
          </div>
        </div>
        <button>See More Work</button>
      </div>
    </section>
  )
}

export default Work