'use client';

export default function ContactForm() {
  return (
    <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Send Us a Message</h3>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-600">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-gray-50 shadow-inner transition-all duration-300 focus:scale-105"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-600">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-gray-50 shadow-inner transition-all duration-300 focus:scale-105"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-600">Message</label>
        <textarea
          rows="4"
          placeholder="Your message..."
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-gray-50 shadow-inner transition-all duration-300 focus:scale-105 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
}
