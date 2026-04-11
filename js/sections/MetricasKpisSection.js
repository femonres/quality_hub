import { SectionBase } from './SectionBase.js';

/**
 * @file MetricasKpisSection.js
 * Módulo: Métricas y KPIs (Resultados Medibles).
 */
export class MetricasKpisSection extends SectionBase {
  get id() { return 'metricas-kpis'; }

  render() {
    return /* html */`
      <div class="relative bg-gradient-to-br from-emerald-950/55 via-slate-900 to-cyan-950/55 border border-emerald-500/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-8%] top-[-20%] w-1/2 h-[150%] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-25%] w-1/3 h-[120%] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-emerald-300 uppercase mb-5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Métricas y KPIs · Resultados Medibles
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Calidad Basada en Datos,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">Decisiones con Evidencia</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-4xl leading-relaxed">
            Nuestra estrategia de calidad no es una caja negra; es un modelo medible que habilita decisiones informadas,
            alineación con QA del cliente y mejora continua sostenida.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-6 lg:col-span-1">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded mb-4">1. El Valor de Medir</span>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Confianza Medible:</strong>
              generamos confianza con resultados trazables y verificables.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Transparencia Operativa:</strong>
              comunicación abierta sobre desempeño real del software.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Mejora Continua:</strong>
              ajustes de estrategia a partir de indicadores objetivos.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-cyan-500/25 rounded-2xl p-6 lg:col-span-2">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded mb-4">2. KPIs Sugeridos</span>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p class="text-xs text-cyan-300 font-semibold tracking-wider uppercase mb-2">Cobertura de Pruebas</p>
              <p class="text-sm text-slate-300">Porcentaje de código validado automáticamente por pruebas unitarias, integración y E2E.</p>
            </div>
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p class="text-xs text-cyan-300 font-semibold tracking-wider uppercase mb-2">Defectos en Producción</p>
              <p class="text-sm text-slate-300">Cantidad de incidencias críticas que superan filtros de QA y afectan al usuario final.</p>
            </div>
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p class="text-xs text-cyan-300 font-semibold tracking-wider uppercase mb-2">Tiempo de Corrección</p>
              <p class="text-sm text-slate-300">Agilidad para resolver incidencias desde identificación hasta despliegue.</p>
            </div>
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p class="text-xs text-cyan-300 font-semibold tracking-wider uppercase mb-2">Ratio de Defectos por Release</p>
              <p class="text-sm text-slate-300">Densidad de fallos identificados en relación con el volumen de cambios entregados.</p>
            </div>
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 md:col-span-2">
              <p class="text-xs text-cyan-300 font-semibold tracking-wider uppercase mb-2">Cumplimiento de Estándares</p>
              <p class="text-sm text-slate-300">Nivel de adherencia del código a reglas de análisis estático, seguridad y buenas prácticas.</p>
            </div>
          </div>
        </article>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-violet-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded mb-4">3. Dinámica de Seguimiento</span>
          <ol class="text-sm text-slate-300 space-y-3 list-decimal pl-5">
            <li><strong class="text-white">Alineación Inicial:</strong> definición conjunta de KPIs según necesidades del proyecto.</li>
            <li><strong class="text-white">Sincronización Periódica:</strong> revisión recurrente de indicadores para ajustar estrategia de pruebas.</li>
            <li><strong class="text-white">Identificación de Riesgos:</strong> detección preventiva de cuellos de botella de calidad.</li>
          </ol>
          <div class="mt-5 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div class="mermaid">
flowchart LR
    A[Alineación Inicial] --> B[Seguimiento Periódico]
    B --> C[Ajuste de Estrategia]
    C --> D[Reducción de Riesgos]
    D --> B

    style B fill:#312e81,stroke:#8b5cf6,color:#ede9fe
    style C fill:#1e1b4b,stroke:#a78bfa,color:#ede9fe
            </div>
          </div>
        </article>

        <article class="bg-slate-950 border border-amber-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded mb-4">4. Impacto en Valor al Cliente</span>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Reducción de defectos en producción:</strong>
              menor impacto negativo en la experiencia del usuario.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Mayor estabilidad en despliegues:</strong>
              entregas más predecibles y seguras.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Disminución de retrabajo:</strong>
              más foco en valor nuevo y menos tiempo en correcciones repetitivas.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Mejora en tiempos de entrega:</strong>
              aceleración del Time-to-Market con calidad automatizada.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Cultura de responsabilidad:</strong>
              equipo comprometido con excelencia técnica y resultados visibles.
            </li>
          </ul>
        </article>
      </div>
    `;
  }
}
