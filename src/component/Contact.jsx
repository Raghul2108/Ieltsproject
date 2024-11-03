import React from 'react';
import Lottie from 'lottie-react';
import Contact from './Assets/Contact.json';

const ContactUs = () => {
    return (

        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex items-center justify-center">
                <div className="w-1/2 max-w-xl p-7 m-7">
                    <Lottie
                        animationData={Contact}
                        loop={true}
                        autoplay={true}
                        className="w-full h-auto transform transition-transform duration-500"/>
                </div>
                <div className="w-full max-w-xl  hover:shadow-xl  mx-auto p-10 bg-gray-300 border-slate-300 border rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
                    <form className="w-full">
                        <label className="block mb-2 text-gray-800 font-semibold">
                            Name:
                            <input
                                type="text"
                                required
                                className="block w-full bg-gray-200 border border-gray-400 rounded p-2"/>
                        </label>
                        <label className="block mb-2 text-gray-800 font-semibold">
                            Email:
                            <input
                                type="email"
                                required
                                className="block w-full bg-gray-200 border border-gray-400 rounded p-2"/>
                        </label>
                        <label className="block mb-2 text-gray-800 font-semibold">
                            Message:
                            <textarea
                                required
                                rows="4"
                                className="block w-full bg-slate-200 border rounded p-2 border-slate-400"></textarea>
                        </label>
                        <button
                            type="submit"
                            className="w-full py-4 bg-slate-800 text-white rounded hover:bg-slate-950 hover:underline">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-slate-800 p-5 flex flex-col">
                <p className="mt-auto text-center">The Contact Us page provides direct access to our support team for any inquiries or assistance related to IELTS preparation. Reach out via our form, email, or phone, and we’ll get back to you promptly to ensure you have the support needed on your IELTS journey.</p>
            </div>
</div>
    );
};

export default ContactUs;



