"use client";
import HeroImage from "@/components/HeroImage";
import PageContainer from "@/components/PageContainer";
import PostList from "@/components/PostList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NextAuthProvider } from "@/provider/NextAuthProvider";
import { COMPONENTS } from "@/utils/analyses";
import { Post } from "@/utils/post";
import { Types } from "@/utils/types";

import Link from "next/link";

export default function Home() {
  return (
    <NextAuthProvider>
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
    </NextAuthProvider>
  );
}
