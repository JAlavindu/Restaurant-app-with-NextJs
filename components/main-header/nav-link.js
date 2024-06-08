'use client'
import classes from './nav-link.module.css';

import Link from 'next/link';
import usePathName from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({href, children}) {
    const path = usePathName();

    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}`  : undefined}>{children}</Link>
    )
}