import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'


export default function Home() {

  const dispatch = useDispatch();
  return (
    <>
    <Navbar />
    <div className=' pt-20 flex justify-center text-orange-500'>

    <h1 className='font-bold'>Hello World</h1>
    </div>
     <div className="pt-10  flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> dispatch(increment())}>
            Increment
          </button>
        </div>
        <p className="pt-10 flex justify-center text-gray-400">View result on the About Page</p>
    </>
  )
}
