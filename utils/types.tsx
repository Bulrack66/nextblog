export type Types = {
  id: number;
  title: string;
  href: string;
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
