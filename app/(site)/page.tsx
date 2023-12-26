import { getReel } from "@/sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Home() {
  const { url } = await getReel();
  return (
    <>
      <div
        className="max-w-[90%] 
      lg:max-w-[1350px] 
      mx-auto lg:px-[65px] py-[50px] text-center"
      >
        {
          url && <iframe
            className="w-full aspect-video  animate__animated animate__slideInUp"
            title="vimeo-player"
            src={url}
            allowFullScreen
          ></iframe>
        }
        <p className="mt-12 text-3xl sm:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Ahmad Elmesery
        </p>
      </div>
    </>
  );
}
