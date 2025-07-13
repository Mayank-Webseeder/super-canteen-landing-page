'use client';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function TermsConditions() {
  return (
    <main className="w-full bg-white text-gray-700">
      <Header />

      <div className="w-full relative h-[200px] overflow-hidden">
        <Image
          src="/terms&conditions.jpg"
          alt="Terms and Conditions"
          fill
          priority
          className="object-cover object-center filter brightness-[0.4] blur-sm"
        />
        <div className="absolute inset-0 flex items-center mt-12 justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms & <span className="text-orange-400">Conditions</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <p className="mb-6 text-lg">
          Welcome to <strong>Super Canteen</strong>. These terms and conditions outline the rules and regulations for the use of our services.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using our website or mobile app, you accept and agree to be bound by the terms and conditions set forth below.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Modifications</h2>
          <p>
            Super Canteen reserves the right to update or modify these terms at any time without prior notice.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Maintain the confidentiality of your account and password.</li>
            <li>Provide accurate and up-to-date information.</li>
            <li>Use the platform for lawful purposes only.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Orders and Payments</h2>
          <p>
            All orders placed are subject to product availability. We reserve the right to cancel or refuse any order at our sole discretion.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
          <p>
            If you have any questions regarding our terms, please contact us at: <br />
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
