import { Post } from "@/utils/types";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};
export default function PostList({ posts }: Props) {
  return (
    <div className="my-4 flex flex-wrap justify-between gap-4 ">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
