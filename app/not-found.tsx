import PageContainer from "@/components/PageContainer";
import panda from "@/public/panda.png";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <PageContainer>
      <div className="mt-12 flex flex-col">
        <Image
          priority={true}
          src={panda}
          width={300}
          height={300}
          alt="panda"
          className="m-auto flex rounded-full"
        />
        <p className="m-auto mt-12 text-xl">
          Désolé mais cette application n'est pas terminée alors il n'y a pas
          tout qui marche
        </p>
      </div>
    </PageContainer>
  );
}
