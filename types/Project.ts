import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  gif: string;
  mainImage: string;
  meduimImages: string[];
  smallImages: string[];
  url: string;
  content: PortableTextBlock[];
  team: string[]
}