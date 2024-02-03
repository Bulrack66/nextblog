"use server";

import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  return <> La Page d'arcticle {slug} </>;
}
