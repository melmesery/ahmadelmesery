
export const revalidate = 10;

export default async function Home() {
  return (
    <>
      <div
        className="max-w-[90%] 
      lg:max-w-[1350px] 
      mx-auto lg:px-[65px] py-[50px] text-center"
      >
        <p className="mt-12 text-3xl sm:text-6xl font-bold 
        bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Ahmad Elmesery
        </p>
      </div>
    </>
  );
}
