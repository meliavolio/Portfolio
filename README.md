# Portfolio de Melisa Avolio — V2 local

Sitio estático en Next.js (App Router), React, TypeScript y Tailwind CSS. Preparado para una futura publicación en Vercel; esta iteración es solo local.

## Abrir en local

Con Node.js instalado, ejecutar `pnpm install` y `pnpm dev`. Abrir `http://localhost:3000`. También funcionan los scripts `pnpm lint` y `pnpm build`.

## Editar contenido

Todo el contenido editorial, fotografías, videos y enlaces configurables está en [`data/portfolio.ts`](data/portfolio.ts). La dirección visual V2 y sus acentos coral y azul están en [`app/visual-v2.css`](app/visual-v2.css); `app/globals.css` conserva la base de la V1.

El typewriter adaptado de 21st.dev está en `components/ui/typewriter.tsx`. El recorrido, también adaptado de 21st.dev, está en `components/ui/interactive-scrolling-story-component.tsx` y usa el scroll natural de la página.

Las portadas apiladas de “Trabajo seleccionado” están en `components/ui/display-cards.tsx` y toman sus textos, categorías y años de `selectedWork` en `data/portfolio.ts`. Al seleccionar una tarjeta se abre su detalle dentro de la misma sección. Los años de Redes Pop y Formaciones en IA figuran como “Por confirmar” hasta contar con una fecha precisa.

Los archivos originales de la raíz no fueron modificados. Las copias para el sitio están en `public/assets/`.

## Assets en uso

| Sección | Archivos |
| --- | --- |
| Hero | `hero-melisa-postits.jpg` |
| Recorrido | `recorrido-google-15.jpeg`, `recorrido-flacso.JPG`, `formacion-ia-periodistas.jpeg` |
| Trabajo seleccionado | `libro-estudio.jpg`, `formacion-aula.jpeg`, `digital-house.mp4` |
| Prueba social | `media-party.jpg`, `media-party2.mp4` |
| Libro | `libro-firma.jpg`, `libro-estudio.jpg`, `libro-presentación.jpg` |

Los videos son decorativos, mudos, en loop, y no se activan si la persona prefiere menos movimiento.

## Pendiente de contenido real

Agregar notas a `authoredArticles`, entrevistas a `mediaAppearances`, testimonios reales a `bookTestimonials`, y URLs verificadas de LinkedIn, CV u otras redes a `socialLinks`. Los registros de medios admiten medio, año, título, tema, miniatura opcional y enlace. También faltan logos oficiales si se quieren reemplazar los nombres tipográficos, y eventualmente una versión del retrato hero con el fondo tratado. `nerdearla.jpeg`, `recorrido-ciberseguridad.jpg` y `libro-público.jpg` quedaron disponibles, pero no se usan en esta composición.
