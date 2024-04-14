type ExperienceInfo = {
  date: string
  jobTitle: string
  description: string
}

export type Experience = {
  companyTitle: string
  es: ExperienceInfo
  en: ExperienceInfo
}

export default [
  {
    companyTitle: "CreaApps",
    es: {
      date: "Junio 2023 - actualmente...",
      jobTitle: "Desarrollador Fullstack y Diseñador",
      description: `Encargado del *desarrollo* de una *cuenta de socios* para un club vacacional junto con un *CRM* permitiendo la facil actualizacion de la informacion en un *equipo de 2 desarrolladores.* 
      \n Unico responsable de *Diseñar* la UI de la aplicacion y el flujo del usuario, manteniendo el uso de la pagina *intuitivo y estetico* para el usuario final.
      \n *Migré* el Backend ya exitente hecho con JavaScript a *Go*.`,
    },
    en: {
      date: "June 2023 - now...",
      jobTitle: "Fullstack Developer and Designer",
      description: ` 
Responsible for the *development* of a *membership account* for a vacation club along with a *CRM* allowing for easy updating of information in a *team of 2 developers.* 
      \n Single responsible for *Design* the UI of the application and the user flow, keeping the use of the page *intuitive and aesthetic* for the end user.
      \n I *migrated* the existing JavaScript backend to *Go.*
`,
    },
  },
] as Experience[]
