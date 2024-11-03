import React from 'react';

const Info = () => {
  return (
    <div className="max-w-7xl mx-auto p-20">
      <h1 className="text-3xl font-bold mb-7">IELTS Information</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">General Information</h2>
        <p className="text-gray-700">
          The International English Language Testing System (IELTS) is designed to assess the language ability of candidates who need to study or work where English is the language of communication. It measures listening, reading, writing, and speaking skills.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Test Formats</h2>
        <ul className="list-disc list-inside gap-4">
       Test Format:  
      <li>

        Listening:

        Duration: 30 minutes
        Includes four sections, each with 10 questions.
        </li>
<li>
        Reading:

        Duration: 60 minutes
        Contains three sections, with different texts and a total of 40 questions.
        </li>

        <li>Writing:

        Duration: 60 minutes
        Comprises two tasks: Task 1 (150 words) and Task 2 (250 words).
        </li>

       <li> Speaking:

        Duration: 11–14 minutes
        Consists of a face-to-face interview with an examiner, divided into three parts.
        </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Preparation Tips</h2>
        <p className="text-gray-700">
          - Familiarize yourself with the test format. 
          <br />
          - Practice your listening, reading, writing, and speaking skills regularly.
          <br />
          - Take practice tests under timed conditions.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
        <ul className="list-disc list-inside">
          <li><strong>What is the scoring system?</strong> IELTS scores range from 1 to 9.</li>
          <li><strong>How long is the IELTS test?</strong> The total test time is 2 hours and 45 minutes.</li>
          <li><strong>How often can I take the test?</strong> You can take the IELTS test as many times as you wish.</li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
