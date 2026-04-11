import { SectionBase } from './SectionBase.js';

/**
 * @file ConsultorExitosoSection.js
 * Módulo: El Consultor Exitoso (Impacto en Equipos Mixtos).
 */
export class ConsultorExitosoSection extends SectionBase {
  get id() { return 'consultor-exitoso'; }

  render() {
    return /* html */`
      <!-- ── Hero / Visión ─────────────────────────────────────────────── -->
      <div class="relative bg-gradient-to-br from-amber-950/50 via-slate-900 to-blue-950/50 border border-amber-500/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-8%] top-[-20%] w-1/2 h-[150%] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-30%] w-1/3 h-[120%] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-amber-300 uppercase mb-5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            El Consultor Exitoso · Impacto en Equipos Mixtos
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Más allá del Talento,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">un Socio Estratégico</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Ser un consultor exitoso implica entender que la calidad no es una fase, sino un habilitador para el negocio.
            Tu objetivo es convertirte en un socio que fortalezca el modelo de calidad del cliente, generando confianza
            a través de resultados medibles.
          </p>
        </div>
      </div>

      <!-- ── Bloques de impacto ─────────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-blue-500/25 rounded-2xl p-7 hover:border-blue-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center ring-1 ring-blue-500/20">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Liderazgo por Ejecución</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">En equipos compartidos, tu código y tu ética de trabajo establecen el estándar.</p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Propiedad del Código:</strong>
              Actúa con total responsabilidad sobre cada línea entregada, garantizando que el software sea estable y de alta calidad desde el origen.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Referente Técnico:</strong>
              Aplica rigurosamente las pruebas unitarias, de integración y la automatización para elevar el nivel de exigencia de quienes te rodean.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Cultura de Mejora:</strong>
              Promueve activamente la mejora continua y la capacitación constante dentro de tu equipo asignado.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-cyan-500/25 rounded-2xl p-7 hover:border-cyan-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center ring-1 ring-cyan-500/20">
              <i data-lucide="messages-square" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Comunicación de Impacto y Sincronización</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">La visibilidad de tu trabajo depende de cómo te comunicas con los actores clave del proyecto.</p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Sincronización con QA:</strong>
              Genera una alineación constante con el equipo de QA del cliente para establecer dinámicas de colaboración de valor sostenido.
            </li>
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Feedback Temprano:</strong>
              Identifica y comunica preventivamente los riesgos de calidad en diseño y desarrollo, aplicando un enfoque Shift Left.
            </li>
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Transparencia Radical:</strong>
              Mantén una comunicación abierta, honesta y transparente sobre el progreso de pruebas y cumplimiento de estándares.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-violet-500/25 rounded-2xl p-7 hover:border-violet-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center ring-1 ring-violet-500/20">
              <i data-lucide="compass" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Navegación y Adaptabilidad en BTG Pactual</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">Integrarte al ecosistema del cliente sin perder nuestra identidad de calidad es clave para el éxito.</p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-violet-500/40 pl-4">
              <strong class="text-white">Alineación Metodológica:</strong>
              Adáptate y domina las metodologías (Scrum, Kanban, SAFe) y herramientas corporativas que el cliente utiliza.
            </li>
            <li class="border-l-2 border-violet-500/40 pl-4">
              <strong class="text-white">Definición de Compromisos:</strong>
              Asegura que criterios de aceptación y <em>Definition of Done</em> estén alineados con estándares de calidad.
            </li>
            <li class="border-l-2 border-violet-500/40 pl-4">
              <strong class="text-white">Enfoque en Valor:</strong>
              Reduce retrabajo, mejora tiempos de entrega y garantiza escalabilidad técnica sostenible.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-7 hover:border-emerald-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center ring-1 ring-emerald-500/20">
              <i data-lucide="scale" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Resolución de Conflictos Técnicos</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">En entornos multi-proveedor, las discrepancias son naturales; resolverlas con objetividad es diferencial.</p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Argumentación Basada en Datos:</strong>
              Fundamenta propuestas con KPIs y estándares de QA definidos ante cualquier conflicto.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Búsqueda del Bien Común:</strong>
              Prioriza siempre la estabilidad del software entregado y la eficiencia operativa del cliente por encima de preferencias individuales.
            </li>
          </ul>
        </article>
      </div>

      <!-- ── Llamado a la acción ────────────────────────────────────────── -->
      <div class="relative bg-gradient-to-r from-amber-950/60 via-slate-900 to-cyan-950/60 border border-amber-500/30 rounded-2xl p-8 overflow-hidden">
        <div class="absolute inset-y-0 right-0 w-1/3 bg-amber-500/10 blur-[80px] pointer-events-none"></div>
        <div class="relative z-10">
          <p class="text-xs font-semibold tracking-widest text-amber-300 uppercase mb-3">Llamado a la Acción</p>
          <p class="text-slate-200 text-lg leading-relaxed">
            Tu paso por este proyecto debe dejar una huella de excelencia. No solo entregamos software;
            construimos una cultura de responsabilidad que otros querrán emular.
          </p>
        </div>
      </div>
    `;
  }
}