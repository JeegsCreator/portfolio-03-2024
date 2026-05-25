import LogoLoop from "@components/components/LogoLoop"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGo,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiAstro,
  SiSvelte,
  SiFigma,
  SiVitest,
  SiStorybook,
  SiRedux,
  SiSupabase,
  SiBlender,
  SiThreedotjs,
} from "react-icons/si"

const techLogos = [
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiGo />, title: "Go", href: "https://go.dev" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
  { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiVitest />, title: "Vitest", href: "https://vitest.dev" },
  {
    node: <SiStorybook />,
    title: "Storybook",
    href: "https://storybook.js.org",
  },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
]

export default function LogosLoop() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={30}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  )
}
