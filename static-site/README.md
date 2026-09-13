# El Paraíso de las Camas — sitio estático

Este proyecto reemplaza la versión anterior (TanStack Start / SSR, pensada para Cloudflare)
por un sitio estático simple: React + Vite, compilado a HTML/CSS/JS puros.
El resultado se sube directo a cPanel — no necesita Node ni servidor corriendo.

## Requisitos (una sola vez, en tu computador)

- Node.js 18 o superior instalado

## Cómo generar los archivos para subir

```bash
npm install
npm run build
```

Esto crea una carpeta `dist/` con todo el sitio ya compilado (HTML, CSS, JS, favicon, robots.txt).

## Cómo subir a cPanel

1. Entra a cPanel → **Administrador de archivos** (File Manager).
2. Ve a `public_html` (o la subcarpeta de tu dominio/subdominio).
3. Sube **todo el contenido** de la carpeta `dist/` (no la carpeta `dist` en sí, sino lo que está adentro: `index.html`, `assets/`, `favicon.ico`, `robots.txt`).
4. Visita tu dominio — listo.

También puedes subir por FTP con FileZilla si lo prefieres: mismo destino, mismo contenido de `dist/`.

## Cada vez que cambien contenido, precios o fotos

1. Edita `src/lib/catalog.ts` (productos, precios, fotos) o `src/lib/site-config.ts` (dirección, horario, WhatsApp).
2. Corre `npm run build` de nuevo.
3. Vuelve a subir el contenido de `dist/` a cPanel (reemplaza los archivos anteriores).

## Nota sobre las fotos actuales

Las fotos del sitio siguen alojadas en el CDN de Lovable (dominio `r2.dev`), referenciadas
en `src/assets/*.asset.json`. Funcionan igual que antes, pero para tener control total e
independencia de Lovable, lo ideal a futuro es subir las fotos propias a `public/` o a un
hosting de imágenes propio y actualizar esas referencias.
