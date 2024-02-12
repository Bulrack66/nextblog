import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import EyeCircle from "./EyeCircle";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type Props = {
  post: Post;
};
export default function PostCard({ post }: Props) {
  return (
    <Link href={`/articles/${post.slug}`}>
      <Card className="flex h-full w-64 flex-col justify-between rounded-lg border-2">
        <CardHeader className="">
          <div className="relative block aspect-square">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="rounded-lg"
            ></Image>
          </div>
          <p className="test-lg mt-3 font-semibold">{post.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{post.author}</Badge>
        </CardContent>
        <CardFooter className="gap-2">
          <EyeCircle text1={post.nbComments} text2={post.nbViews} />
        </CardFooter>
      </Card>
    </Link>
  );
}
