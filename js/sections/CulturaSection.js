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
      <div class="relative bg-gradient-to-br from-blue-950/55 via-slate-900 to-indigo-950/55 border border-blue-500/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-8%] top-[-20%] w-1/2 h-[150%] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-25%] w-1/3 h-[120%] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-blue-300 uppercase mb-5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Cultura de Calidad · Nuestros Pilares
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            No hacemos calidad,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">somos calidad</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-4xl leading-relaxed">
            En Amaris Consulting, la calidad no es una fase del proyecto ni un check al final del camino;
            es un <strong class="text-white">habilitador estratégico</strong> para continuidad operativa, eficiencia
            y evolución tecnológica del negocio.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-blue-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded mb-4">Pilar 1</span>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center ring-1 ring-blue-500/20">
              <i data-lucide="fast-forward" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-white">Shift Left: Calidad desde el Origen</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Anticipación:</strong>
              la calidad empieza incluso antes de la asignación al proyecto, validando mentalidad orientada a la excelencia.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Detección Temprana:</strong>
              identificamos fallos en requisitos y diseño; mientras más a la izquierda se detecte un error,
              menor su costo de corrección y mayor la estabilidad del software.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Pruebas Concurrentes:</strong>
              desarrollamos las pruebas junto con la funcionalidad, no después de ella.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded mb-4">Pilar 2</span>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center ring-1 ring-emerald-500/20">
              <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-white">Responsabilidad Individual (El Primer Filtro)</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Propiedad del Código:</strong>
              cada desarrollador tiene responsabilidad individual y absoluta sobre lo que entrega.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">El Desarrollador como QA:</strong>
              el consultor de Amaris es el primer y más importante filtro de aseguramiento de calidad.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Cultura de Responsabilidad:</strong>
              la excelencia técnica es un compromiso personal con el éxito del cliente.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Revisión Cruzada:</strong>
              el code review valida cobertura y calidad antes de cualquier integración.
            </li>
          </ul>
        </article>
      </div>

      <article class="bg-slate-950 border border-violet-500/25 rounded-2xl p-6">
        <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded mb-4">Pilar 3</span>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center ring-1 ring-violet-500/20">
            <i data-lucide="workflow" class="w-5 h-5"></i>
          </div>
          <h3 class="text-xl font-bold text-white">Flujo de Trabajo Integrado</h3>
        </div>
        <p class="text-slate-400 text-sm mb-4">
          Nuestra dinámica no separa Desarrollo de Calidad. Ambos conviven en un ciclo continuo de retroalimentación temprana.
        </p>
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div class="mermaid">
graph LR
    A[Diseño & DoR] --> B[Desarrollo + Unit Tests]
    B --> C[Code Review & Estáticos]
    C --> D[Merge & CI/CD]
    D --> E[Smoke Tests & QA Alignment]

    style B fill:#1e40af,stroke:#3b82f6,color:#fff
    style C fill:#1e40af,stroke:#3b82f6,color:#fff
          </div>
        </div>
      </article>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-amber-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded mb-4">Pilar 4</span>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-amber-500/10 text-amber-300 rounded-lg flex items-center justify-center ring-1 ring-amber-500/20">
              <i data-lucide="badge-check" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-white">Compromisos Innegociables</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Independencia Técnica:</strong>
              no dependemos de un equipo externo para saber si algo está mal; garantizamos que está bien desde origen.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Transparencia:</strong>
              comunicación abierta sobre riesgos de calidad identificados preventivamente.
            </li>
            <li class="border-l-2 border-amber-500/40 pl-4">
              <strong class="text-white">Mejora Constante:</strong>
              actualización obligatoria en frameworks y herramientas para sostener el estándar de excelencia.
            </li>
          </ul>
        </article>

        <article class="relative bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-2xl p-6 overflow-hidden">
          <div class="absolute right-[-15%] top-[-20%] w-1/2 h-[150%] bg-blue-500/10 blur-[90px] pointer-events-none rounded-full"></div>
          <div class="relative z-10">
            <p class="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-3">Llamado a la Acción</p>
            <p class="text-slate-200 leading-relaxed mb-4">
              Ser consultor de Amaris en BTG Pactual significa liderar con el ejemplo. Tu mayor aporte no es solo la funcionalidad,
              sino la <strong class="text-white">confianza</strong> que generas al ser el filtro más riguroso de tu propio trabajo.
            </p>
            <p class="text-slate-300 text-sm leading-relaxed">
              El éxito del cliente es reflejo directo de la calidad que mides y mejoras cada día.
              No solo entregamos código; entregamos confianza, estabilidad y resultados visibles.
            </p>
          </div>
        </article>
      </div>
    `;
  }
}
