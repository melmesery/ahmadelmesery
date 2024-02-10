'use client';

import React, { useState, useEffect } from 'react';

const Preloader = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        loading ? (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#EFF0F2] dark:bg-[#013240] z-50">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
            </div>
        ) : (
            children
        )
    );
};

export default Preloader;

