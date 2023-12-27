import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <h2 className="text-3xl sm:text-6xl font-bold mb-1 text-red-500">
                404 </h2>
            <p className="text-2xl sm:text-4xl text-black font-bold dark:text-white mb-4">Page not found</p>
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 transition duration-300 hover:bg-blue-600">
                Back Home
            </Link>
        </div>
    );
};

export default NotFound;
