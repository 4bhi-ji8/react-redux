import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { decrement } from "../features/counterSlice";
export default function Contact() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="font-bold pt-20">
        <h1 className=" flex justify-center text-orange-500">Contact us</h1>
      </div>
      <div className="pt-10  flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <p className="pt-10 flex justify-center text-gray-400">
        View result on the About Page
      </p>
    </>
  );
}
