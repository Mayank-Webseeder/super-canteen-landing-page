'use client';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './Contactform';

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have any questions or need help with something? Reach out to us.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span>support@supercanteen.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span>123 Super Canteen Street, Indore, India</span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <ContactForm />
      </div>
    </section>
  );
}
