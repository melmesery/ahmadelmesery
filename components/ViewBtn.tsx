import Link from "next/link";
import "../css/ViewBtn.css";

export default function ViewBtn() {
  return (
    <div className="view-projects" data-aos="fade-up">
      <Link href="/" className="view-button">
        View more projects
      </Link>
    </div>
  );
}
