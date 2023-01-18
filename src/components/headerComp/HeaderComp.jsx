import React from 'react'
import { Header } from "../../containers";
import { FaArrowLeft } from 'react-icons/fa';

const HeaderComp = ({title, link, color}) => {
  return (
    <>
        <a href={link} className='arrow-left-link'><FaArrowLeft className='arrow-left'/></a>
        <Header title={title} color={color}/>
    </>
  )
}

export default HeaderComp