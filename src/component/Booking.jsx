import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Booking from './Assets/Booking.json';

const ExamBookingSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const availableDates = [
    new Date('2024-11-10'),
    new Date('2024-11-15'),
    new Date('2024-11-18'),
    new Date('2024-11-20'),
    new Date('2024-11-24'),
    new Date('2024-11-26'),
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isDateAvailable = (date) =>
    availableDates.some(d => format(d, 'dd-MM-yyyy') === format(date, 'dd-MM-yyyy'));
  return (
    <div className="flex flex-col items-center p-8 m-28 bg-gray-100 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <div className="flex w-full">
        <div className="w-1/3 flex items-center justify-center">
          <Lottie
            animationData={Booking}
            loop
            autoplay
            className="w-3/4 h-auto transform hover:scale-105 transition duration-500"/>
        </div>
        <div className="w-2/3 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Booking Slot - Test</h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
            placeholderText="Select a date"
            filterDate={isDateAvailable}
            dayClassName={(date) =>
              isDateAvailable(date)
                ? 'bg-green-600 hover:bg-green-800 text-white rounded'
                : 'bg-red-500 text-white rounded cursor-not-allowed' }/>
          {selectedDate && isDateAvailable(selectedDate) && (
            <p className="text-green-600 font-medium mb-2">Available</p>
          )}
          <Link
            to={selectedDate ? "/book/onspot/beginner" : "#"}
            className={`mt-6 py-2 px-4 font-semibold rounded w-full text-center transition duration-150 ${
              selectedDate
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={(e) => {
              if (!selectedDate) e.preventDefault();
            }}>
            {selectedDate ? 'Book Now' : 'Unavailable'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamBookingSlot;
