import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { COMPONENTS } from "@/utils/analyses";
import { Button } from "./ui/button";
import { Types } from "@/utils/types";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <Link href="/postes-ton-article">
            <Button variant="ghost">Ecrits ton article</Button>
          </Link>
          <p>Les Articles</p>
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
      </SheetContent>
    </Sheet>
  );
}
