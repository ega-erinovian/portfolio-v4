import React from 'react'
import Header from '../header/Header'
import { workDatas } from "../../work_data";
import WorkItem from '../../components/work-item/WorkItem'

import { FaArrowLeft } from 'react-icons/fa';
import './gallery.css';


const Gallery = () => {
  return (
    <>
      <a href='/' className='arrow-left-link'><FaArrowLeft className='arrow-left'/></a>
      <Header title='Project Gallery'/>
      <section className='work-gallery'>
        <div className='container_padding'>
          <div className='work-item-container'>
            <div className='work-item-grid'>
              {workDatas && workDatas.map((item) => <WorkItem img={item.img} title={item.title} desc={item.desc} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery