export type Types = {
  id: number;
  title: string;
  image: string;
  href: string;
  caption: string;
  date: string;
  minutesToRead: number;
  author: string;
  nbViews: number;
  nbComments: number;
  slug: string;
  description: string;
};

export type Post = {
  id: number;
  title: string;
  image: string;
  caption: string;
  date: string | Date;
  minutesToRead: number;
  author: string;
  nbViews: number;
  nbComments: number;
  slug: string;
};

export type Article = {
  id: number;
  name: string;
  slug: string;
};
