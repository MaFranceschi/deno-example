export interface User {
  id: string;
  username: string;
  name: string;
  url: string;
  imageUrl: string;
}

export interface Publication {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

export interface Post {
  title: string;
  contentFormat: string;
  content: string;
  canonicalUrl: string;
  tags: string;
  publishStatus: string;
}
