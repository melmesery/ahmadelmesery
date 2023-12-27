import { PortableTextBlock } from 'sanity';

export type Reel = {
    _id: string;
    createdAt: Date;
    publish: boolean;
    name: string;
    slug: string;
    image: string;
    url: string;
    client: string;
    content: PortableTextBlock[];
    details: string[]
}