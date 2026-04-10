import { SectionBase } from './SectionBase.js';

/**
 * @file EstrategiaSection.js
 * Sección del marco estratégico: DoR/DoD + pirámide de pruebas (Mermaid).
 */
export class EstrategiaSection extends SectionBase {
  get id() { return 'estrategia'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Marco Estratégico de Pruebas</h2>
        <p class="text-slate-400">Acuerdos y metodologías para una entrega de software estable.</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
          <div class="p-6 border-b border-slate-800 bg-slate-900">
            <h4 class="font-bold flex items-center gap-2">
              <i data-lucide="list-checks" class="text-blue-400"></i>
              Definition of Ready / Done
            </h4>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <h5 class="text-xs font-bold text-slate-500 uppercase mb-2">DoR (Para empezar)</h5>
              <ul class="text-sm space-y-1 text-slate-400">
                <li>✔ Criterios de aceptación definidos</li>
                <li>✔ Entorno técnico listo</li>
                <li>✔ Dependencias identificadas</li>
              </ul>
            </div>
            <hr class="border-slate-800">
            <div>
              <h5 class="text-xs font-bold text-slate-500 uppercase mb-2">DoD (Para terminar)</h5>
              <ul class="text-sm space-y-1 text-slate-400">
                <li>✔ Código revisado (Code Review)</li>
                <li>✔ Tests Unitarios (Min. 80% coverage)</li>
                <li>✔ Smoke tests en QA aprobados</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h4 class="font-bold mb-4 flex items-center gap-2 text-white">
            <i data-lucide="triangle" class="text-purple-400"></i> Pirámide de Pruebas
          </h4>
          <div class="mermaid">
graph TD
A(E2E - Pocos) --- B(Integración - Algunos)
B --- C(Unitarios - Muchos)
style C fill:#1e40af,stroke:#60a5fa
style B fill:#312e81,stroke:#818cf8
          </div>
          <p class="mt-4 text-xs text-slate-500 italic text-center">
            Invertir más en la base garantiza rapidez y bajo costo.
          </p>
        </div>
      </div>
    `;
  }
}
