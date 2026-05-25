# Openversum — Case Study (EN + ES)

---

# ENGLISH VERSION

---

## TL;DR

I joined Openversum — a Swiss social enterprise bringing clean water to rural Latin America — as their only frontend developer. I inherited three unstable prototype apps with real users depending on them, and left behind two production-ready applications built from scratch: a redesigned entrepreneur app about to receive its first real users, and a functional admin platform. Along the way I solved three problems that most developers never face: apps that need to work without internet, users who don't know what email is, and interfaces complex enough to manage inventory but simple enough for someone who's never used a smartphone.

---

## The Company

[Openversum](https://www.openversum.com) is a Swiss social enterprise with operations in Latin America. Their mission: make clean water technology affordable and accessible to communities that don't have it.

The way they do it is through a Village Entrepreneur Model. Openversum equips local community members — entrepreneurs — with water filters to sell and a mobile app to manage their business: inventory orders, sales reporting, debt payments to Openversum. The app isn't a nice-to-have. It's the infrastructure that makes the whole model work.

---

## Where I Started

I joined in July 2024 as a Full Stack Developer, but quickly settled into the role I was most needed in: frontend development and UX/UI design.

What I walked into was a common early-stage startup situation, but with unusually high stakes. The company had three apps — Entrepreneur, Admin, and eLearning — all built quickly as prototypes on Supabase and SvelteKit. The problem: they had real users depending on them. Especially the Entrepreneur app, where managers had started filling in the gaps manually — acting as tutors, tech support, and workarounds — because the app couldn't handle everything it needed to.

Simply shutting down the prototypes wasn't an option. People's livelihoods were attached to these tools.

My colleague and I assessed the situation and proposed a two-track strategy: maintain and stabilize the existing apps so they stopped causing active harm, while building the new versions in parallel on a proper architecture. We'd shift priority gradually from maintenance to new development as we got the fires under control.

By default of our strengths, I owned frontend and design. My colleague owned backend and DevOps.

For the new apps, I proposed Astro for the Entrepreneur app (lightweight, critical for low-connectivity environments) and Next.js for Admin (industry-standard ecosystem, better suited for complex interactivity). The eLearning app wasn't prioritized for a full rebuild.

---

## The Challenges

### Challenge 1 — The app needs to work without internet

**The problem**

Openversum's entrepreneurs live in rural areas across Colombia. Reliable internet isn't a given — it's often nonexistent. But the entire business model depends on the app being usable. If the app doesn't load, the entrepreneur can't place orders, report sales, or track inventory. The business stalls.

This wasn't a hypothetical edge case. It was the daily reality of the people we were building for.

**The solution**

I broke this into two parts.

First: make the app a PWA (Progressive Web App). This means entrepreneurs can install it directly from their browser — no app store, no account needed — and access cached data even when offline.

Second: design a data synchronization system. This was the harder part. When an entrepreneur makes changes offline, those changes need to eventually reach the cloud database without corrupting existing data or creating conflicts. We designed a request queue system: when connectivity returns, the app sends pending requests one by one. If one fails, the queue pauses and waits for user input before retrying — no silent data loss, no cascading errors. Conflicts and errors that couldn't be auto-resolved would get flagged for the assigned manager to handle.

The full sync system is significantly more complex than this summary — we documented it in a detailed flow diagram — but the core design principle was conservative: prefer slower and safe over fast and risky.

---

### Challenge 2 — The users aren't tech-savvy

**The problem**

The entrepreneurs using this app are often people with minimal exposure to smartphones or digital interfaces. That's not a criticism — it's a design constraint that completely changes how you think about UX.

The prototype we inherited had basic web forms: labels, inputs, submit buttons. Standard stuff. The problem is that "standard" assumed a baseline of digital literacy that many of our users didn't have. During a field trip to Cartagena in March 2025 — where the team visited real entrepreneurs using the app — I saw this firsthand. One entrepreneur, Doña Marta, couldn't remember her email or password. The login process alone became a multi-minute frustration. When it came time to place an inventory order, the form layout paralyzed her. She didn't know where to start.

That trip recalibrated everything.

**The solution**

I approached the redesign with one reference point: Nequi. It's one of the most widely used financial apps in Colombia, which means many of our users were already familiar with its patterns — bottom navigation, large header with key info, quick-action shortcuts to the most common flows. I borrowed that structure deliberately, not aesthetically. The goal was to reduce the cognitive distance between something they already knew and something new.

For flows that required a lot of information — like placing an inventory order — I broke the interface into single-screen steps. Instead of a form with ten fields, the user sees one question at a time, written in plain conversational language ("How many filters do you want to order?"), with a large input and Previous / Next navigation. One question. One answer. Move on.

Anything that wasn't strictly necessary for the entrepreneur to manage directly, we moved to the manager's responsibility.

And for authentication: we replaced email + password with phone number + WhatsApp OTP. No email account needed. No password to forget. The entrepreneur receives a code on WhatsApp — an app they already use daily — and logs in. Simple, familiar, reliable.

---

### Challenge 3 — The prototypes had real users and couldn't just be replaced

**The problem**

This wasn't a greenfield project. The existing apps had real users, real dependencies, and real managers who had built workflows around their limitations. A hard cutover — "the old app is gone, use the new one" — was off the table.

The prototypes were also built with patterns that made them fragile: difficult to maintain, hard to extend, and with a frontend that was functional but not intuitive enough for the user base. Every change risked breaking something else.

**The solution**

The maintenance track came first. Before writing a single line of the new apps, my colleague and I triaged the most critical issues in the prototypes and fixed them in the least invasive way possible. The goal wasn't to refactor everything — it was to stop the bleeding.

On the Entrepreneur prototype specifically, I redesigned the interface enough to remove the most damaging usability problems, without making changes so large they'd introduce new bugs or delay the real work. It was a careful calibration: improve without destabilizing.

As the prototypes stabilized, we shifted priority to the new builds. The new Entrepreneur app was built on Astro, chosen specifically for its lightweight output — important when you're targeting users with slow or intermittent connections. The new Admin app was built on Next.js, which gave us a mature ecosystem and better tooling for the more complex, data-heavy workflows managers needed.

---

## What I Left Behind

When I wrapped up at Openversum, this is what existed:

**New Entrepreneur App** — Built from scratch on Astro. PWA-enabled with offline support and a synchronized data queue. Redesigned UX based on Nequi's navigation patterns and step-by-step form flows. WhatsApp OTP authentication replacing email/password. Ready to receive its first real users.

**New Admin App** — Built on Next.js. Core features implemented and functional. Backend fully operational (built by my colleague). Equipped for managers to handle inventory, user management, and conflict resolution from the sync system.

**Maintained Prototypes** — Stabilized and kept running throughout the transition, so no real users were disrupted while the new versions were being built.

**Sync Architecture** — Designed and documented: a queue-based offline-to-cloud synchronization system built for low-connectivity environments, with error handling and manager-level conflict resolution.

---

---

# VERSIÓN EN ESPAÑOL

---

## Resumen

Me uní a Openversum — una empresa de impacto social suiza que lleva agua limpia a zonas rurales de latinoamérica — como su único desarrollador frontend. Heredé tres aplicaciones prototipo inestables con usuarios reales dependiendo de ellas, y dejé atrás dos aplicaciones listas para producción construidas desde cero: una aplicación de emprendedor rediseñada a punto de recibir sus primeros usuarios reales, y una plataforma de administración funcional. En el camino resolví tres problemas que la mayoría de los desarrolladores nunca enfrentan: aplicaciones que deben funcionar sin internet, usuarios que no saben qué es el correo electrónico, e interfaces lo suficientemente complejas para gestionar inventario pero lo suficientemente simples para alguien que nunca ha usado un smartphone.

---

## La empresa

[Openversum](https://www.openversum.com/es) es una empresa de impacto social suiza con operaciones en América Latina. Su misión: hacer que las tecnologías de agua limpia sean asequibles y accesibles para comunidades que no tienen acceso a ellas.

Lo logran a través de un Modelo de Agente Comunitario. Openversum equipa a miembros locales de la comunidad — emprendedores — con filtros de agua para vender y una aplicación móvil para gestionar su negocio: pedidos de inventario, reporte de ventas, pagos de deuda a Openversum. La aplicación no es un complemento agradable. Es la infraestructura que hace posible todo el modelo.

---

## El punto de partida

Me uní en julio de 2024 como Full Stack Developer, pero rápidamente me asenté en el rol donde más se me necesitaba: desarrollo frontend y diseño UX/UI.

Lo que encontré fue una situación típica de startup en etapa temprana, pero con apuestas inusualmente altas. La empresa tenía tres aplicaciones — Entrepreneur, Admin y eLearning — todas construidas rápidamente como prototipos sobre Supabase y SvelteKit. El problema: tenían usuarios reales dependiendo de ellas. Especialmente la app de Entrepreneur, donde los managers habían empezado a llenar los vacíos manualmente — actuando como tutores, soporte técnico y parches — porque la aplicación no podía manejar todo lo que necesitaba.

Simplemente apagar los prototipos no era una opción. El sustento de personas estaba atado a estas herramientas.

Mi compañero y yo evaluamos la situación y propusimos una estrategia de dos vías: mantener y estabilizar las aplicaciones existentes para que dejaran de causar daño activo, mientras construíamos las nuevas versiones en paralelo sobre una arquitectura adecuada. Iríamos desplazando la prioridad gradualmente del mantenimiento al nuevo desarrollo a medida que controláramos los incendios.

Por defecto de nuestras fortalezas, yo lideré el frontend y el diseño. Mi compañero lideró el backend y DevOps.

Para las nuevas apps, propuse Astro para la app de Entrepreneur (liviana, crítico para entornos con baja conectividad) y Next.js para Admin (ecosistema estándar de la industria, mejor adaptado para interactividad compleja). La app de eLearning no fue priorizada para una reconstrucción completa.

---

## Los retos

### Reto 1 — La aplicación debe funcionar sin internet

**El problema**

Los emprendedores de Openversum viven en zonas rurales de Colombia. El internet confiable no es algo garantizado — muchas veces simplemente no existe. Pero todo el modelo de negocio depende de que la aplicación sea usable. Si la app no carga, el emprendedor no puede hacer pedidos, reportar ventas ni rastrear inventario. El negocio se detiene.

Esto no era un caso extremo hipotético. Era la realidad cotidiana de las personas para quienes estábamos construyendo.

**La solución**

Dividí esto en dos partes.

Primero: convertir la app en una PWA (Progressive Web App). Esto significa que los emprendedores pueden instalarla directamente desde su navegador — sin tienda de apps, sin cuenta necesaria — y acceder a datos en caché incluso sin conexión.

Segundo: diseñar un sistema de sincronización de datos. Esta fue la parte más difícil. Cuando un emprendedor hace cambios sin conexión, esos cambios necesitan eventualmente llegar a la base de datos en la nube sin corromper datos existentes ni generar conflictos. Diseñamos un sistema de cola de requests: cuando regresa la conectividad, la app envía las solicitudes pendientes una por una. Si una falla, la cola se pausa y espera input del usuario antes de reintentar — sin pérdida silenciosa de datos, sin errores en cascada. Los conflictos y errores que no pudieran resolverse automáticamente quedarían marcados para que el manager asignado los gestionara.

El sistema de sincronización completo es significativamente más complejo que este resumen — lo documentamos en un diagrama de flujo detallado — pero el principio de diseño central era conservador: preferir lento y seguro sobre rápido y riesgoso.

---

### Reto 2 — Los usuarios no están familiarizados con la tecnología

**El problema**

Los emprendedores que usan esta app son frecuentemente personas con poca exposición a smartphones o interfaces digitales. No es una crítica — es una restricción de diseño que cambia completamente cómo se piensa el UX.

El prototipo que heredamos tenía formularios web básicos: labels, inputs, botones de envío. Lo estándar. El problema es que "lo estándar" asumía una línea base de alfabetización digital que muchos de nuestros usuarios no tenían. Durante una visita de campo a Cartagena en marzo de 2025 — donde el equipo visitó a emprendedores reales usando la app — vi esto de primera mano. Una emprendedora, Doña Marta, no recordaba su correo ni su contraseña. El proceso de inicio de sesión solo se volvió una frustración de varios minutos. Cuando llegó el momento de hacer un pedido de inventario, el formulario la paralizó. No sabía por dónde empezar.

Ese viaje recalibró todo.

**La solución**

Abordé el rediseño con un punto de referencia: Nequi. Es una de las apps financieras más usadas en Colombia, lo que significa que muchos de nuestros usuarios ya estaban familiarizados con sus patrones — navegación inferior, header grande con información clave, accesos rápidos a los flujos más comunes. Tomé esa estructura deliberadamente, no estéticamente. El objetivo era reducir la distancia cognitiva entre algo que ya conocían y algo nuevo.

Para los flujos que requerían mucha información — como hacer un pedido de inventario — dividí la interfaz en pasos de una sola pantalla. En lugar de un formulario con diez campos, el usuario ve una pregunta a la vez, escrita en lenguaje conversacional simple ("¿Cuántos filtros quieres pedir?"), con un input grande y navegación de Anterior / Siguiente. Una pregunta. Una respuesta. Avanzar.

Todo lo que no era estrictamente necesario que el emprendedor gestionara directamente, lo trasladamos a responsabilidad del manager.

Y para la autenticación: reemplazamos email + contraseña con número de teléfono + OTP por WhatsApp. Sin necesidad de cuenta de correo. Sin contraseña que olvidar. El emprendedor recibe un código en WhatsApp — una app que ya usa a diario — e inicia sesión. Simple, familiar, confiable.

---

### Reto 3 — Los prototipos tenían usuarios reales y no podían simplemente reemplazarse

**El problema**

Este no era un proyecto desde cero. Las aplicaciones existentes tenían usuarios reales, dependencias reales, y managers que habían construido flujos de trabajo alrededor de sus limitaciones. Una transición forzada — "la app vieja ya no existe, usa la nueva" — estaba descartada.

Los prototipos también estaban construidos con patrones que los hacían frágiles: difíciles de mantener, difíciles de extender, y con un frontend funcional pero no lo suficientemente intuitivo para la base de usuarios. Cada cambio arriesgaba romper algo más.

**La solución**

La vía de mantenimiento fue primero. Antes de escribir una sola línea de las nuevas apps, mi compañero y yo triamos los problemas más críticos en los prototipos y los corregimos de la manera menos invasiva posible. El objetivo no era refactorizar todo — era detener el sangrado.

En el prototipo de Entrepreneur específicamente, rediseñé la interfaz lo suficiente como para eliminar los problemas de usabilidad más graves, sin hacer cambios tan grandes que introdujeran nuevos bugs o retrasaran el trabajo real. Era una calibración cuidadosa: mejorar sin desestabilizar.

A medida que los prototipos se estabilizaron, desplazamos la prioridad a las nuevas construcciones. La nueva app de Entrepreneur fue construida en Astro, elegida específicamente por su output liviano — importante cuando apuntas a usuarios con conexiones lentas o intermitentes. La nueva app de Admin fue construida en Next.js, que nos dio un ecosistema maduro y mejores herramientas para los flujos más complejos y cargados de datos que los managers necesitaban.

---

## Lo que dejé atrás

Cuando terminé en Openversum, esto es lo que existía:

**Nueva app de Entrepreneur** — Construida desde cero en Astro. Habilitada como PWA con soporte offline y cola de sincronización de datos. UX rediseñada basada en los patrones de navegación de Nequi y flujos de formularios paso a paso. Autenticación por OTP de WhatsApp reemplazando email/contraseña. Lista para recibir sus primeros usuarios reales.

**Nueva app de Admin** — Construida en Next.js. Features principales implementadas y funcionales. Backend completamente operacional (desarrollado por mi compañero). Equipada para que los managers gestionen inventario, usuarios y resolución de conflictos del sistema de sincronización.

**Prototipos mantenidos** — Estabilizados y en funcionamiento durante toda la transición, para que ningún usuario real fuera interrumpido mientras se construían las nuevas versiones.

**Arquitectura de sincronización** — Diseñada y documentada: un sistema de sincronización offline-a-nube basado en colas, construido para entornos de baja conectividad, con manejo de errores y resolución de conflictos a nivel de manager.