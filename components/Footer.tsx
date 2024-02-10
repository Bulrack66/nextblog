import PageContainer from "./PageContainer";
import { COMPONENTS } from "@/utils/analyses";
import { Types } from "@/utils/types";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t p-4">
      <PageContainer>
        <div className="flex flex-col flex-wrap items-start justify-center md:flex-row md:items-center">
          <h1 className="bg-gradient-to-br from-red-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent ">
            FrigoBlog
          </h1>
          <div className="flex gap-2">
            {COMPONENTS.map((component: Types) => (
              <Link
                key={component.id}
                href={component.href}
                className="block px-2 py-1 text-lg"
              >
                <Button variant="ghost">{component.title}</Button>
              </Link>
            ))}
          </div>
          <Link href="/postes-ton-article">
            <Button variant="ghost">Ecrits ton article</Button>
          </Link>
        </div>
      </PageContainer>
    </footer>
  );
}
