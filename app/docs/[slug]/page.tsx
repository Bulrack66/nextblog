"use server";

import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import PostList from "@/components/PostList";
import { COMPONENTS } from "@/utils/analyses";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  return (
    <PageContainer>
      <div className="px4 py-10">
        <PageTitle title={slug.replace("-", " ")} />
        <PostList posts={COMPONENTS} />
      </div>
    </PageContainer>
  );
}
