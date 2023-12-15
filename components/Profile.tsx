import Image from "next/image";
import { getProfile } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Profile() {
  const profile = await getProfile(); 
  const { image } = profile;
  return (
    <>
      <Image
        src={image}
        alt="Ahmad-Elmesery-Reel"
        className="profile_image"
        width={520}
        height={520}
        quality={100}
      />
    </>
  );
}
