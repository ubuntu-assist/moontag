'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className='bg-[#FFF4E9] min-h-screen flex flex-col'>
      <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
              Privacy Policy
            </h1>

            <div className='bg-white rounded-xl shadow-md p-6 md:p-8 mb-8'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-700'>Last Updated: April 15, 2025</p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  1. Introduction
                </h2>
                <p className='text-gray-700 mb-4'>
                  Abokyh (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website and use our
                  cryptocurrency gift card platform, including any related
                  mobile applications (collectively, the &quot;Platform&quot;).
                </p>
                <p className='text-gray-700 mb-4'>
                  Please read this Privacy Policy carefully. By accessing or
                  using our Platform, you acknowledge that you have read,
                  understood, and agree to be bound by all the terms outlined in
                  this Privacy Policy. If you do not agree, please discontinue
                  use of our Platform immediately.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  2. Information We Collect
                </h2>
                <h3 className='text-lg font-semibold mt-6 mb-3 text-gray-900'>
                  2.1 Personal Information
                </h3>
                <p className='text-gray-700 mb-4'>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>Register for an account</li>
                  <li>Purchase gift cards or other products</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact our customer support</li>
                  <li>Participate in promotions or surveys</li>
                </ul>
                <p className='text-gray-700 mb-4'>
                  This information may include:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Cryptocurrency wallet addresses</li>
                  <li>Transaction history</li>
                </ul>

                <h3 className='text-lg font-semibold mt-6 mb-3 text-gray-900'>
                  2.2 Automatically Collected Information
                </h3>
                <p className='text-gray-700 mb-4'>
                  When you access our Platform, we may automatically collect
                  certain information including:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    Device information (such as your IP address, browser type,
                    and operating system)
                  </li>
                  <li>
                    Log information (such as access times, pages viewed, and
                    referring websites)
                  </li>
                  <li>Location information</li>
                  <li>
                    Usage information (such as how you interact with our
                    Platform)
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  3. How We Use Your Information
                </h2>
                <p className='text-gray-700 mb-4'>
                  We may use the information we collect for various purposes,
                  including to:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>Provide, maintain, and improve our Platform</li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Verify your identity to prevent fraud or other unauthorized
                    activities
                  </li>
                  <li>
                    Send administrative information, such as updates, security
                    alerts, and support messages
                  </li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>
                    Communicate with you about products, services, offers, and
                    promotions
                  </li>
                  <li>
                    Monitor and analyze trends, usage, and activities in
                    connection with our Platform
                  </li>
                  <li>Personalize and improve your experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  4. Disclosure of Your Information
                </h2>
                <p className='text-gray-700 mb-4'>
                  We may share your information in the following situations:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    <strong>With Service Providers:</strong> We may share your
                    information with third-party vendors, service providers,
                    contractors, or agents who perform services for us.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share your
                    information with our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                  </li>
                  <li>
                    <strong>With Business Partners:</strong> We may share your
                    information with our business partners to offer you certain
                    products, services, or promotions.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may disclose your
                    personal information for any other purpose with your
                    consent.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your
                    information where required to do so by law or in response to
                    valid requests by public authorities.
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  5. Data Security
                </h2>
                <p className='text-gray-700 mb-4'>
                  We implement appropriate security measures designed to protect
                  your information. However, please be aware that no method of
                  transmission over the internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security of your
                  personal information.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  6. Your Rights and Choices
                </h2>
                <p className='text-gray-700 mb-4'>
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    <strong>Access:</strong> You may request access to the
                    personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You may request that we correct
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You may request that we delete
                    your personal information in certain circumstances.
                  </li>
                  <li>
                    <strong>Restriction:</strong> You may request that we
                    restrict the processing of your information in certain
                    circumstances.
                  </li>
                  <li>
                    <strong>Data Portability:</strong> You may request a copy of
                    the information you have provided to us in a structured,
                    commonly used, and machine-readable format.
                  </li>
                  <li>
                    <strong>Objection:</strong> You may object to our processing
                    of your information based on our legitimate interests.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> You may withdraw your
                    consent at any time where we relied on your consent to
                    process your information.
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  7. Cookies and Tracking Technologies
                </h2>
                <p className='text-gray-700 mb-4'>
                  We use cookies and similar tracking technologies to collect
                  and track information about your browsing activities. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  Platform.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  8. International Data Transfers
                </h2>
                <p className='text-gray-700 mb-4'>
                  Your information may be transferred to, and processed in,
                  countries other than the country in which you reside. These
                  countries may have data protection laws that differ from the
                  laws of your country. By using our Platform, you consent to
                  the transfer of your information to countries outside your
                  country of residence, including the United States and
                  countries in Africa where Abokyh operates.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  9. Children&apos;s Privacy
                </h2>
                <p className='text-gray-700 mb-4'>
                  Our Platform is not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe that
                  your child has provided us with personal information, please
                  contact us immediately.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  10. Changes to This Privacy Policy
                </h2>
                <p className='text-gray-700 mb-4'>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date. You
                  are advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage
