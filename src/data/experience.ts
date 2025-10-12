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
      description: `Lideré la refactorización de una *PWA React* mobile-first para ventas, inventario y recolección de datos — mejorando la confiabilidad y escalabilidad para *más de 500 usuarios diarios*.
Mantuve y migré sistemas heredados de *Svelte + Supabase* con *cero tiempo de inactividad*.
Definí *contratos de API* entre frontend y backend, asegurando una clara validación e integración de datos.
Colaboré con los fundadores para *automatizar flujos de trabajo* y mejorar la *eficiencia del desarrollo.*`,
    },
    en: {
      date: "Jul 2024 - Present",
      jobTitle: "Fullstack Developer and Designer",
      description: `Led the refactor of a mobile-first *React PWA* for sales, inventory, and data collection — improving reliability and scalability for *500+ daily users*.
Maintained and migrated legacy **Svelte + Supabase** systems with *zero downtime*.
Defined frontend–backend *API contracts*, ensuring clear data validation and integration.
Partnered with founders to *automate workflows* and improve *development efficiency.*`

    },
  },
  {
    companyTitle: "CreaApps",
    logo: CreaappsLogo,
    es: {
      date: "Feb 2023 - Jul 2024",
      jobTitle: "Desarrollador Fullstack y Diseñador",
      description: `*Dirigí la arquitectura frontend* (React) para una plataforma de membresías y CRM, asegurando escalabilidad y manejo rápido de datos para *más de 1k usuarios activos*.
*Lideré un equipo de 3 personas*, mentoreando desarrolladores, desglosando requisitos en tareas claras y mejorando la velocidad del equipo en un 20%.
*Diseñé y lancé* un flujo de UI/UX intuitivo que redujo la fricción de incorporación y aumentó la adopción de usuarios en un 40%.`,
    },
    en: {
      date: "Feb 2023 - Jul 2024",
      jobTitle: "Fullstack Developer and Designer",
      description: `*Designed and developed* modular *frontend* components and scalable backend services *(React + Go Gin)*.
*Designed and implemented* secure *REST APIs* and reusable data components, improving scalability and maintainability.
*Led and mentored a 3-person team*, leading code reviews and implementing modern best practices.
*Created intuitive UI/UX* flows that reduced onboarding friction and increased user adoption.

`,
    },
  },
] as Experience[]
