import { SectionBase } from './SectionBase.js';

/**
 * @file ColaboracionSection.js
 * Placeholder para la sección de Colaboración QA.
 * Agregar contenido aquí sin tocar ningún otro archivo.
 */
export class ColaboracionSection extends SectionBase {
  get id() { return 'colaboracion'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Colaboración QA</h2>
        <p class="text-slate-400">Canales, ceremonias y acuerdos del equipo mixto de calidad.</p>
      </header>

      <div class="bg-slate-950 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-4">
        <div class="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center">
          <i data-lucide="users-2" class="w-8 h-8 text-slate-500"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-300">Contenido próximamente</h3>
        <p class="text-slate-500 max-w-sm">
          Esta sección está en construcción. El contenido de colaboración
          entre Amaris y BTG Pactual se publicará pronto.
        </p>
      </div>
    `;
  }
}
