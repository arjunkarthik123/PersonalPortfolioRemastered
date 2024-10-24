export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Me</h1>

      {/* Contact Information Cards */}
      <div className="flex gap-8">
        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Email</h2>
          <p className="text-xl text-gray-700">
            <a href="mailto:arjunkarthik2003@gmail.com" className="text-blue-500 underline">
            arjunkarthik2003@gmail.com
            </a>
          </p>
        </div>

        {/* Phone Number Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Phone Number</h2>
          <p className="text-xl text-gray-700">
            <a href="tel:+6475454019" className="text-blue-500 underline">
              +6475454019
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
