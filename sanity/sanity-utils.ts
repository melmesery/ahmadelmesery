import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { Profile } from "../types/Profile.ts";
import { Reel } from "../types/Reel.ts";
import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "gif": gif.asset->url,
      "mainImage": mainImage.asset->url,
      "bigImage": bigImage.asset->url,
      "mediumImages": meduimImages[].asset->url,
      "smallImages": smallImages[].asset->url,
      url,
      content,
      client,
      team
    }`
  );
}


export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "gif": gif.asset->url,
      "mainImage": mainImage.asset->url,
      "bigImage": bigImage.asset->url,
      "mediumImages": meduimImages[].asset->url,
      "smallImages": smallImages[].asset->url,
      url,
      content,
      client,
      team
    }`,
    { slug }
  )
}

export async function getProfile(): Promise<Profile> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "profile"][0]{
      _id,
      _createdAt,
      name,
      email,
      "image": image.asset->url,
      "lightLogo": lightLogo.asset->url,
      "darkLogo": darkLogo.asset->url,
      summary,
      mobile,
      facebook,
      instagram,
      behance,
      linkedin,
      youtube,
      whatsapp
    }`
  )
}

export async function getReel(): Promise<Reel> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "reel"][0]{
      _id,
      _createdAt,
      publish,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      details
    }`
  )
}