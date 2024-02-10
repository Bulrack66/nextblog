import HeroImage from "@/components/HeroImage";
import PageContainer from "@/components/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/utils/types";
import Image from "next/image";

export default function SinglePostPage() {
  const POST: Post = {
    id: 1,
    title:
      "The Evolution of Air Conditioning: From Ancient Times to Modern Innovations",
    image: "/evolution-of-air-conditioning.webp",
    caption:
      "Explore the journey of air conditioning technology through the ages.",
    date: "2024-02-09",
    minutesToRead: 12,
    author: "HVAC Historian",
    nbViews: 256,
    nbComments: 18,
    slug: "evolution-of-air-conditioning",
  };
  return (
    <PageContainer>
      <div className="relative flex">
        <Image src={POST.image} alt={POST.title} fill />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center justify-center gap-2">
            <Avatar>
              <AvatarImage src="/img/shadcn.jpeg"></AvatarImage>
              <AvatarFallback>{POST.author}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
