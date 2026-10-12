'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
    { name: 'Home', href: '/', icon: '⌂' },
];

export default function NavigationBar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

        document.documentElement.classList.toggle('dark', shouldUseDark);
        setIsDark(shouldUseDark);
    }, []);

    function toggleTheme() {
        const nextIsDark = !isDark;
        document.documentElement.classList.toggle('dark', nextIsDark);
        window.localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
        setIsDark(nextIsDark);
    }

    return (
        <nav
            aria-label="Footer navigation"
            className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg shadow-gray-200/40 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90 dark:shadow-black/30"
        >
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.name}
                    title={link.name}
                    className="flex size-9 items-center justify-center rounded-full border border-transparent text-lg text-gray-500 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                >
                    <span aria-hidden="true">{link.icon}</span>
                </Link>
            ))}
            <span className="mx-1 h-6 w-px bg-gray-200 dark:bg-zinc-800" aria-hidden="true" />
            <a
                href="https://github.com/mehrad72"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-xs font-semibold text-gray-500 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
                GH
            </a>
            <a
                href="https://www.linkedin.com/in/mehrad-heidari-54b009305/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-xs font-semibold text-gray-500 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
                in
            </a>
            <span className="mx-1 h-6 w-px bg-gray-200 dark:bg-zinc-800" aria-hidden="true" />
            <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-lg text-gray-500 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
                {isDark ? '☾' : '☼'}
            </button>
        </nav>
    );
}
