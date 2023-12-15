import { PortableTextBlock } from 'sanity';

export type Profile = {
    _id: string;
    createdAt: Date;
    name: string;
    email: string;
    image: string;
    coloredLogo: string;
    darkLogo: string;
    summary: PortableTextBlock[];
    mobile: string,
    facebook: string,
    instagram: string,
    linkedin: string,
    behance: string,
    youtube: string,
    whatsapp: string
}