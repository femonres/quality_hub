import { SectionBase } from './SectionBase.js';

/**
 * @file EstrategiaSection.js
 * Módulo: Estrategia de Pruebas (El Blindaje del Software).
 */
export class EstrategiaSection extends SectionBase {
  get id() { return 'estrategia'; }

  render() {
    return /* html */`
      <!-- ── 1) Pirámide de Automatización ─────────────────────────────── -->
      <div class="relative bg-gradient-to-br from-blue-950/55 via-slate-900 to-indigo-950/55 border border-blue-500/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-8%] top-[-20%] w-1/2 h-[150%] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-25%] w-1/3 h-[120%] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-blue-300 uppercase mb-5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Estrategia de Pruebas · El Blindaje del Software
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            La Pirámide de Automatización,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Eficiencia por Diseño</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-3xl leading-relaxed mb-8">
            Adoptamos el modelo de la pirámide para optimizar recursos y maximizar la detección temprana de errores.
            El objetivo es construir una base sólida de pruebas rápidas que permitan iterar con total confianza.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article class="bg-slate-950/80 border border-blue-500/30 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-3 text-blue-300">
                <i data-lucide="layers-3" class="w-4 h-4"></i>
                <p class="text-xs font-semibold uppercase tracking-wider">La Base</p>
              </div>
              <h3 class="font-bold text-white mb-3">Pruebas Unitarias</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li>Se desarrollan en conjunto con la funcionalidad para validar la lógica interna.</li>
                <li>Incluyen la validación de casos positivos, negativos y excepciones.</li>
                <li>Deben integrarse obligatoriamente en los pipelines de Integración Continua (CI).</li>
              </ul>
            </article>

            <article class="bg-slate-950/80 border border-violet-500/30 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-3 text-violet-300">
                <i data-lucide="git-merge" class="w-4 h-4"></i>
                <p class="text-xs font-semibold uppercase tracking-wider">El Puente</p>
              </div>
              <h3 class="font-bold text-white mb-3">Pruebas de Integración</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li>Validan la interacción técnica entre diferentes módulos del sistema.</li>
                <li>Se enfocan en la validación de contratos de servicios y simulación de dependencias cuando es necesario.</li>
              </ul>
            </article>

            <article class="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-3 text-cyan-300">
                <i data-lucide="mountain" class="w-4 h-4"></i>
                <p class="text-xs font-semibold uppercase tracking-wider">La Cima</p>
              </div>
              <h3 class="font-bold text-white mb-3">Pruebas End-to-End / E2E</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li>Automatizan los flujos críticos de negocio desde la perspectiva del usuario final.</li>
                <li>Su propósito principal es la validación de escenarios completos para reducir el riesgo en despliegues productivos.</li>
              </ul>
            </article>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <i data-lucide="triangle" class="w-4 h-4 text-cyan-300"></i>
                <p class="text-xs font-semibold uppercase tracking-wider text-cyan-300">Pirámide de Automatización</p>
              </div>
              <div class="mermaid text-sm">
        flowchart TB
          subgraph PY[" "]
            direction TB
            S1[" "]:::ghost --- E2E["E2E / End-to-End<br/>Pocos · alto impacto"]:::top --- S2[" "]:::ghost
            I1[" "]:::ghost --- INT["Integración<br/>Contratos y módulos"]:::mid --- I2[" "]:::ghost
            B1[" "]:::ghost --- UNI["Unitarias<br/>Muchas · rápidas · bajo costo"]:::base --- B2[" "]:::ghost
            E2E --> INT --> UNI
          end

          COSTO["Costo por falla ↑"]:::signal --> E2E
          UNI --> VELOCIDAD["Velocidad de feedback ↑"]:::signal

          classDef base fill:#0f172a,stroke:#60a5fa,stroke-width:2px,color:#dbeafe;
          classDef mid fill:#111827,stroke:#a78bfa,stroke-width:2px,color:#ede9fe;
          classDef top fill:#082f49,stroke:#22d3ee,stroke-width:2px,color:#cffafe;
          classDef signal fill:#052e16,stroke:#34d399,stroke-width:1px,color:#d1fae5;
          classDef ghost fill:transparent,stroke:transparent,color:transparent;
              </div>
            </div>

            <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <i data-lucide="activity" class="w-4 h-4 text-emerald-300"></i>
                <p class="text-xs font-semibold uppercase tracking-wider text-emerald-300">Relevancia por Nivel</p>
              </div>
              <div class="mermaid text-sm">
graph LR
    A["Unitarias"] --> B["Mayor Cobertura"]
    A --> C["Feedback Rápido"]
    A --> D["Menor Costo de Corrección"]
    E["Integración"] --> F["Confianza en Contratos"]
    G["E2E"] --> H["Riesgo de Negocio Controlado"]

    style A fill:#172554,stroke:#60a5fa,color:#dbeafe
    style E fill:#312e81,stroke:#a78bfa,color:#ede9fe
    style G fill:#064e3b,stroke:#34d399,color:#d1fae5
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 2) Smoke Tests ─────────────────────────────────────────────── -->
      <div class="bg-slate-950 border border-amber-500/25 rounded-2xl p-7">
        <div class="flex items-start gap-4 mb-5">
          <div class="w-11 h-11 bg-amber-500/10 text-amber-300 rounded-xl flex items-center justify-center ring-1 ring-amber-500/25">
            <i data-lucide="flame" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-white">Smoke Tests: Feedback Inmediato en el Pipeline</h3>
            <p class="text-slate-400 text-sm mt-1">Son nuestro primer filtro de seguridad en los flujos de CI/CD establecidos por el cliente.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-2">Ejecución Automática</p>
            <p class="text-sm text-slate-300">Se disparan inmediatamente después de cada despliegue en entornos de desarrollo o QA.</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-2">Alcance Crítico</p>
            <p class="text-sm text-slate-300">Validan que las funciones vitales del sistema estén operativas antes de pruebas más exhaustivas.</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-2">Criterio de Parada</p>
            <p class="text-sm text-slate-300">Si un Smoke Test falla, el despliegue se considera fallido de inmediato y se detiene el flujo.</p>
          </div>
        </div>
      </div>

      <!-- ── 3 y 4) DoD + Valor de Negocio ─────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-7 hover:border-emerald-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center ring-1 ring-emerald-500/20">
              <i data-lucide="check-check" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Alineación con el Definition of Done</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">
            Para nosotros, una tarea no está terminada si no ha sido blindada técnicamente.
            Nuestra ejecución se alinea con estándares de QA y criterios de aceptación definidos con BTG Pactual.
          </p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Cobertura Medible:</strong>
              Garantizamos que cada profesional contribuya a la excelencia técnica mediante métricas de cobertura y calidad de código trazables.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Code Review Cruzado:</strong>
              Fomentamos la revisión cruzada para validar la cobertura de pruebas antes de realizar cualquier integración (merge).
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-fuchsia-500/25 rounded-2xl p-7 hover:border-fuchsia-400/60 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center ring-1 ring-fuchsia-500/20">
              <i data-lucide="trending-up" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold">Generación de Valor: Impacto en el Negocio</h3>
          </div>
          <p class="text-slate-400 text-sm mb-5">
            Nuestra estrategia de pruebas no solo busca encontrar fallos; transforma la dinámica de entrega del cliente.
          </p>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-fuchsia-500/40 pl-4">
              <strong class="text-white">Reducción de Defectos:</strong>
              Disminución drástica de errores que llegan a producción.
            </li>
            <li class="border-l-2 border-fuchsia-500/40 pl-4">
              <strong class="text-white">Estabilidad Sostenible:</strong>
              Mayor confianza y seguridad en cada despliegue productivo.
            </li>
            <li class="border-l-2 border-fuchsia-500/40 pl-4">
              <strong class="text-white">Entrega Ágil:</strong>
              Reducción del retrabajo para mejorar significativamente los tiempos de salida al mercado.
            </li>
          </ul>
        </article>
      </div>

      <!-- ── Cierre / Acción ────────────────────────────────────────────── -->
      <div class="relative bg-gradient-to-r from-blue-950/60 via-slate-900 to-emerald-950/60 border border-blue-500/30 rounded-2xl p-8 overflow-hidden">
        <div class="absolute right-0 top-0 w-1/2 h-full bg-blue-500/10 blur-[90px] pointer-events-none"></div>
        <div class="relative z-10">
          <p class="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-3">Llamado a la Acción</p>
          <p class="text-slate-200 text-lg leading-relaxed">
            No te limites a cumplir con el código; lidera con la calidad. Tu compromiso con estos niveles de prueba
            es lo que garantiza la evolución tecnológica del negocio.
          </p>
        </div>
      </div>
    `;
  }
}
