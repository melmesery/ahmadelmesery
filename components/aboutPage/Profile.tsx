import { getProfile } from "@/cms/sanity-utils.ts";
import Image from "next/image";

export const revalidate = 10;

export default async function Profile() {
  const profile = await getProfile();
  const { image } = profile;
  
  return (
    <Image
      src={image}
      alt="Ahmad-Elmesery-Reel"
      width={600}
      height={600}
      quality={100}
    />
  );
}
