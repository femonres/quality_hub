import { SectionBase } from './SectionBase.js';

/**
 * @file IaColaborativaSection.js
 * Módulo: IA Colaborativa (Ingeniería Aumentada).
 */
export class IaColaborativaSection extends SectionBase {
  /** @param {import('../core/ClipboardManager.js').ClipboardManager} clipboardManager */
  constructor(clipboardManager) {
    super();
    this._clipboard = clipboardManager;
    this._bound = false;
  }

  get id() { return 'ia-colaborativa'; }

  render() {
    return /* html */`
      <div class="relative bg-gradient-to-br from-indigo-950/55 via-slate-900 to-cyan-950/55 border border-indigo-500/30 rounded-3xl p-10 overflow-hidden">
        <div class="absolute right-[-8%] top-[-20%] w-1/2 h-[150%] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div class="absolute left-[-10%] bottom-[-25%] w-1/3 h-[120%] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div class="relative z-10">
          <span class="inline-block text-xs font-semibold tracking-widest text-indigo-300 uppercase mb-5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            IA Colaborativa · Ingeniería Aumentada
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Aceleramos con IA,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">sin sacrificar profundidad técnica</span>
          </h2>
          <p class="text-slate-300 text-lg max-w-4xl leading-relaxed">
            En Amaris Consulting, rechazamos el "Vibe Coding". Nuestra visión es la Ingeniería Aumentada:
            usar IA para aumentar velocidad de entrega sin comprometer estabilidad, mantenibilidad ni contexto de negocio.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-indigo-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded mb-4">1. Fin del Vibe Coding</span>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-indigo-500/40 pl-4">
              <strong class="text-white">Contexto del Negocio:</strong>
              nunca pedir código sin propósito funcional claro y criterios de aceptación.
            </li>
            <li class="border-l-2 border-indigo-500/40 pl-4">
              <strong class="text-white">Validación Humana Obligatoria:</strong>
              el consultor es el filtro final y responsable de cada línea sugerida por IA.
            </li>
            <li class="border-l-2 border-indigo-500/40 pl-4">
              <strong class="text-white">Entendimiento Lógico:</strong>
              si no puedes explicar el código, no debes integrarlo.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-cyan-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded mb-4">2. Configurando Skills</span>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Inyección del DoD:</strong>
              incluir en prompts: pruebas unitarias, excepciones y cumplimiento SOLID.
            </li>
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Rol de Arquitecto:</strong>
              definir explícitamente el rol de senior engineer con enfoque Clean Code y Shift Left.
            </li>
            <li class="border-l-2 border-cyan-500/40 pl-4">
              <strong class="text-white">Alineación de Herramientas:</strong>
              indicar framework de testing y versión del stack para evitar salidas obsoletas.
            </li>
          </ul>
        </article>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded mb-4">3. Mejores Prácticas de Colaboración</span>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">IA para TDD:</strong>
              generar primero pruebas basadas en criterios de aceptación antes de escribir código funcional.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Pre-Revisión con IA:</strong>
              usar IA para detectar deuda técnica y riesgos de seguridad antes del code review humano.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Datos Sintéticos:</strong>
              generar fixtures complejos para pruebas sin usar datos reales de producción.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-amber-500/25 rounded-2xl p-6">
          <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded mb-4">Mejores Prácticas de Prompts</span>
          <p class="text-slate-400 text-sm mb-3">
            Evita prompts ambiguos como "crea una función de login". <br />Usa prompts con contexto técnico y criterios de calidad.
          </p>
          <div class="flex justify-end mb-2">
            <button data-copy="ia-prompt-base" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
              <i data-lucide="copy" class="w-3 h-3"></i> Copiar prompt
            </button>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <pre><code id="ia-prompt-base" class="language-text">Actúa como un consultor senior experto en [stack].
Necesito una función de autenticación en [stack] que cumpla con:
1. Inyección de dependencias para el repositorio.
2. Manejo de excepciones para casos de usuario no encontrado.
3. Genera primero la prueba unitaria usando [framework]
   cubriendo happy path y casos borde.
4. Asegura que el código sea testeable y respete SRP.</code></pre>
          </div>
        </article>
      </div>

      <article class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
          <i data-lucide="scale" class="w-4 h-4 text-indigo-300"></i>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-indigo-300">Matriz de Uso de IA en PRs: Qué Sí / Qué No</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-6 border-b md:border-b-0 md:border-r border-slate-800">
            <p class="text-xs font-semibold tracking-wider uppercase text-emerald-300 mb-4">Qué sí</p>
            <ul class="space-y-3 text-sm text-slate-300">
              <li class="border-l-2 border-emerald-500/40 pl-3">Pedir a la IA pruebas unitarias antes del código funcional (enfoque TDD).</li>
              <li class="border-l-2 border-emerald-500/40 pl-3">Usar IA para pre-revisión de seguridad, deuda técnica y claridad del código.</li>
              <li class="border-l-2 border-emerald-500/40 pl-3">Solicitar generación de datos sintéticos y casos borde para fortalecer cobertura.</li>
              <li class="border-l-2 border-emerald-500/40 pl-3">Exigir prompts con contexto de negocio, DoD y framework de testing específico.</li>
              <li class="border-l-2 border-emerald-500/40 pl-3">Documentar en el PR qué partes fueron asistidas por IA y cómo se validaron.</li>
            </ul>
          </div>
          <div class="p-6">
            <p class="text-xs font-semibold tracking-wider uppercase text-rose-300 mb-4">Qué no</p>
            <ul class="space-y-3 text-sm text-slate-300">
              <li class="border-l-2 border-rose-500/40 pl-3">No copiar y pegar código generado por IA sin revisión técnica profunda.</li>
              <li class="border-l-2 border-rose-500/40 pl-3">No enviar prompts ambiguos o sin criterios de aceptación funcional.</li>
              <li class="border-l-2 border-rose-500/40 pl-3">No aceptar excepciones genéricas ni ausencia de manejo de errores.</li>
              <li class="border-l-2 border-rose-500/40 pl-3">No usar datos reales de clientes en prompts o generación de escenarios de prueba.</li>
              <li class="border-l-2 border-rose-500/40 pl-3">No omitir code review humano bajo el argumento de que la IA ya revisó.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-indigo-500/10 text-indigo-300 rounded-lg flex items-center justify-center ring-1 ring-indigo-500/20">
            <i data-lucide="traffic-cone" class="w-5 h-5"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Semáforo de Uso de Agentes IA (Copilot y similares)</h3>
        </div>
        <p class="text-slate-400 text-sm mb-5">
          Dado que el equipo trabajará mayormente con agentes de IA, este semáforo define criterios de aprobación en PR.
          Lo rojo bloquea merge, lo amarillo exige validación reforzada y lo verde es práctica recomendada.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
              <p class="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Verde · Recomendado</p>
            </div>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Usar agente IA para generar pruebas primero (TDD).</li>
              <li>Solicitar refactors con foco SRP y testabilidad.</li>
              <li>Pedir detección de deuda técnica y riesgos de seguridad.</li>
            </ul>
          </div>

          <div class="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <p class="text-sm font-semibold text-amber-300 uppercase tracking-wider">Amarillo · Validar</p>
            </div>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Código generado con dependencias nuevas no evaluadas.</li>
              <li>Sugerencias que modifican arquitectura o contratos API.</li>
              <li>Tests creados por IA sin cubrir casos borde críticos.</li>
            </ul>
          </div>

          <div class="bg-rose-950/30 border border-rose-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-3 h-3 rounded-full bg-rose-400"></span>
              <p class="text-sm font-semibold text-rose-300 uppercase tracking-wider">Rojo · Bloqueante</p>
            </div>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Mergear código sin revisión humana responsable.</li>
              <li>Usar datos reales o sensibles en prompts de IA.</li>
              <li>No poder explicar la lógica del código generado.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="bg-slate-950 border border-fuchsia-500/25 rounded-2xl p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-fuchsia-500/10 text-fuchsia-300 rounded-lg flex items-center justify-center ring-1 ring-fuchsia-500/20">
            <i data-lucide="clipboard-list" class="w-5 h-5"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Catálogo de Prompts: Ingeniería de Pruebas con IA</h3>
        </div>
        <p class="text-slate-400 text-sm mb-5">
          Para resultados de alta fidelidad, usa siempre esta estructura: <strong class="text-white">Contexto del Proyecto + Código Existente + Tarea Específica + Estándar de Calidad</strong>.
        </p>

        <div class="space-y-4">
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs font-semibold tracking-wider uppercase text-fuchsia-300 mb-2">Escenario 1 · Nueva funcionalidad en módulo existente</p>
            <div class="flex justify-end mb-2">
              <button data-copy="ia-prompt-s1" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i> Copiar escenario
              </button>
            </div>
            <pre><code id="ia-prompt-s1" class="language-text">Actúa como un Desarrollador Senior experto en [área de especialización]. He agregado la función [nombre_funcion] al archivo adjunto.
Basado en los criterios de aceptación [describir_criterio], genera la suite de pruebas unitarias usando [xUnit/JUnit/Jest].

Requerimientos técnicos:
- Sigue estrictamente el patrón AAA (Arrange, Act, Assert).
- Usa [Moq/Mockito] para simular dependencias y no tocar base de datos real.
- Incluye casos positivos, negativos y excepciones.
- Asegura que la prueba sea idempotente e independiente.</code></pre>
          </div>

          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs font-semibold tracking-wider uppercase text-fuchsia-300 mb-2">Escenario 2 · Cambio de comportamiento (refactorización)</p>
            <div class="flex justify-end mb-2">
              <button data-copy="ia-prompt-s2" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i> Copiar escenario
              </button>
            </div>
            <pre><code id="ia-prompt-s2" class="language-text">Estoy refactorizando la lógica interna del método [nombre_metodo] para mejorar eficiencia,
pero el resultado final para el cliente debe ser el mismo.
1. Analiza código original y nuevo.
2. Genera pruebas de regresión para validar consistencia con estándares BTG Pactual.
3. Identifica casos de borde potencialmente ignorados.
4. Verifica cumplimiento del principio de Responsabilidad Única.</code></pre>
          </div>

          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs font-semibold tracking-wider uppercase text-fuchsia-300 mb-2">Escenario 3 · Corrección de errores (bug fixing)</p>
            <div class="flex justify-end mb-2">
              <button data-copy="ia-prompt-s3" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i> Copiar escenario
              </button>
            </div>
            <pre><code id="ia-prompt-s3" class="language-text">Se detectó el bug [descripción_bug] en el componente [nombre]. He aplicado la corrección en el código adjunto.
- Genera una prueba unitaria que recree el fallo y confirme su resolución.
- Aplica estrategia Shift Left: prueba ejecutable en CI sin intervención manual.
- Usa datos sintéticos realistas, sin datos sensibles ni reales.</code></pre>
          </div>
        </div>
      </article>

      <article class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
          <i data-lucide="sliders-horizontal" class="w-4 h-4 text-cyan-300"></i>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-cyan-300">Skills de IA para el Equipo Técnico</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-slate-900/70">
              <tr>
                <th class="text-left px-4 py-3 text-slate-300">Skill / Regla</th>
                <th class="text-left px-4 py-3 text-slate-300">Instrucción para la IA</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Aislamiento Total</td>
                <td class="px-4 py-3">Nunca asumas acceso a base de datos real; sugiere mocks para interfaces.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Mentalidad TDD</td>
                <td class="px-4 py-3">Antes de la solución, propón estructura de la prueba unitaria.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Filtro de Calidad</td>
                <td class="px-4 py-3">Si el código viola SOLID o no maneja excepciones, advierte antes de proceder.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Trazabilidad</td>
                <td class="px-4 py-3">Vincula cada prueba generada a un escenario de negocio o caso límite.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Estandarización</td>
                <td class="px-4 py-3">Sigue formato de código y nomenclatura definida por BTG Pactual.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Revisión Continua</td>
                <td class="px-4 py-3">Después de cada iteración, realiza revisión rápida para detectar mejoras o errores.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Documentación Clara</td>
                <td class="px-4 py-3">Acompaña cada bloque con comentarios de propósito y lógica según estándar.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Enfoque en Mantenibilidad</td>
                <td class="px-4 py-3">Prioriza claridad y simplicidad; evita complejidades innecesarias.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Pruebas de Regresión</td>
                <td class="px-4 py-3">Ante cambios significativos, genera pruebas de regresión para evitar rompimientos.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-cyan-300 font-medium">Uso de Datos Sintéticos</td>
                <td class="px-4 py-3">Para pruebas con datos, usa datos sintéticos representativos sin información sensible.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 border-t border-slate-800 bg-slate-900/40">
          <div class="flex justify-between items-center mb-2">
            <p class="text-xs uppercase tracking-wider text-slate-500">Pack de skills para inicio de sesión</p>
            <button data-copy="ia-skills-pack" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
              <i data-lucide="copy" class="w-3 h-3"></i> Copiar skills
            </button>
          </div>
          <pre><code id="ia-skills-pack" class="language-text">Nunca asumas que tengo acceso a base de datos real; sugiere mocks.
Antes de la solución, propón la prueba unitaria (mentalidad TDD).
Si mi código viola SOLID o no maneja excepciones, adviérteme.
Vincula cada prueba a un escenario de negocio o caso límite.
Sigue nomenclatura y estilo de BTG Pactual.
Tras cada iteración, revisa mejoras o errores potenciales.
Usa comentarios claros y enfócate en mantenibilidad.
Genera regresión tests ante cambios significativos.
Usa siempre datos sintéticos, nunca datos sensibles.</code></pre>
        </div>
      </article>

      <article class="relative bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/60 border border-indigo-500/30 rounded-2xl p-8 overflow-hidden">
        <div class="absolute right-[-15%] top-[-20%] w-1/2 h-[150%] bg-indigo-500/10 blur-[90px] pointer-events-none rounded-full"></div>
        <div class="relative z-10">
          <p class="text-xs font-semibold tracking-widest text-indigo-300 uppercase mb-3">Regla de Oro</p>
          <p class="text-slate-200 text-lg leading-relaxed">
            "La IA genera la propuesta, el consultor garantiza la excelencia." Nuestra métrica de éxito no es cuánto
            código produce la IA, sino cuánta estabilidad y valor medible entregamos al cliente con su uso inteligente.
          </p>
        </div>
      </article>
    `;
  }

  onActivate(sectionEl) {
    if (this._bound) return;
    this._bound = true;

    sectionEl.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () =>
        this._clipboard.copy(btn.dataset.copy, btn)
      );
    });
  }
}
