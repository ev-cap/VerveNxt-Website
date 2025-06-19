import React from 'react';

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-2">Terms of Use</h1>
        <p className="text-lg">Last updated: June 19, 2025</p>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-slate-50 pb-20 -mt-16">
        <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg px-6 py-10">
          <article className="prose prose-slate max-w-none">
          <p>Welcome to Vervenxt! These Terms of Service ("Terms") govern your use of:</p>
          <p>Vervenxt.com (the “Website”), operated by Vervenxt Innovations Pvt. Ltd. ("Vervenxt", "we", "us", or "our"),</p>
          <p>and our flagship platform/app, UNAD ("App" or "UNAD").</p>
          <p>By accessing or using our Website or App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using our services, you confirm that you are at least 18 years of age or have the legal capacity to enter into a binding contract. If you are using the services on behalf of an organization, you represent and warrant that you have the authority to bind that organization.</p>

          <h2>2. Services Overview</h2>
          <p>Vervenxt provides digital services through its platform and mobile applications. UNAD is the ultimate EV charging station aggregator, designed to make your charging experience seamless and delightful.</p>

          <h2>3. Account Registration</h2>
          <p>To access certain features of UNAD, you may be required to create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security of your password.</li>
            <li>Notify us immediately of any unauthorized access or breach.</li>
          </ul>

          <h2>4. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Violate any applicable law or regulation.</li>
            <li>Reverse engineer, decompile, or disassemble any part of our platform.</li>
            <li>Interfere with or disrupt the integrity or performance of our services.</li>
            <li>Use the services to infringe on any third-party rights.</li>
          </ul>

          <h2>5. Subscription, Payments, and Billing</h2>
          <p>Some features of UNAD may be available only through paid subscriptions.</p>
          <ul>
            <li>Prices and payment terms are outlined on the platform and are subject to change with prior notice.</li>
            <li>You authorize us to charge the applicable fees to your payment method.</li>
            <li>Failure to pay may result in the suspension or termination of your access.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>All content, features, and functionality on the Website and App, including but not limited to text, graphics, logos, and software, are the intellectual property of Vervenxt or its licensors and are protected by copyright and other applicable laws.</p>

          <h2>7. User Content</h2>
          <p>You may submit content through our services. You retain ownership of your content but grant us a limited license to use, host, store, and display it as necessary to provide the services.</p>
          <p>You agree not to upload:</p>
          <ul>
            <li>Any content that is unlawful, harmful, or violates the rights of others.</li>
            <li>Sensitive personal information unless explicitly required and agreed to by both parties.</li>
          </ul>

          <h2>8. Privacy</h2>
          <p>Your use of our services is also governed by our Privacy Policy. By using our services, you consent to our collection and use of your data as described in the Privacy Policy.</p>

          <h2>9. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the services at our sole discretion, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful.</p>
          <p>You may also cancel your account at any time by contacting us or through your account dashboard.</p>

          <h2>10. Disclaimers</h2>
          <p>Our services are provided “as is” and “as available.” We disclaim all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
          <p>We do not guarantee the accuracy, completeness, or usefulness of any content, nor do we warrant that the services will be uninterrupted or error-free.</p>

          <h2>11. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Vervenxt shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the services.</p>
          <p>Our total liability for any claim related to the use of the services is limited to the amount paid by you in the past 12 months.</p>

          <h2>12. Changes to the Terms</h2>
          <p>We may update these Terms from time to time. When we do, we will revise the “Last updated” date. Continued use of the services after changes means you accept the revised Terms.</p>

          <h2>13. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</p>
        </article>
      </div>
    </div>
  </div>
  );
};

export default TermsPage;
