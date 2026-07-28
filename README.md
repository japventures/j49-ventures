# J49 — paquete de favicon

Este paquete agrega el símbolo del rombo J49 a un sitio existente sin reemplazar
ni modificar su `index.html`.

## Integración

1. Copia la carpeta `assets` de este paquete a la raíz de tu repositorio.
2. Abre el `index.html` existente.
3. Copia las etiquetas de `head-snippet.html` y pégalas dentro de `<head>`.
4. Publica los cambios en GitHub Pages.
5. Haz una recarga forzada o limpia la caché del navegador si el icono anterior
   continúa apareciendo.

Las rutas comienzan con `./`, por lo que funcionan tanto en un dominio propio como
en un sitio de proyecto de GitHub Pages, por ejemplo:
`usuario.github.io/nombre-del-repositorio/`.

## Contenido

- `favicon.ico`: incluye internamente 16×16, 32×32 y 48×48.
- PNG: 16×16, 32×32, 48×48, 180×180, 192×192 y 512×512.
- `apple-touch-icon.png`: 180×180.
- `site.webmanifest`: manifiesto web con iconos 192×192 y 512×512.
- `head-snippet.html`: etiquetas listas para pegar en el `<head>`.
