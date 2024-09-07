import Image from 'next/image'
import img from '../app/assets/arjun.png'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100">
      {/* Text Section */}
      <div className="mr-8 max-w-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Arjun Karthik</h1>
        <h2 className="text-xl text-gray-700 mb-6">
          Software Engineering and Management @ McMaster University
        </h2>
        <Link href="/contact" passHref>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Contact Me!
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div>
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
