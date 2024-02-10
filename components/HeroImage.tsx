import Image from "next/image";

import station from "@/public/station.jpeg";

const HeroImage = () => {
  return (
    <Image
      src={station}
      alt="Station NH3"
      sizes="100%"
      placeholder="blur"
      blurDataURL={"@/public/station.jpeg"}
      quality={100}
      fill
      style={{
        objectFit: "cover",
        zIndex: "-1",
        borderRadius: "8px",
      }}
    />
  );
};

export default HeroImage;
