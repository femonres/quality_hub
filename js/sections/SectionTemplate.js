import { SectionBase } from './SectionBase.js';

/**
 * @file SectionTemplate.js
 * Plantilla base para crear nuevas secciones del CMS.
 *
 * USO:
 * 1. Duplica este archivo y renómbralo (ej. MiNuevaSection.js).
 * 2. Cambia el nombre de la clase.
 * 3. Ajusta el getter `id` para que coincida con config/site.config.js.
 * 4. Personaliza `render()`.
 * 5. Si necesitas eventos o inicialización, usa `onActivate(sectionEl)`.
 */
export class SectionTemplate extends SectionBase {
  get id() { return 'template'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Título de tu nueva sección</h2>
        <p class="text-slate-400">Descripción breve de esta sección.</p>
      </header>

      <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
        <p class="text-slate-300">
          Reemplaza este contenido por tu implementación.
        </p>
      </div>
    `;
  }

  onActivate(sectionEl) {
    // Vincula eventos o inicializaciones específicas de la sección aquí.
    // Este hook se ejecuta cada vez que el usuario entra en esta sección.
    void sectionEl;
  }
}
