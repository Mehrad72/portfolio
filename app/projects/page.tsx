import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    alternates: {
        canonical: '/projects'
    }
};

const projects = [
    {
        name: 'Chat Collect',
        date: 'Jan 2024 - Feb 2024',
        description:
            'A simple way for GPT users to collect email addresses and build an audience.',
        image: 'https://placehold.co/1200x760/f8fafc/111827?text=Chat+Collect',
        website: 'https://example.com',
        source: 'https://github.com',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI']
    },
    {
        name: 'Magic UI',
        date: 'June 2023 - Present',
        description:
            'Animated UI components for developers, designed and built for modern products.',
        image: 'https://placehold.co/1200x760/f8fafc/111827?text=Magic+UI',
        website: 'https://example.com',
        source: 'https://github.com',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI']
    },
    {
        name: 'Chat Collect2',
        date: 'Jan 2024 - Feb 2024',
        description:
            'A simple way for GPT users to collect email addresses and build an audience.',
        image: 'https://placehold.co/1200x760/f8fafc/111827?text=Chat+Collect',
        website: 'https://example.com',
        source: 'https://github.com',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI']
    },
    {
        name: 'Magic UI2',
        date: 'June 2023 - Present',
        description:
            'Animated UI components for developers, designed and built for modern products.',
        image: 'https://placehold.co/1200x760/f8fafc/111827?text=Magic+UI',
        website: 'https://example.com',
        source: 'https://github.com',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI']
    },
    
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black"
        >
            {children}
        </a>
    );
}

export default function ProjectsPage() {
    return (
        <div className="space-y-8 py-8">
            <header className="max-w-[60ch] mx-auto w-full">
                <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
                <p className="mt-3 text-gray-600 dark:text-zinc-400">
                    A selection of things I have designed and built.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2" aria-label="Projects">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    >
                        <div className="relative aspect-[1.58] overflow-hidden bg-gray-100 dark:bg-zinc-900">
                            <img
                                src={project.image}
                                alt={`${project.name} preview`}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute right-3 top-3 flex gap-2">
                                <ExternalLink href={project.website}>Website</ExternalLink>
                                <ExternalLink href={project.source}>Source</ExternalLink>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold">{project.name}</h2>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">{project.date}</p>
                                </div>
                                <span aria-hidden="true" className="text-lg text-gray-400">↗</span>
                            </div>
                            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-zinc-400">{project.description}</p>
                            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                                {project.tags.map((tag) => (
                                    <li key={tag} className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-700 dark:border-zinc-800 dark:text-zinc-300">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}