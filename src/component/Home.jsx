import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import Practise from './Assets/Practise.json';
import Ratings from './Assets/Ratings.json';
import Practise1 from './Assets/Practise1.gif';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);}, []);
    return (
    <div className="flex-grow flex flex-col min-h-screen mt-4 mb-16 pb-16 bg-gray-100">
      <img src={require('./Assets/Ielts_bg.jpg')} alt="IELTS background" className="w-full h-2/5 object-cover border-b-2 border-gray-300 shadow-md" />
      <div className="my-16 flex justify-center">
        <h1 className="font-bold text-2xl text-white mb-2 w-72 text-center h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-md flex items-center justify-center shadow-lg">
          Student Reviews
        </h1>
      </div>
      <div className="flex justify-center px-6">
        <div className="grid grid-cols-1 border-slate-900 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {[
            { name: 'John', rating: 5, review: "I enrolled in the IELTS online coaching program to improve my English skills for the exam, and I’m really happy with my progress. The materials provided were comprehensive and covered all sections of the test effectively." },
            { name: 'Jane', rating: 4.5, review: "The IELTS coaching sessions were so helpful. The structured approach made it easy to focus on my weak areas, and the instructors’ feedback was spot on. I feel much more confident going into my test!" },
            { name: 'Alex', rating: 4, review: "Great experience with the IELTS program. The study materials were very detailed, and the mock tests helped me a lot. Highly recommended for anyone looking to improve their English." }
          ].map((student, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h2>
              <p className="text-gray-700 mb-4">{student.review}</p>
              <hr className="mb-4 border-gray-300" />
              <div className="flex items-center">
                <span className="text-yellow-500 font-semibold">Rating:</span>
                <span className="ml-1 text-gray-500">{student.rating}</span>
                <Lottie animationData={Ratings} loop autoplay className="w-1/2 h-auto ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 flex justify-center">
        <h1 className="text-2xl font-bold text-white mb-2 w-60 text-center h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-md flex items-center justify-center shadow-lg">
          IELTS - Test Types
        </h1>
      </div>
      <div className="flex bg-gradient-to-r from-indigo-500 hover:bg-green-800 to-blue-500 border border-slate-400 rounded-lg shadow-lg max-w-6xl mx-auto mt-8 overflow-hidden">
        <div className="w-1/2 p-4 flex justify-center items-center">
          <Lottie animationData={Practise} loop autoplay className="w-3/4 h-auto transform hover:scale-105 transition duration-500" />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center text-gray-200">
          <h2 className="text-2xl font-bold text-white mb-2">Test Type</h2>
          <p className="mb-4">
            The IELTS test assesses Listening, Reading, Writing, and Speaking skills. We offer specialized test types tailored to your needs.
          </p>
          <a href="/Find Out More">
            <button className="flex items-center justify-center hover:underline bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black transition duration-200 transform hover:scale-105">
              Find Out More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="flex bg-gradient-to-r from-indigo-500 to-blue-500 border-slate-400 rounded-lg shadow-lg max-w-6xl mx-auto mt-8 overflow-hidden">
        <div className="w-1/2 p-4 flex justify-center items-center transform transition-transform duration-500 hover:scale-110">
          <img src={Practise1} alt="Get Started" />
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Started</h2>
          <p className="text-gray-200 mb-4">
            Sign up now and certify your English proficiency today. Test online anytime, anywhere. Finish in 1 hour and get results in 2 days. Share your results with 5500+ institutions.
          </p>
          <div className="flex gap-5">
            <a href="/practice-test">
              <button className="bg-slate-800 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black hover:underline transition duration-200">
                Practice Test
              </button>
            </a>
            <a href="/Assessment test">
              <button className="bg-slate-800 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black hover:underline transition duration-200">
                Assessment Test
              </button>
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-600 p-6 m-20">
        Welcome to our IELTS - Leetscholar preparation platform, where your journey to success begins! We offer comprehensive resources, including practice tests, expert tips, and personalized study plans to help you excel in your IELTS exam. Explore our engaging materials designed for all skill levels and take advantage of our interactive forums to connect with fellow learners. Achieve your desired band score and open the doors to global opportunities. Start your preparation today!
      </p>
    </div>
  );
};

export default Home;


















