"use client";

import Date from "@/components/Date";
import EyeCircle from "@/components/EyeCircle";
import PageContainer from "@/components/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Types } from "@/utils/types";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostTonArticle({ params }: Props) {
  const { slug } = params;

  const post: Types = {
    id: 1,
    title: "Adjusting Overheating on a Regulator",
    image: "/regulator_adjustment_image.jpg",
    caption: "Learn how to adjust overheating on a regulator.",
    href: "https://yourwebsite.com/regulator-adjustment-guide",
    date: "2024-02-10",
    minutesToRead: 10,
    author: "RegulatorExpert",
    nbViews: 200,
    nbComments: 15,
    slug: "adjusting-regulator-overheating",
    description:
      "Regulators are essential components in various systems, ensuring a steady flow of pressure. However, overheating can occur, impacting performance and safety. To adjust overheating on a regulator, follow these steps:\n\n1. Identify the overheating issue: Determine if the regulator is overheating due to external factors such as ambient temperature or internal issues like excessive flow rates.\n\n2. Inspect and clean: Check for any debris or dirt accumulation on the regulator. Clean the regulator thoroughly to ensure proper heat dissipation.\n\n3. Adjust pressure settings: Reduce the pressure setting on the regulator if it's operating at a higher pressure than necessary. Lowering the pressure can alleviate overheating.\n\n4. Enhance ventilation: Improve airflow around the regulator by ensuring adequate ventilation in the surrounding area. Install cooling fans or vents if needed.\n\n5. Monitor performance: After making adjustments, monitor the regulator's performance closely. Keep an eye on temperature levels and pressure fluctuations to ensure the issue is resolved.\n\nBy following these steps, you can effectively adjust overheating on a regulator, optimizing its performance and extending its lifespan.",
  };

  return (
    <PageContainer>
      <div className="relative mt-6 flex py-10">
        <div className="h-80 w-full">
          <div className="bg-secondary/80 m-20 rounded-lg p-10">
            <div className="text-block text-center text-2xl font-bold">
              {post.title}
            </div>
            <Image
              src={post.image}
              alt="Station NH3"
              sizes="100%"
              placeholder="blur"
              blurDataURL={post.image}
              quality={100}
              fill
              style={{
                objectFit: "cover",
                zIndex: "-1",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between p-3">
        <div className="flex items-center justify-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
            <AvatarFallback>{post.author}</AvatarFallback>
          </Avatar>
          <div>
            <p>{post.author}</p>
            <p className="text-sm text-slate-500">
              Posté le <Date dateString={post.date} />
            </p>
          </div>
        </div>
        <EyeCircle text1={post.nbComments} text2={post.nbViews} />
      </div>
      <Separator />
      <div className="mt-4 flex flex-row justify-center">
        {post.description}
      </div>
    </PageContainer>
  );
}
