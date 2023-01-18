import React from 'react'
import { workDatas } from "../../work_data";
import { WorkItem } from "../../components";

import './gallery.css';
import HeaderComp from '../../components/headerComp/HeaderComp';


const Gallery = () => {
  return (
    <>
      <HeaderComp title={'Project Gallery'} link={"/"} />
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