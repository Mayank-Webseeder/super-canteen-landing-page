'use client';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white text-gray-700">
      <Header />

      {/* Top Banner with Image and Heading */}
      <div className="relative w-full h-[200px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/privacy-policy.jpg"
          alt="Privacy Policy"
          fill
          className="object-cover object-center filter brightness-[0.4] blur-sm"
          priority
        />

        {/* Heading Overlay */}
        <div className="absolute inset-0 flex items-center mt-12 justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-orange-400">Policy</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <p className="mb-6 text-lg">
          At <strong>Super Canteen</strong>, your privacy is important to us. This privacy policy explains how we collect, use, and safeguard your information.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal details (name, email, phone number)</li>
            <li>Delivery address & location data</li>
            <li>Payment information (processed securely)</li>
            <li>Device and browser information</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To process and deliver your orders</li>
            <li>To improve user experience and personalize content</li>
            <li>For customer support and service updates</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
          <p>
            We implement strict security measures to keep your personal data safe. Payments are processed via secure gateways and are not stored on our servers.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>
            We may use third-party services (like analytics or delivery partners) which may collect limited data to perform services on our behalf.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Your Consent</h2>
          <p>
            By using Super Canteen, you consent to our privacy policy. You can opt-out or update your information anytime by contacting our support team.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at: <br />
            📧{' '}
            <a
              href="mailto:support@supercanteen.com"
              className="text-orange-500 hover:underline"
            >
              support@supercanteen.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
