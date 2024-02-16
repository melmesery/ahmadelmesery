import Link from 'next/link';
import "@/styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h2>
                404 </h2>
            <p>Page not found</p>
            <Link href="/">
                Back Home
            </Link>
        </div>
    );
};

export default NotFound;
