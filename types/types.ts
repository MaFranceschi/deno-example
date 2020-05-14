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
  tags: string[];
  publishStatus: string;
}

export interface CreatedPost {
  id: string;
  title: string;
  authorId: string;
  tags: string[];
  url: string;
  canonicalUrl: string;
  publishStatus: string;
  publishedAt: number;
  license: string;
  licenseUrl: string;
}
