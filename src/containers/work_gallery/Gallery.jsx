import React from 'react'
import Fade from 'react-reveal/Fade';

import { workDatas } from "../../work_data";

import './gallery.css';

import { HeaderComp, WorkItem } from "../../components";
import { Footer } from "../../containers";


const Gallery = () => {
  return (
    <>
      <HeaderComp title={'Project Gallery'} link={"/"} />
      <section className='work-gallery'>
        <div className='container_padding'>
          <div className='work-item-container'>
            <div className='work-item-grid'>
              <Fade bottom>
                {workDatas && workDatas.map((item) => <WorkItem img={item.img} title={item.title} desc={item.desc} />)}
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gallery