import { SectionBase } from './SectionBase.js';

/**
 * @file HomeSection.js
 * Sección de inicio: hero banner + tarjetas de pilares.
 * Usa `data-navigate` para delegar la navegación al Router (DIP).
 */
export class HomeSection extends SectionBase {
  get id() { return 'home'; }

  render() {
    return /* html */`
      <div class="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-3xl p-10 relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-4xl font-bold mb-4">Bienvenido al Quality Engineering Hub</h2>
          <p class="text-slate-400 text-lg max-w-2xl mb-6">
            Esta plataforma es tu guía definitiva para navegar los estándares de ingeniería de calidad
            en el ecosistema de BTG Pactual. Aquí encontrarás procesos, herramientas y cultura compartida.
          </p>
          <button
            data-navigate="onboarding"
            class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2"
          >
            Comenzar Onboarding <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="absolute right-0 top-0 w-1/3 h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
          <div class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
            <i data-lucide="zap"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">Shift Left</h3>
          <p class="text-slate-500 text-sm">Integra la calidad desde el primer commit. No esperes a QA para encontrar errores.</p>
        </div>

        <div class="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
          <div class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
            <i data-lucide="box"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">Automatización</h3>
          <p class="text-slate-500 text-sm">Pruebas unitarias e integración como parte natural de tu flujo de CI/CD.</p>
        </div>

        <div class="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
          <div class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
            <i data-lucide="bar-chart"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">Resultados</h3>
          <p class="text-slate-500 text-sm">Mide tu impacto con KPIs compartidos: Cobertura, estabilidad y tiempos.</p>
        </div>
      </div>
    `;
  }
}
