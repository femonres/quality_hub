import { SectionBase } from './SectionBase.js';

/**
 * @file HomeSection.js
 * Sección de inicio: convocatoria a la excelencia.
 * Hero de alto impacto + manifiesto de 3 pilares + bloque de pertenencia.
 * Usa `data-navigate` para delegar la navegación al Router (DIP).
 */
export class HomeSection extends SectionBase {
  get id() { return 'home'; }

  render() {
    return /* html */`

      <!-- ── Hero: El Nuevo Estándar de Ingeniería ──────────────────────── -->
      <div class="relative bg-gradient-to-br from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-400/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-5%] top-[-20%] w-1/2 h-[150%] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-20%] w-1/3 h-[100%] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Amaris Consulting × BTG Pactual
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Transformando la Complejidad<br class="hidden md:block">
            en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Confianza</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
            En <strong class="text-white">Amaris Consulting</strong>, no solo escribimos código; blindamos el futuro digital de
            <strong class="text-white">BTG Pactual</strong>. Como socio estratégico, nuestra misión es elevar el estándar técnico
            a través de una cultura de ingeniería de alto rendimiento.
          </p>
          <button
            data-navigate="onboarding"
            class="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-[1.02]"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none"></span>
            Comienza tu Viaje de Excelencia
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- ── Manifiesto de los 3 Pilares ────────────────────────────────── -->
      <div>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold mb-2">El Manifiesto de los 3 Pilares</h3>
          <p class="text-slate-400">La base de nuestra cultura de ingeniería de alto rendimiento</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- A. Shift Left -->
          <div class="relative group bg-slate-950 border border-blue-500/30 p-7 rounded-2xl hover:border-blue-400/70 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 ring-1 ring-blue-500/20">
                <i data-lucide="zap" class="w-6 h-6"></i>
              </div>
              <p class="text-blue-400/80 text-sm italic mb-4">"Deja de perseguir errores; empieza a prevenirlos".</p>
              <h4 class="font-bold text-lg mb-0.5 text-white">Shift Left</h4>
              <p class="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">Calidad Anticipada</p>
              <p class="text-slate-400 text-sm mb-3">
                La excelencia comienza antes de la primera línea de código. No somos un equipo que espera a QA;
                somos desarrolladores que garantizan la estabilidad desde el origen.
              </p>
              <p class="text-slate-500 text-sm mb-5">
                Detectar fallos en el diseño y desarrollo reduce drásticamente el costo de corrección y acelera la entrega.
              </p>
              <div class="border-t border-slate-800 pt-4">
                <p class="text-xs text-blue-400 font-semibold tracking-wider">↗ ACCIÓN</p>
                <p class="text-slate-400 text-xs mt-1.5">
                  Implementa el <em>Definition of Ready</em> y valida cada lógica antes de que llegue al repositorio.
                </p>
              </div>
            </div>
          </div>

          <!-- B. Automatización -->
          <div class="relative group bg-slate-950 border border-purple-500/30 p-7 rounded-2xl hover:border-purple-400/70 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4 ring-1 ring-purple-500/20">
                <i data-lucide="bot" class="w-6 h-6"></i>
              </div>
              <p class="text-purple-400/80 text-sm italic mb-4">"Si es repetitivo, debe ser código".</p>
              <h4 class="font-bold text-lg mb-0.5 text-white">Automatización</h4>
              <p class="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">Eficiencia Implacable</p>
              <p class="text-slate-400 text-sm mb-3">
                La automatización es nuestro estándar, no una opción. Construimos redes de seguridad
                (unitarias, integración, E2E) que permiten innovar sin miedo a romper lo existente.
              </p>
              <p class="text-slate-500 text-sm mb-5">
                Reducimos el riesgo humano y los defectos en producción mediante pipelines robustos de CI/CD.
              </p>
              <div class="border-t border-slate-800 pt-4">
                <p class="text-xs text-purple-400 font-semibold tracking-wider">↗ ACCIÓN</p>
                <p class="text-slate-400 text-xs mt-1.5">
                  Ninguna funcionalidad está "terminada" si no incluye su respectiva suite de pruebas automatizadas.
                </p>
              </div>
            </div>
          </div>

          <!-- C. Resultados -->
          <div class="relative group bg-slate-950 border border-emerald-500/30 p-7 rounded-2xl hover:border-emerald-400/70 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4 ring-1 ring-emerald-500/20">
                <i data-lucide="bar-chart-2" class="w-6 h-6"></i>
              </div>
              <p class="text-emerald-400/80 text-sm italic mb-4">"Lo que no se mide, no mejora".</p>
              <h4 class="font-bold text-lg mb-0.5 text-white">Resultados</h4>
              <p class="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">Impacto Estratégico</p>
              <p class="text-slate-400 text-sm mb-3">
                Generamos valor a través de resultados medibles y transparentes. Nuestra meta es la continuidad
                operativa y la evolución tecnológica constante del cliente.
              </p>
              <p class="text-slate-500 text-sm mb-5">
                Aportamos estabilidad, reducimos el retrabajo y mejoramos los tiempos de respuesta del negocio.
              </p>
              <div class="border-t border-slate-800 pt-4">
                <p class="text-xs text-emerald-400 font-semibold tracking-wider">↗ ACCIÓN</p>
                <p class="text-slate-400 text-xs mt-1.5">
                  Sigue los KPIs de cobertura y ratio de defectos para demostrar la excelencia de tu trabajo.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ── Tu Huella en el Proyecto ────────────────────────────────────── -->
      <div class="relative bg-gradient-to-r from-indigo-950/60 via-slate-900 to-blue-950/60 border border-indigo-500/30 rounded-2xl p-8 overflow-hidden">
        <div class="absolute right-0 top-0 w-1/2 h-full bg-indigo-600/10 blur-[80px] pointer-events-none"></div>
        <div class="relative z-10 flex gap-5 items-start">
          <div class="flex-shrink-0 w-1 self-stretch bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
          <div>
            <p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">Tu Huella en el Proyecto</p>
            <p class="text-slate-200 text-lg leading-relaxed">
              Trabajar en un entorno multi-proveedor requiere más que talento técnico; requiere
              <strong class="text-white">liderazgo</strong>. Tu cumplimiento de estos lineamientos no solo mejora el
              software de <strong class="text-white">BTG Pactual</strong>, sino que establece el ritmo que otros seguirán.
              <strong class="text-blue-300">Eres el referente de calidad.</strong>
            </p>
          </div>
        </div>
      </div>

    `;
  }
}
