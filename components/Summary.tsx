import { PortableText } from "@portabletext/react";
import { getProfile } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Summary() {
  const { summary, email } = await getProfile();
  return (
    <>
      <PortableText value={summary} /> <br />
      <p>
        Feel free to ask questions or contact for possible business inquiries{" "}
        {email}
      </p>
    </>
  );
}
