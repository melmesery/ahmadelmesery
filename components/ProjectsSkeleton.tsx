import "../styles/Skeleton.css";

export default function ProjectsSkeleton() {
  return (
    <div className="skeleton-container">
      {[...new Array(8)].map((_, index) => (
        <div key={index} className="skeleton">
          <div className="animation">
            <div className="skeleton-inner" />
          </div>
        </div>
      ))}
    </div>
  );
}
