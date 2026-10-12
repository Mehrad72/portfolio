'use client';

import { useState } from 'react';

type Experience = {
    company: string;
    role: string;
    dates: string;
    mark: string;
    description?: string;
};

const experiences: Experience[] = [
    {
        company: 'Atomic Finance',
        role: 'Bitcoin Protocol Engineer',
        dates: 'May 2021 - Oct 2022',
        mark: 'A',
        description:
            'Designed and contributed to Bitcoin protocol tooling and infrastructure, with a focus on reliable developer workflows and clear technical documentation.'
    },
    {
        company: 'Shopify',
        role: 'Software Engineer',
        dates: 'January 2021 - April 2021',
        mark: 'S',
        description:
            'Built product experiences and internal tools across a fast-moving commerce platform.'
    },
    {
        company: 'Nvidia',
        role: 'Software Engineer',
        dates: 'January 2020 - April 2020',
        mark: 'N',
        description:
            'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.'
    },
    {
        company: 'Splunk',
        role: 'Software Engineer',
        dates: 'January 2019 - April 2019',
        mark: 'S',
        description:
            'Worked on software for turning operational data into useful, searchable insights.'
    },
    {
        company: 'Lime',
        role: 'Software Engineer',
        dates: 'January 2018 - April 2018',
        mark: 'L',
        description:
            'Developed software supporting dependable, accessible transportation experiences.'
    },
    {
        company: 'Mitre Media',
        role: 'Software Engineer',
        dates: 'May 2017 - August 2017',
        mark: 'M',
        description:
            'Built and maintained web applications for digital media and advertising workflows.'
    }
];

export default function ExperienceList() {
    const [openCompany, setOpenCompany] = useState<string | null>(null);

    return (
        <div className="mt-6 space-y-1">
            {experiences.map((experience) => {
                const isOpen = openCompany === experience.company;

                return (
                    <div key={experience.company} className="border-b border-gray-100 last:border-0 dark:border-zinc-900">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => setOpenCompany(isOpen ? null : experience.company)}
                            className="group flex w-full items-center gap-3 py-3 text-left cursor-pointer transition-colors hover:text-blue-500"
                        >
                            <span className="
  flex size-11 shrink-0 items-center justify-center rounded-full
  border-2 border-gray-200 text-sm font-semibold text-gray-700
  transition-all duration-200
  group-hover:border-blue-500
  group-hover:bg-blue-50
  group-hover:text-blue-500
  dark:border-zinc-800
  dark:text-zinc-200
  dark:group-hover:border-blue-400
  dark:group-hover:bg-blue-950
  dark:group-hover:text-blue-400
">
                                {experience.mark}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-gray-900 dark:text-zinc-100">{experience.company}</span>
                                <span className="block text-sm text-gray-500 dark:text-zinc-400">{experience.role}</span>
                            </span>
                            <span className="hidden shrink-0 text-right text-sm text-gray-500 sm:block dark:text-zinc-400">{experience.dates}</span>
                            <span className="ml-1 w-4 text-center text-gray-400 transition-transform sm:ml-2" aria-hidden="true">
                                {isOpen ? '^' : ''}
                            </span>
                        </button>
                        {isOpen && experience.description && (
                            <p className="max-w-[68ch] pb-4 pl-14 pr-4 text-sm leading-relaxed text-gray-600 dark:text-zinc-400 sm:pr-16">
                                {experience.description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
