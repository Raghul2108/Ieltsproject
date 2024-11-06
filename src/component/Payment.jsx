import React, { useState, useEffect } from 'react';

function Payment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };
  useEffect(() => {
    if (paymentSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [paymentSuccess]);
  

return (
    <div className="bg-gray-50 min-h-screen p-24 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10 w-full max-w-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
        <form onSubmit={handlePayment}>
          <label className="block mb-2 text-gray-700">
            <input type="radio" name="payment" value="card" className="mr-2" defaultChecked />
            Debit or Credit Card
          </label>
          <label className="block mb-4 text-gray-700">
            <input type="radio" name="payment" value="paypal" className="mr-2" />
            PayPal
          </label>
          <div className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" required />
            <div className="flex space-x-4">
              <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" required />
              <input type="text" placeholder="CVC" className="w-1/2 p-2 border rounded" required />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Submit Order
          </button>
        </form>
      </div>
      {paymentSuccess && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 4v6m-6-6H7" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful</h2>
          <p className="text-gray-600 mb-4">Your payment of <strong>$20.00</strong> was successfully completed.</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">View Receipt</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Button Label</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
