import { SectionBase } from './SectionBase.js';

/**
 * @file DocumentacionSection.js
 * Sección de ejemplo ya integrada en el CMS.
 */
export class DocumentacionSection extends SectionBase {
  get id() { return 'documentacion'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Documentación</h2>
        <p class="text-slate-400">Guía rápida para contribuir contenido al Quality Hub.</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h3 class="text-lg font-semibold mb-2 text-white">Flujo de contribución</h3>
          <p class="text-slate-400 text-sm mb-4">
            Sigue este flujo para añadir páginas o actualizar contenido sin romper la arquitectura modular.
          </p>
          <div class="mermaid">
flowchart LR
A[Crear archivo de sección] --> B[Agregar entrada en site.config.js]
B --> C[Registrar sección en app.js]
C --> D[Probar en servidor local]
          </div>
        </article>

        <article class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h3 class="text-lg font-semibold mb-2 text-white">Checklist mínimo</h3>
          <ul class="text-slate-300 text-sm space-y-2">
            <li>✔ Sección extiende SectionBase</li>
            <li>✔ id coincide con navegación</li>
            <li>✔ Contenido renderiza correctamente</li>
            <li>✔ Mermaid y Prism funcionan si aplica</li>
            <li>✔ Sin errores en consola del navegador</li>
          </ul>
        </article>
      </div>
    `;
  }
}
