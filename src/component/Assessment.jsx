import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Inter from './Assets/Inter.json';
import Beg from './Assets/Beg.json';
import Export from './Assets/Export.json';

function Assessment() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="flex flex-col items-center p-20">
      <h3 className="bg-indigo-600 text-white text-2xl font-bold shadow-lg rounded-lg p-4 border hover:shadow-xl transition duration-300">Course - Platform</h3>
      <h4 className='m-10 text-black'>Improve specific skills by practicing each question type.</h4>
      <p className='text-center flex text-slate-800 '>Here, you will be having all kind of test modules like reading, writing, listening speaking for the practice as a separate set of test types. Get useful out of it and crack the assessment and book a slot.</p>
      <div className="flex flex-col md:flex-row m-16 justify-center items-stretch gap-14">
        <div className="bg-white cursor-pointer shadow-lg rounded-lg p-8 w-64 text-center border border-gray-400 transition-transform transform hover:scale-110 hover:shadow-xl duration-300 flex flex-col justify-between">
          <Lottie animationData={Beg} loop={true} className="h-24 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Beginner</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">₹10,000</p>
          <div className="mt-5 gap-2 flex justify-between">
            <Link to="/book/slot/beginner" className="inline-block bg-indigo-600 text-white font-semibold   hover:bg-indigo-800 transition duration-300 py-2 px-3 rounded-sm shadow">
              Book Slot
            </Link>
            <Link to="/book/onspot/beginner" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-1 rounded-sm shadow hover:bg-indigo-800 transition duration-300">
              Book Onspot
            </Link>
          </div>
        </div>
        <div className="bg-white cursor-pointer shadow-lg rounded-lg p-8 w-64 text-center border border-gray-400 transition-transform transform hover:scale-110 hover:shadow-xl duration-300 flex flex-col justify-between">
          <Lottie animationData={Inter} loop={true} className="h-24 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Intermediate</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">₹20,000</p>
          <div className="mt-5 flex gap-2 justify-between">
            <Link to="/book/slot/intermediate" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-3 rounded-sm shadow hover:bg-indigo-800 transition duration-300">
              Book Slot
            </Link>
            <Link to="/book/onspot/intermediate" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-1 rounded-sm shadow hover:bg-indigo-800 transition duration-300">
              Book Onspot
            </Link>
          </div>
        </div>
        <div className="bg-white cursor-pointer shadow-lg rounded-lg p-8 w-64 text-center border border-gray-400 transition-transform transform hover:scale-110 hover:shadow-xl duration-300 flex flex-col justify-between">
          <Lottie animationData={Export} loop={true} className="h-24 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Expert</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">₹30,000</p>
          <div className="mt-5 gap-2 flex justify-between"> <hr/>
          <Link to="/book/slot/expert" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-3 rounded-sm shadow hover:bg-indigo-800 transition duration-300">
              Book Slot
            </Link>
            <Link to="/book/onspot/expert" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-1 rounded-sm shadow hover:bg-indigo-800 transition duration-300">
              Book Onspot
            </Link>
          </div>
        </div>
      </div>
      <p className='text-center text-slate-800 m-6 mt-28'>
      The IELTS evaluates English proficiency across four skills: reading, writing, listening, and speaking. The reading section tests comprehension of various texts, while writing involves describing visual information and expressing opinions in essays. Listening assesses understanding through audio recordings, and speaking is a face-to-face interview to demonstrate fluency and conversational skills. Each component is essential for determining your readiness for an English-speaking environment.  
      </p>
    </div>
  );
}

export default Assessment;
