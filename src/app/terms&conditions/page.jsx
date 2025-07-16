'use client';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function TermsConditions() {
  return (
    <main className="w-full bg-white text-gray-700">
      <Header />
      <div className="w-full relative h-[200px] overflow-hidden mt-16">
        <Image
          src="/terms&conditions.jpg"
          alt="Terms and Conditions"
          fill
          priority
          className="object-cover object-center filter brightness-[0.4] blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms & <span className="text-blue-400">Conditions</span>
          </h1>
        </div>
      </div>
      <section className="max-w-7xl mx-auto py-8 px-8 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Consent</h2>
          <p>
            This agreement outlines the terms between Super Canteen and users accessing our platform. By using our website or services, you consent to these terms and the practices described within our policies. Your continued use signifies your acceptance of all conditions detailed herein.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Information on the Website</h2>
          <p>
            The information on this site is provided in good faith for general informational purposes. We strive to ensure accuracy but make no representations or warranties regarding completeness or reliability. Users should independently verify any information before relying on it for decisions or actions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Ownership and Intellectual Property Rights</h2>
          <p>
            All content on the Super Canteen website, including text, images, logos, and software, is owned or licensed by us. Reproduction, distribution, or use of our content without explicit permission is strictly prohibited. We reserve all rights to our intellectual property under applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
          <p>
            Users are expected to provide accurate information, respect the platform's integrity, and avoid misuse in any form. Any actions that compromise the security, availability, or reliability of the website may result in termination of access and further legal action.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            Super Canteen is not liable for any damages arising from the use or inability to use our services. This includes direct, indirect, incidental, or consequential damages, even if we have been advised of the possibility of such damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the content, privacy practices, or policies of such third-party websites. Users should review the terms and policies of these external sites independently.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Indemnity</h2>
          <p>
            You agree to indemnify and hold Super Canteen harmless from any claims, liabilities, damages, and expenses arising from your misuse of our website, violation of these terms, or infringement of any rights of another party.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising from the use of our website shall be subject to the exclusive jurisdiction of the courts located in Aligarh, Uttar Pradesh.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Updates to Terms</h2>
          <p>
            We may revise these Terms and Conditions at any time without prior notice. Users are encouraged to review them periodically. Continued use of the website constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>
            For any questions regarding these Terms & Conditions, you can reach out to us at:<br />
            📧 Email: <a href="mailto:support@supercanteen.com" className="text-blue-500">support@supercanteen.com</a><br />
            📞 Phone: +91 98765 43210<br />
            📍 Address: Near Jain Petrol Pump, Naurangabad, Aligarh, Uttar Pradesh
          </p>
        </div>
      </section>

      <Footer />
    </main>


  );
}
