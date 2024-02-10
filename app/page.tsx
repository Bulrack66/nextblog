"use client";

import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import HeroImage from "@/components/HeroImage";
import { Input } from "@/components/ui/input";
import { COMPONENTS } from "@/utils/analyses";
import Link from "next/link";
import { Types } from "@/utils/types";
import PostList from "@/components/PostList";
import { Post } from "@/utils/post";

export default function Home() {
  return (
    <PageContainer>
      <div className="relative mt-6 flex py-10">
        <div className="h-80 w-full">
          <div className="bg-secondary/80 m-20 rounded-lg p-10">
            <div className="text-block text-center text-2xl font-bold">
              Devenons de meilleurs frigoristes
            </div>
            <HeroImage />
            <Input
              type="email"
              placeholder="Email"
              className="mt-4 w-full py-6 text-xl"
            />
            <Button size="lg" className="mt-4 w-full py-6 text-xl">
              Abonnez-vous à la newsletter!!
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center">
        {COMPONENTS.map((component: Types) => (
          <Link
            key={component.id}
            href={component.href}
            className="block px-2 py-1 text-lg"
          >
            <Button variant="outline">{component.title}</Button>
          </Link>
        ))}
      </div>
      <div>
        <PostList posts={Post} />
      </div>
    </PageContainer>
  );
}
