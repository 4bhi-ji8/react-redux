import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

export default function About() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
    <Navbar />
    <h1 className='pt-20 flex justify-center font-bold text-orange-500'>About us</h1>
    <h2 className='pt-10 flex justify-center text-gray-400'>count : {count}</h2>  
    <p className='pt-12 flex justify-center text-gray-400'>This is the simplest functional Redux setup.</p>  
    </>
  )
}

