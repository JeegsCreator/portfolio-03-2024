## Acerca de Openversum

! Muchos screenshots o diagramas no pueden mostrarse por NDA

[Openversum](https://www.openversum.com/es) es una empresa de impacto (Social Enterprise) de origen Suizo con presencia en latinoamérica cuya misión es hacer que las tecnologías de agua limpia sean asequibles y accesibles. 

Esto lo logran bajo un Modelo de agente comunitario (Village Entrepreneur Model), Openversum proveé el producto (Filtro de agua Openversum) y la plataforma (Openversum App) de manejo de inventario y ventas.

> En Openversum, proporcionamos sistemas de filtración asequibles y fáciles de usar que garantizan el acceso a agua limpia para todos. Nuestro modelo empodera a emprendedores locales a construir negocios sostenibles que generan ingresos y ofrecen soluciones de agua limpia que transforman vidas en sus comunidades. Juntos, estamos creando soluciones duraderas que promueven una vida más saludable y fortalecen las economías locales.

## Estado inicial de la empresa

En Julio de 2024 entro a Openversum como Fullstack Developer, la empresa contaba con 3 prototipos de aplicaciones: Entrepreneur, Admin y eLearning. Las 3 aplicaciones se basaban en Supabase como Backend-as-a-Service y SvelteKit como framework de frontend.

Entrepreneur: Es la aplicación de gestión de inventario y ventas de filtros de agua. Permite a los usuarios registrarse, hacer pedidos de inventario, gestionar el inventario, reportar ventas y pagar las deudas a Openversum.

Admin: Es la aplicación de administración de Openversum. Permite a los managers de la empresa gestionar los usuarios, manejar pedidos de inventario y en general gestionar las responsabilidades del manager con los entrepreneurs que tiene asignados.

eLearning: Es la aplicación de aprendizaje en línea para los emprendedores de Openversum. Esto como un filtro de reclutamiento de entrepreneurs a la vez que el entrenamiento. Explica como funciona el filtro, como maximizar ventas y porque es necesario un filtro de agua.

## Los problemas

### Las aplicaciones actuales fueron desarrolladas como prototipos pero tenian usuarios reales.

Las 3 aplicaciones fueron desarrolladas en poco tiempo como prototipos, utilizando un sistema poco escalable, poco seguro y poco mantenible,
ademas de un diseño frontend poco intuitivo y poco profesional. Pero aún así teninan usuarios reales y dependientes de estas. Sobretodo de entrepreneur ya que los managers tomaron el rol de tutores (eLearning) y los programadores de lo que la aplicación Admin no podía hacer. Entonces simplemente bajar y no usar los prototipos no era una opcion.

#### La solución

Mi compañero y yo propusimos como la mejor solución, darle mantemimiento a las 3 aplicaciones actuales de forma que no dieran tantos problemas mientras volviamos a desarrollarlas en paralelo con un sistema mantenible, escalable y seguro.

Así terminamos dando mantinimento y desarrollando varias aplicaciones al mismo tiempo. Al principio se le dio prioridad al mantenimiento y limpieza del prototipo solucionando los problemas mas graves de la forma mas rapida posible pero sin crear problemas nuevos, pero de apoco la prioridad se fue moviendo al nuevo desarrollo.

Naturalmente por nuestra experiencia y fuertes individuales, yo tome el rol de desarrollador frontend y diseñarod UX/UI mientras mi compañero toma el rol de desarrollador backend y devops.

La solución se baso en un mantenimiento intensivo de la aplicacion de Entrepreneur, cambiando su diseño lo suficiente para que no tenga problemas de usabilidad y mantenibilidad pero sin ser muy tardado en desarrollar ya que ibamos a migrar en un futuro a las nuevas aplicaciones.

Para las nuevas aplicaciones propuse usar Astro como framework frontend para la aplicación de Entrepreneur y Next.js como framework de frontend para la aplicación de Admin. El eLearning se mantuvo en SvelteKit ya que no se vio como prioridad de desarrollo.

Astro nos ayudaba sobretodo a que la aplicación fuera liviana lo cual ayuda con el [siguiente problema](#los-emprendedores-viven-en-zonas-rurales-y-no-tienen-acceso-a-internet-estable-en-todo-el-país)

Next.js ya es estandar de la industria y su gran comunidad y cantidad de librerias nos ayudarian a tener mas interactividad para problemas complejos que iba a tener la aplicacion de Admin.

![Diseño de la aplicacion](Una comparacion del rediseño del prototipo de la aplicacion de emprendedor y la aplicacion de emprendedor actual de Openversum.png)


### Los emprendedores viven en zonas rurales y no tienen acceso a Internet estable en todo el país.

Esto es un gran problema ya que parte de lo que hace a Openversum posible es su aplicación. A la conclusion que llegamos es que la aplicacion debia funcionar offline, guardando los cambios en local y sincronizando los cambios con la base de datos en la nube en cuanto se tenga acceso a internet.

#### La solución

El problema lo resolvimos en dos partes. Primero, hacer la aplicacion un PWA para que se pueda descargar y se pueda tener un cache local de los datos y así poder acceder a la aplicación sin problemas.

Segundo, Definimos el alcance y el diseño de un sistema de sincronizacion de datos. Este sistema esta basado en una cola de requests que al detectar conexion a internet enviaria los datos uno a uno para evitar corrupcion de datos, en caso de error la cola se detendria hasta recibir input del usuario para reintentar. Y en caso de que hubieran conflictos o errores, el manager seria el encargado de resolverlos.

El sistema era mucho mas complejo de lo que estoy describiendo ya que es un proceso delicado y complejo, por eso se diseño en un diagrama de flujo que no puedo mostrar por NDA.

### Los usuarios suelen ser personas no familiarizadas con tecnología.

Esto presentaba un gran reto como diseñador UX/UI, ya que la aplicación necesitaba ser poderosa pero al mismo tiempo no ser muy complicada.
El diseño de toda la aplicacion tenia que ser intuitivo para que incluso los usuarios mas complicados puedan aprender a usar la aplicacion de forma eficiente. Esto llega a tal punto que los emprendedores no tenian correo electronico, y olvidaban constantemente las contraseñas, haciendonos repensar el sistema de autenticacion.

#### La solución

En primera parte intentamos basar nuestra aplicacion en diseños y flujos ya conocidos por los usuarios, en especial nos basamos en Nequi al ser una aplicación bastante popular en Colombia, lugar donde primero se iba a usar el filtro de agua Openversum.

Sobretodo tomamos los botones en la parte de abajo, el header con informacion relevante en grande y una seccion de acciones rapidas donde reunimos los flujos mas comunes de la aplicacion.

A la izquierda está el diseño de Nequi y a la derecha la aplicacion de emprendedor de Openversum.
![Diseño de la aplicacion](Una comparacion de Nequi y la aplicacion de emprendedor de Openversum.png)

Pero eso no fue suficiente, otro problema que nos encontramos de primera mano en una excursion donde pudimos ver de primera mano como los usuarios usaban la aplicacion que la gran cantidad de datos que manejaba la aplicacion los congelaba y no sabian que hacer.

Para esto, dividimos en pasos las partes de la aplicacion que mas datos manejaban. Haciendo que en la pantalla solo apareciera una pregunta en lenguaje natural (en lugar de una label ya que era poco intuitiva), un input grande donde responder y botones de "atras" y "siguiente" para avanzar y retrasar.

Tambien cualquier informacion que no era 100% necesaria que el usuario la manejara, los managers se encargarian de manejar. Ademas de responder directamente por whatsapp a cualquier duda o error que los emprendedores tuvieran.

Movimos tambien nuestro sistema de autenticacion de usar correo electronico y contraseña, a usar el numero de telefono y especificamente whatsapp para enviar un codigo OTP para iniciar sesion.



## Excursion

En Marzo de 2025, la empresa organizo un viaje a Cartagena, Colombia, lugar donde ya se estaba usando el filtro de agua Openversum y la aplicacion de emprendedor de Openversum.

El viaje tenia como objetivo que el equipo de desarrollo entendiera de primera mano el problema del accceso al agua limpia en zonas rurales y los problemas que tenian los emprededores usando la aplicacion de Openversum. Ademas de que todo el equipo de openversum se conociera en persona y celebrara el avance de la empresa.

Visitamos a dos emprendedores de la zona yo acompañando a los managers mientras entregaban un cargo de inventario. Principalmente recuerdo a Doña Marta, ya que a ella toco ayudarle a iniciar sesion en la aplicacion ya que no recordaba ni su correo electronico ni su contraseña y todo el proceso fue lleno de dudas para Doña Marta.

Especialmente al momento de pedir inventario, al necesitar tanta informacion y el diseño de la aplicacion en el momento ser un formulario super basico, Doña Marta simplemente no podia entender que hacer y como llenar el formulario.

![Viaje a Cartagena](Viaje a Cartagena.png)


## Estado final de la empresa

Cuando deje la empresa, la nueva aplicacion de emprendedor estaba a punto de resivir sus primeros usuarios reales. El backend hecho por mi compañero estaba funcional y la aplicacion de adminitrador tenia sus features principales ya implementadas. 

En general fue un proyecto bastante satisfactorio, pude aprender demasiado al solucionar problemas complejos y unicos que no habia visto y no he visto en otros proyectos hasta ahora. Y ademas fue un proyecto en el que aporte una aplicación lista para sus primeros usuarios reales, construida desde cero sobre una arquitectura que el equipo puede mantener y escalar.

