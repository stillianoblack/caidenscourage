import React, { FC } from 'react';

const PrivacyPolicy: FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{color: '#E0FE10', backgroundColor: '#192126'}}>
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      At Puppy School, we respect your privacy and take the protection of personal information very seriously. This Privacy Policy outlines how we collect, use, and protect your information. It is Puppy School's policy to comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https://www.puppyschool.com, and other sites we own and operate.
    </p>
    <p className="mb-4">
      This policy is effective as of 10 June 2023 and was last updated on 10 June 2023.
    </p>
    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
    <p className="mb-4">
      We collect the following information from you:
      <ul>
        <li>Email</li>
        <li>Puppy name</li>
        <li>Birthdate</li>
        <li>Schedule for the puppy</li>
        <li>Items you purchase from our Doggy Essentials list</li>
      </ul>
    </p>

    <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
    <p className="mb-4">
      The collected data is used to improve the overall performance of the app.
    </p>

    <h2 className="text-2xl font-bold mb-4">Puppy School Rights</h2>
    <p className="mb-4">
      Puppy School retains rights to all content uploaded to the app and can use it for improving the service, research, and promotional purposes.
    </p>

    <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
    <p className="mb-4">
      {/* Describe if and with whom you share the collected data... */}
    </p>

    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
    <p className="mb-4">
      {/* Describe the measures you take to secure the user's data... */}
    </p>

    <h2 className="text-2xl font-bold mb-4">User Rights</h2>
    <p className="mb-4">
      {/* Describe the rights of the users regarding their data... */}
    </p>

    <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
    <p className="mb-4">
      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
    </p>

    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4">
      If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
    </p>
  </div>
);

export default PrivacyPolicy;
