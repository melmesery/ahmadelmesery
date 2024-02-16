"use client";

import { Fragment, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher.tsx';

export default function Links({ links }: any) {
    const [activeLink, setActiveLink] = useState('/');
    const { theme } = useTheme();

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="links-container">
            {links.map((link: any) => (
                <Fragment key={link.name}>
                    {link.url && link.publish && (
                        <Link
                            href={link.src}
                            className={`${activeLink === link.src ? (theme === "light" ? 'active-light' : 'active-dark') : 'navbar-link'}`}
                            onClick={() => handleLinkClick(link.src)}
                        >
                            {link.name}
                        </Link>
                    )}
                </Fragment>
            ))}
            <ThemeSwitcher />
        </div>
    );
}

