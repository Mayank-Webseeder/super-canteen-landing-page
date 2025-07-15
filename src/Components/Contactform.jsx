'use client';

export default function ContactForm() {
  return (
    <form className="bg-transparent backdrop-blur-md p-8 rounded-xl shadow-md space-y-6 border border-gray-200 transition-all duration-300 focus-within:bg-white focus-within:bg-opacity-40">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white bg-opacity-70"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white bg-opacity-70"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows="4"
          placeholder="Your message..."
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white bg-opacity-70"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
