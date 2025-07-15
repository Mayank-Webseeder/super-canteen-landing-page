'use client';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white text-gray-700">
      <Header />

      <div className="relative w-full h-[200px] overflow-hidden mt-16">
        <Image
          src="/privacy-policy.jpg"
          alt="Privacy Policy"
          fill
          className="object-cover object-center filter brightness-[0.4] blur-sm"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-orange-400">Policy</span>
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-12 px-8 space-y-4">
        <p>
          At <strong>Super Canteen</strong>, we are committed to protecting your privacy and ensuring that your personal information is handled with care and responsibility. This Privacy Policy outlines the manner in which we collect, use, store, and protect your data when you access our website or engage with our services.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p>
            We collect information provided by users at the time of registration, placing orders, providing feedback, or contacting support. This may include your name, contact details, address, payment information, and feedback content. We may also collect data automatically, including device information, browser type, and usage statistics through cookies and tracking technologies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Why We Collect Information</h2>
          <p>
            The information collected helps us process your orders, enhance your experience, personalize offerings, improve our services, and resolve your grievances effectively. Additionally, it enables us to understand customer preferences and optimize the usability and functionality of our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            We use your information to fulfill orders, provide customer support, notify you of updates or offers, and ensure the security of our platform. Feedback provided by users is used to refine our services and address concerns. We do not sell or rent your personal information to third parties without explicit consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">How We Share Information</h2>
          <p>
            Your data may be shared with trusted third-party partners like delivery services, payment gateways, or analytics providers strictly to facilitate the services you have requested. We ensure all partners comply with data protection regulations and uphold the confidentiality of your information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
          <p>
            We retain your information only as long as necessary for the purpose for which it was collected or as required by applicable law. Upon account deactivation or request, your data may be securely deleted or anonymized unless retention is mandated by legal or compliance obligations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Security Measures</h2>
          <p>
            We implement stringent security protocols including encryption, firewalls, and access controls to safeguard your data from unauthorized access, alteration, disclosure, or destruction. While we strive to protect your information, we cannot guarantee absolute security in transmission over the internet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p>
            Cookies are used to enhance user experience by storing preferences, enabling website functionality, and gathering analytics data. You can manage or disable cookies via your browser settings, though doing so may affect the usability of certain features on our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to external sites which have their own privacy policies. We are not responsible for the practices or content of such third-party websites. We advise users to review the privacy policies of those sites before providing any personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data held by us. You may also withdraw consent for data processing or object to specific uses. To exercise these rights, please contact our support team using the details provided below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices or for legal compliance. Updates will be posted on this page, and continued use of our services constitutes your acceptance of any such revisions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at:<br />
            📧 <a href="mailto:support@supercanteen.com" className="text-orange-500">support@supercanteen.com</a><br />
            📞 Phone: +91 98765 43210<br />
            📍 Address: Near Jain Petrol Pump, Naurangabad, Aligarh, Uttar Pradesh
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
