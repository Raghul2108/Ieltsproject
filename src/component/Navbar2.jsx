import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-indigo-900 text-gray-50 p-5 fixed top-0 w-full z-20 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
  <div className="flex flex-col items-start">
  <h1 className="text-2xl font-bold px-11">IELTS - Leetscholar</h1>
  <p className="text-sm font-light py px-11">Preparation For Life</p>
  </div>
  <div className="flex space-x-8">
        <div className="relative group">
          <Link to="/IELTS-Course" className="text-gray-100 hover:text-blue-300 font-medium flex items-center">
            IELTS Course
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <div className="sticky hidden group-hover:block text-gray-100 bg-slate-800 rounded-md shadow-lg mt-2 w-48 z-10">
            <Link to="/Course Beginner" className="block px-4 py-2 hover:bg-indigo-700">Beginner</Link>
            <Link to="/Course Intermediate" className="block px-4 py-2 hover:bg-indigo-700">Intermediate</Link>
            <Link to="/Course Expert" className="block px-4 py-2 hover:bg-indigo-700">Expert</Link>
          </div>
        </div>
        <div className="relative group">
          <Link to="/IELTS-Test" className="text-gray-100 hover:text-blue-300 font-medium flex items-center">
            IELTS Test
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <div className="sticky hidden group-hover:block bg-gray-800 text-gray-100 rounded-md shadow-lg mt-2 w-48 z-10">
            <Link to="/Practise test" className="block px-4 py-2 hover:bg-indigo-700">Practice Tests</Link>
            <Link to="/Assessment test" className="block px-4 py-2 hover:bg-indigo-700">Assessment Test</Link>
          </div>
        </div>
      </div>
<div className="flex flex-col md:flex-row space-x-8">
  <div className="relative group">
    <Link
      to="/IELTS-Course"
      className="text-gray-100 hover:text-blue-300 font-medium flex items-center py-2">
      IELTS Course
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </Link>
    <div className="absolute hidden group-hover:block bg-slate-800 text-gray-100 rounded-md shadow-lg mt-2 w-48 z-10 transition-opacity duration-200 ease-in-out">
      <Link to="/Course Beginner" className="block px-4 py-2 hover:bg-indigo-700 transition duration-150 ease-in-out">
        Beginner
      </Link>
      <Link to="/Course Intermediate" className="block px-4 py-2 hover:bg-indigo-700 transition duration-150 ease-in-out">
        Intermediate
      </Link>
      <Link to="/Course Expert" className="block px-4 py-2 hover:bg-indigo-700 transition duration-150 ease-in-out">
        Expert
      </Link>
    </div>
  </div>

  <div className="relative group">
    <Link
      to="/IELTS-Test"
      className="text-gray-100 hover:text-blue-300 font-medium flex items-center py-2">
      IELTS Test
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </Link>
    <div className=" hidden group-hover:block bg-gray-800 text-gray-100 rounded-md shadow-lg mt-2 w-48 z-10 transition-opacity duration-200 ease-in-out">
      <Link to="/Practise test" className="block px-4 py-2 hover:bg-indigo-700 transition duration-150 ease-in-out">
        Practice Tests
      </Link>
      <Link to="/Assessment test" className="block px-4 py-2 hover:bg-indigo-700 transition duration-150 ease-in-out">
        Assessment Test
      </Link>
    </div>
  </div>
</div>
<div className="ml-auto flex space-x-7 text-gray-100 font-semibold">
        <Link to="/Information" className="hover:text-blue-100 hover:underline">Information</Link>
        <Link to="/Contact Us" className="hover:text-blue-100 hover:underline">Contact Us</Link>
        <Link to="/Login/SignUp" className="flex justify-center">
      <img src={require('./Assets/user (2).png')} alt="User Img" className="w-7 h-7 cursor-pointer"/>
</Link>
    </div>
    </div>
  </nav>
);

export default Navbar;