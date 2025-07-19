import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg">Last updated: June 19, 2025</p>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-slate-50 pb-20 -mt-16">
        <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg px-6 py-10">
          <article className="max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At VerveNxt Technology ("VerveNxt", "we", "us", or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (vervenxt.com) and our mobile applications, including UNAD, available on Android and iOS platforms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We may collect the following personal information:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
              <li><strong>Profile Information:</strong> Profile picture, vehicle information, charging preferences, and payment methods</li>
              <li><strong>Location Data:</strong> GPS coordinates, charging station locations, and travel patterns to provide location-based services</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history (processed securely through third-party payment processors)</li>
              <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Device and Usage Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We automatically collect certain information about your device and usage:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information</li>
              <li><strong>App Usage Data:</strong> Features used, pages visited, time spent in the app, and interaction patterns</li>
              <li><strong>Log Data:</strong> IP address, browser type, access times, and referring website addresses</li>
              <li><strong>Charging Data:</strong> Charging session details, station usage, and energy consumption patterns</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Third-Party Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We may receive information from third parties, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Charging station operators and networks</li>
              <li>Payment processors and financial institutions</li>
              <li>Social media platforms (if you connect your social media accounts)</li>
              <li>Analytics and advertising partners</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our EV charging services</li>
              <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support</li>
              <li><strong>Location Services:</strong> To help you find nearby charging stations and provide navigation assistance</li>
              <li><strong>Personalization:</strong> To customize your experience, recommend charging stations, and provide relevant content</li>
              <li><strong>Communication:</strong> To send you important updates, notifications, and marketing communications (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze usage patterns, improve our services, and develop new features</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Service Providers</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We may share information with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Payment processing and billing</li>
              <li>Cloud hosting and data storage</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support and communication</li>
              <li>Charging station network integration</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Charging Station Partners</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We may share limited information with charging station operators to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Facilitate charging sessions</li>
              <li>Process payments and billing</li>
              <li>Provide customer support</li>
              <li>Improve charging station availability and reliability</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Legal Requirements</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">We may disclose your information if required by law or in response to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Valid legal requests from government authorities</li>
              <li>Court orders or subpoenas</li>
              <li>Protection of our rights, property, or safety</li>
              <li>Prevention of fraud or security threats</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Business Transfers</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
              <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
              <li><strong>Regular Audits:</strong> Regular security assessments and vulnerability testing</li>
              <li><strong>Employee Training:</strong> Comprehensive privacy and security training for all employees</li>
              <li><strong>Incident Response:</strong> Procedures for detecting and responding to security incidents</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Provide our services and maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and develop new features</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">When we no longer need your information, we will securely delete or anonymize it.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Depending on your location, you may have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Access and Portability</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You can request access to your personal information and receive a copy in a portable format.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Correction and Updates</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You can update or correct your personal information through your account settings or by contacting us.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Deletion</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You can request deletion of your personal information, subject to certain legal and contractual obligations.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.4 Opt-Out</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You can opt out of marketing communications and certain data processing activities.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.5 Location Services</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You can control location permissions through your device settings and our app settings.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Mobile App Permissions</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Our mobile applications may request the following permissions:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Location:</strong> To find nearby charging stations and provide navigation</li>
              <li><strong>Camera:</strong> To scan QR codes at charging stations</li>
              <li><strong>Notifications:</strong> To send charging session updates and important alerts</li>
              <li><strong>Storage:</strong> To cache app data for offline functionality</li>
              <li><strong>Network:</strong> To connect to charging stations and sync data</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">You can manage these permissions through your device settings at any time.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Our services may contain links to third-party websites or integrate with third-party services. This Privacy Policy does not apply to those third-party services. We encourage you to review their privacy policies.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">You can control cookie settings through your browser preferences.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a notice in our mobile applications</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Email:</strong> privacy@vervenxt.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> VerveNxt Technology, San Francisco, CA</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising under this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</p>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Note:</strong> This Privacy Policy is effective as of the date stated above. We are committed to maintaining the privacy and security of your information as we continue to innovate in the electric vehicle charging space.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 