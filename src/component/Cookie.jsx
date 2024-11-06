import React, { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);                                                                                            }, []);

  return (
    <div className="p-24 text-gray-800">
      <h1 className="text-3xl font-semibold mb-4">IELTS Website Cookie Policy</h1>
      <p className="mb-4">
        Your privacy is important to us, and this Cookie Policy explains how we use cookies and similar technologies on our IELTS website. By using our site, you consent to our use of cookies as described in this policy.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small data files stored on your device when you visit our website. They allow us to remember your preferences and improve your user experience. Cookies can also be used to deliver relevant content and ads based on your browsing activity.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <h2>Essential Cookies:</h2> Necessary for the website to function correctly. These cookies do not collect personal information.
          </li>
          <li>
            <h2>Performance and Analytics Cookies:</h2> Help us understand how users interact with our site, allowing us to improve functionality and performance.
          </li>
          <li>
            <h2>Functional Cookies:</h2> Allow us to remember your choices (e.g., language, region) to enhance your experience.
          </li>
          <li>
            <h2>Advertising and Targeting Cookies:</h2> Used to deliver relevant advertisements to you based on your interests and browsing behavior.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-right mb-2">3. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Remember your login details and preferences</li>
          <li>Analyze website traffic to improve functionality</li>
          <li>Deliver personalized content and ads</li>
          <li>Understand user engagement and enhance our services</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Cookies</h2>
        <p>
          Our website may include third-party cookies from services like Google Analytics, social media platforms, and advertisers. These third parties have their own cookie policies, which we encourage you to review.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Managing Your Cookie Preferences</h2>
        <p>
          You can control your cookie preferences by adjusting your browser settings to block or delete cookies. Please note that disabling cookies may affect the functionality of our website and limit your access to certain features.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy periodically. Please review this page for the latest information on our cookie practices.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          For questions or more information about our Cookie Policy, please contact us at <a href="mailto:contact@example.com" className="text-blue-500 hover:text-blue-700">Ieltsleetscholar@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
