import Image from 'next/image'
import img from '../app/assets/arjun.png'

export default function Home() {
  return (
    <div>
      <h1>Arjun Karthik</h1>
      <h2>Software Engineering and Management @ McMaster University</h2>
      <Image
        src = {img}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
