"use client";

import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import station from "@/public/station.jpeg";

export default function Home() {
  return (
    <PageContainer>
      <div className="relative m-auto">
        <div className="sm:max-g-w-xl bg-secondary/80 roiunded-lg max-w-xs p-4">
          <Image
            src={station}
            objectFit="contain"
            alt="Station NH3"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              margin: "auto",
              zIndex: "-1",
            }}
            className="m-auto rounded-md"
          />
          <h1 className="text-block text-3xl font-bold sm:text-5xl dark:text-white ">
            Devenons de meilleurs frigoristes
          </h1>
        </div>
      </div>
    </PageContainer>
  );
}
