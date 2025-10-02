type CardInfo = {
  title: string
  description: string
}

export type Card = {
  es: CardInfo
  en: CardInfo
}

export default [
  {
    en: {
      title: "Design First",
      description:
        "I take priority on designing the product as intuitive as possible, making it easier to use and feel professional as it should.",
    },
    es: {
      title: "Diseño Primero",
      description:
        "Tomo prioridad en diseñar el producto como sea intuitivo como sea posible, haciendo que sea mas facil de usar y sentir profesional como deberia.",
    },
  },
  {
    en: {
      title: "Ownership motivated",
      description:
        "In any project I try to own it by giving my own input in what should the project be like and try to get to what the client wants.",
    },
    es: {
      title: "Motivado por propiedad",
      description:
        "En cualquier proyecto intento ser dueño de él, dando mi propia entrada en lo que debería ser el proyecto y tratando de llegar a lo que el cliente quiere.",
    },
  },
  {
    en: {
      title: "Best Practices",
      description:
        "Any mistake or lousy work will always come back later and slow us down. So I like building with the best practice from the start.",
    },
    es: {
      title: "Mejores Prácticas",
      description:
        "Construir software es dificil, cualquier error o mal trabajo siempre llegará más tarde. Así que me gusta construir",
    },
  },
] as Card[]
