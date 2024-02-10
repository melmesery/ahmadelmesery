'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <div>{children}</div>;
};

export default AOSWrapper;
