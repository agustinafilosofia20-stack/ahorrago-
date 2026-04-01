# Ahorrago

Proyecto web desarrollado con **Next.js**, usando **MongoDB** para almacenar y gestionar datos financieros.  
Esta aplicación permite gestionar información de manera sencilla y está desplegada en **Vercel**.

## Archivos principales

- `src/` – Código fuente de la aplicación Next.js.  
- `public/` – Archivos públicos (favicon, imágenes, etc.).  
- `.gitignore` – Archivos ignorados por Git.  
- `package.json` y `package-lock.json` – Configuración y dependencias del proyecto.  
- `next.config.mjs` – Configuración de Next.js.  
- `jsconfig.json` y `eslint.config.mjs` – Configuración de proyecto y linter.  
- `README.md` – Documentación del proyecto.

## Cómo probar online

- **Vercel:** [https://ahorrago.vercel.app/](https://ahorrago.vercel.app/)  
> La aplicación se puede usar directamente en el navegador o **descargar y correr en tu escritorio**.

## Cómo correr localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/agustinafilosofia20-stack/ahorrago.git
Instalar dependencias:
npm install
# o yarn
# o pnpm install
Correr el servidor de desarrollo:
npm run dev
# o yarn dev
# o pnpm dev
# o bun dev
Abrir el navegador en:
http://localhost:3000

Notas
La aplicación se conecta a MongoDB para almacenar y gestionar los datos.
No subir información sensible; usar archivos de configuración locales según corresponda.
