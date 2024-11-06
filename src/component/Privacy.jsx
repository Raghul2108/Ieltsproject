import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); }, []);

  return (
    <div className="text-gray-800 p-24">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for [IELTS-Leetscholar]</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This privacy policy outlines how [IELTS-Leetscholar] ("we," "us," or "our") collects, uses,
          discloses, and protects your information when you visit our website [Insert URL] (the "Site").
          We are committed to safeguarding your privacy and ensuring your personal information is handled responsibly.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>
            <h2>Personal Information:</h2> We may collect personal information that you provide
            voluntarily, such as your name, email address, phone number, and any other information you
            submit through forms on our Site.
          </li>
          <li>
            <h2>Usage Data:</h2> We automatically collect information about how you access and
            use the Site, including your IP address, browser type, device information, pages visited, and
            the time and date of your visits.
          </li>
          <li>
            <h2>Cookies:</h2> We use cookies and similar tracking technologies to enhance your
            experience on our Site. Cookies are small data files stored on your device that help us remember
            your preferences and improve our services.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc list-inside">
          <li>To provide and maintain our services</li>
          <li>To communicate with you, including sending newsletters and updates</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To analyze usage trends and improve our Site</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Disclosure of Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share your information
          in the following circumstances:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <h2>Service Providers:</h2> We may employ third-party companies and individuals to
            facilitate our Site, provide services on our behalf, or perform Site-related services (e.g.,
            analytics, customer support).
          </li>
          <li>
            <h2>Legal Requirements:</h2> We may disclose your information if required to do so by
            law or in response to valid requests by public authorities.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access, disclosure,
          alteration, or destruction. However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee its absolute security.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside">
          <li>The right to access and receive a copy of your personal information</li>
          <li>The right to rectify any inaccurate or incomplete information</li>
          <li>The right to request the deletion of your personal information</li>
          <li>The right to restrict or object to the processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided below.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Links to Other Websites</h2>
        <p>
          Our Site may contain links to other websites that are not operated by us. We have no control
          over the content and practices of these websites and are not responsible for their privacy
          policies. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. We will notify you of any changes by
          posting the new privacy policy on this page and updating the effective date at the top.
          You are advised to review this privacy policy periodically for any changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy or our practices regarding your
          personal information, please contact us at:
        </p>
        <p>[Your Email Address]</p>
        <p>[Your Phone Number]</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
