# Guía de Desarrollo de OzyBase Landing Page (AGENTS.md)

Este documento contiene las convenciones y directrices de desarrollo para el proyecto de la Landing Page de OzyBase.

## Stack Tecnológico
- **Framework:** Next.js (React) con App Router.
- **Lenguaje:** TypeScript.
- **Estilos:** TailwindCSS (siguiendo el sistema de diseño Lumina Tech).
- **Iconos:** Lucide React o Material Symbols (SVG local/importación).

## Principios y Buenas Prácticas
1. **SOLID, DRY, KISS:**
   - Crear componentes pequeños y reutilizables en `src/components`.
   - Extraer lógica común a hooks o utilidades si se repite.
2. **Estilo Lumina Tech:**
   - Usar estrictamente la paleta de colores oscuros con acento Neon Lime (`#D2F20B`).
   - Respetar espaciados múltiplos de 4px.
3. **Manejo de Cambios:**
   - Realizar commits incrementales tras completar cada componente funcional.
   - Seguir Conventional Commits (e.g., `feat: add navbar component`, `fix: adjust mobile responsive styles`).
4. **Seguridad:**
   - Validar y sanitizar las entradas del formulario de contacto.
