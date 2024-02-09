import Image from "next/image";

import station from "@/public/station.jpeg";

const HeroImage = () => {
  return (
    <div className="relative size-full">
      <Image
        className="object-fit:cover object-position:center -z-1"
        src={station}
        alt="hero image example"
        quality={100}
      />

      <div className="flex flex-col items-center">
        <h1>Hero Image</h1>
        <p>Next.js 13 hero image example.</p>
      </div>
    </div>
  );
};

export default HeroImage;
