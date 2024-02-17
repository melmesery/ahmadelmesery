import { getProfile } from "@/cms/sanity-utils.ts";
import { PortableText } from "@portabletext/react";
import SocialIcons from "../SocialIcons.tsx";

export const revalidate = 10;

export default async function Summary() {
  const { summary, email } = await getProfile();
  return (
    <>
      <PortableText value={summary} /> <br />
      <p className="summary-description">
        Feel free to ask questions or contact for possible business inquiries{" "}
        {email}
      </p>
      <SocialIcons />
    </>
  );
}
