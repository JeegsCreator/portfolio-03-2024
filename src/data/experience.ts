import OpenversumLogo from "../../public/images/openversum.jpg"
import CreaappsLogo from "../../public/images/creaapps.jpg"

type ExperienceInfo = {
  date: string
  jobTitle: string
  description: string
}

export type Experience = {
  companyTitle: string
  logo: ImageMetadata
  es: ExperienceInfo
  en: ExperienceInfo
}

export default [
  {
    companyTitle: "Openversum",
    logo: OpenversumLogo,
    es: {
      date: "Jul 2024 - Presente",
      jobTitle: "Desarrollador Fullstack y Diseñador",
      description: `Lideré la refactorización de una PWA React mobile-first que permite ventas de productos, órdenes de inventario y recolección de datos, mejorando la confiabilidad y escalabilidad para más de 500 usuarios diarios.
      \n Equilibré el mantenimiento de sistemas legacy en Svelte mientras construía la nueva aplicación, asegurando cero tiempo de inactividad.
      \n Me comunico con los fundadores y propongo formas de mejorar y acelerar los procesos de la empresa usando tecnología en cada paso.`,
    },
    en: {
      date: "Jul 2024 - Present",
      jobTitle: "Fullstack Developer and Designer",
      description: ` 
Led the refactor of a mobile-first React PWA enabling product sales, inventory orders, and data collection, improving reliability and scalability for 500+ daily users. 
      \n Balanced maintaining legacy systems in Svelte while building the new app, ensuring zero downtime.
      \n Communicate with the founders and propose ways of improving and speeding up the company's processes using technology in every step.
`,
    },
  },
  {
    companyTitle: "CreaApps",
    logo: CreaappsLogo,
    es: {
      date: "Feb 2023 - Jul 2024",
      jobTitle: "Desarrollador Fullstack y Diseñador",
      description: `Dirigí la arquitectura frontend (React) para una plataforma de membresías y CRM, asegurando escalabilidad y manejo rápido de datos para más de 1k usuarios activos.
      \n Lideré un equipo de 3 personas, mentoreando desarrolladores, desglosando requisitos en tareas claras y mejorando la velocidad del equipo en un 20%.
      \n Diseñé y lancé un flujo de UI/UX intuitivo que redujo la fricción de incorporación y aumentó la adopción de usuarios en un 40%.`,
    },
    en: {
      date: "Feb 2023 - Jul 2024",
      jobTitle: "Fullstack Developer and Designer",
      description: ` 
Owned the frontend architecture (React) for a membership and CRM platform, ensuring scalability and fast data handling for 1k+ active users.
      \n Led a 3-person team, mentoring developers, breaking down requirements into clear tasks, and improving team velocity by 20%.
      \n Designed and shipped an intuitive UI/UX flow that reduced onboarding friction and boosted user adoption by 40%.
`,
    },
  },
] as Experience[]
