export default function ProjectsSkeleton() {
  return (
    <div className="projects_container max-w-[90%] 
    lg:max-w-[1350px] mx-auto lg:px-[65px]">
      {[...new Array(8)].map((_, index) => (
        <div key={index} className="p-4 w-full mx-auto">
          <div className="animate-pulse">
            <div className="bg-slate-700 min-h-[20vh] sm:min-h-[40vh] w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
