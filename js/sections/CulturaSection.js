import { SectionBase } from './SectionBase.js';

/**
 * @file CulturaSection.js
 * Sección de pilares culturales con diagrama Mermaid de flujo de trabajo.
 * El re-render de Mermaid lo gestiona el Router vía MermaidRenderer.
 */
export class CulturaSection extends SectionBase {
  get id() { return 'cultura'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Pilares de Nuestra Cultura</h2>
        <p class="text-slate-400">Cómo entendemos la calidad en Amaris Consulting dentro de BTG Pactual.</p>
      </header>

      <div class="space-y-6">
        <div class="flex gap-6 p-6 bg-slate-950 border border-slate-800 rounded-2xl">
          <div class="shrink-0 text-blue-400"><i data-lucide="fast-forward" class="w-8 h-8"></i></div>
          <div class="w-full">
            <h4 class="text-xl font-bold mb-2 text-white">Shift Left (Calidad desde el Origen)</h4>
            <p class="text-slate-400">
              Nuestro objetivo es detectar fallos en la fase de requisitos y desarrollo.
              Cuanto más cerca del código estemos, más barato es corregir.
            </p>
            <div class="mt-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
              <p class="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">Flujo de Trabajo</p>
              <div class="mermaid">
graph LR
A(Diseño) --> B(Desarrollo + Test)
B --> C(Merge)
C --> D(QA)
style B fill:#1e3a8a,stroke:#3b82f6
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-6 p-6 bg-slate-950 border border-slate-800 rounded-2xl">
          <div class="shrink-0 text-emerald-400"><i data-lucide="target" class="w-8 h-8"></i></div>
          <div>
            <h4 class="text-xl font-bold mb-2 text-white">Responsabilidad Individual</h4>
            <p class="text-slate-400">
              No delegamos la calidad a un equipo externo.
              El desarrollador es el primer y más importante filtro de QA.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
