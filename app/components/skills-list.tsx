import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Vercel', icon: SiVercel }
];

export default function SkillsList() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3">
      {skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-lg  border-gray-200 p-3 text-sm transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-zinc-800"
        >
          <Icon aria-hidden="true" className="size-5" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}