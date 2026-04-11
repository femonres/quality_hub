import { SectionBase }   from './SectionBase.js';
import { CodeSwitcher }  from '../core/CodeSwitcher.js';
import { STACK_CONFIGS } from './playbook/stacks.config.js';

/**
 * @file PlaybookSection.js
 * Sección de playbook con pestañas de código por stack tecnológico.
 *
 * SOLID aplicado:
 *  SRP — cada método privado `_render*` es responsable de un único bloque visual.
 *  OCP — agregar un nuevo stack solo requiere añadir una entrada en stacks.config.js;
 *         esta clase no se modifica.
 *  DIP — ClipboardManager se inyecta vía constructor; no se crea internamente.
 *
 * Mapa de métodos de renderizado:
 *  render()                → orquesta todos los bloques
 *  _renderIntro()          → encabezado y párrafo introductorio
 *  _renderStandardsGrid()  → artículos "Código Limpio" y "Datos de Prueba"
 *  _renderComparisonTable()→ tabla Legacy vs Amaris
 *  _renderStackContainer() → tabs + paneles generados desde STACK_CONFIGS
 *  _renderGitFlowGrid()    → artículos Git Flow y Conventional Commits
 *  _renderPrTemplate()     → plantilla de Pull Request
 *  _renderBottomGrid()     → artículos Seguridad y Llamado a la Acción
 *
 * Helpers internos de bajo nivel:
 *  _renderStackTab(stack, isFirst)              → botón de pestaña
 *  _renderStackPanel(stack, isFirst)            → panel de contenido del stack
 *  _renderCopyableSnippet(title, id, lang, code)→ bloque <pre><code> con botón copiar
 */
export class PlaybookSection extends SectionBase {
  /** @param {import('../core/ClipboardManager.js').ClipboardManager} clipboardManager */
  constructor(clipboardManager) {
    super();
    this._clipboard = clipboardManager;
    this._switcher  = null;
    this._bound     = false;
  }

  get id() { return 'playbook'; }

  // ── Renderizado principal ─────────────────────────────────────────────────

  render() {
    return [
      this._renderIntro(),
      this._renderStandardsGrid(),
      this._renderComparisonTable(),
      this._renderStackContainer(),
      this._renderGitFlowGrid(),
      this._renderPrTemplate(),
      this._renderBottomGrid(),
    ].join('\n');
  }

  // ── Bloques de sección ────────────────────────────────────────────────────

  _renderIntro() {
    return /* html */`
      <div>
        <h2 class="text-3xl font-bold mb-2">Lineamientos de Código y Datos</h2>
        <p class="text-slate-400 max-w-4xl">
          En <strong class="text-white">Amaris Consulting</strong>, el código es nuestra carta de presentación ante el cliente.
          No solo buscamos que el software funcione: debe ser un activo digital de alta calidad, seguro y fácil de evolucionar.
        </p>
      </div>`;
  }

  _renderStandardsGrid() {
    return /* html */`
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-blue-500/25 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center ring-1 ring-blue-500/20">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-white">Estándares de Código Limpio</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Principio de Responsabilidad Única (SRP):</strong>
              cada clase o función debe tener una única razón para cambiar, facilitando pruebas unitarias granulares.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Inyección de Dependencias:</strong>
              el código recibe sus dependencias externamente para permitir la simulación de servicios o bases de datos durante testing.
            </li>
            <li class="border-l-2 border-blue-500/40 pl-4">
              <strong class="text-white">Mantenibilidad sobre Complejidad:</strong>
              el código debe ser legible por cualquier miembro del equipo para reducir retrabajo y acelerar entregas.
            </li>
          </ul>
        </article>

        <article class="bg-slate-950 border border-emerald-500/25 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center ring-1 ring-emerald-500/20">
              <i data-lucide="database" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-white">Gestión de Datos de Prueba</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Datos Sintéticos:</strong>
              se usan librerías para generar escenarios funcionales y casos límite sin comprometer datos reales.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Simulación de Dependencias:</strong>
              es obligatorio simular servicios externos o bases de datos para mantener independencia en pruebas de integración.
            </li>
            <li class="border-l-2 border-emerald-500/40 pl-4">
              <strong class="text-white">Privacidad por Diseño:</strong>
              bajo ninguna circunstancia se usan datos reales de producción en flujos de CI/CD.
            </li>
          </ul>
        </article>
      </div>`;
  }

  _renderComparisonTable() {
    return /* html */`
      <div class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
          <i data-lucide="git-compare" class="w-4 h-4 text-amber-300"></i>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-amber-300">Comparativa: Código Legacy vs Código Amaris</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-slate-900/70">
              <tr>
                <th class="text-left px-4 py-3 text-slate-300">Aspecto</th>
                <th class="text-left px-4 py-3 text-slate-300">Código no Estándar</th>
                <th class="text-left px-4 py-3 text-slate-300">Estándar Amaris / BTG Pactual</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr>
                <td class="px-4 py-3 text-slate-200 font-medium">Dependencias</td>
                <td class="px-4 py-3 text-rose-300">Hard-coded (difícil de testear)</td>
                <td class="px-4 py-3 text-emerald-300">Inyectadas (fácil de mockear)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-200 font-medium">Lógica</td>
                <td class="px-4 py-3 text-rose-300">Métodos gigantes y complejos</td>
                <td class="px-4 py-3 text-emerald-300">Funciones pequeñas y atómicas</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-200 font-medium">Errores</td>
                <td class="px-4 py-3 text-rose-300">Silenciados o genéricos</td>
                <td class="px-4 py-3 text-emerald-300">Manejo de excepciones explícito</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;
  }

  /** Genera tabs + paneles dinámicamente desde STACK_CONFIGS (OCP). */
  _renderStackContainer() {
    const tabs   = STACK_CONFIGS.map((s, i) => this._renderStackTab(s, i === 0)).join('');
    const panels = STACK_CONFIGS.map((s, i) => this._renderStackPanel(s, i === 0)).join('');

    return /* html */`
      <div id="playbook-container" class="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
        <div class="p-5 border-b border-slate-800 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-blue-950/40">
          <h3 class="text-lg font-bold text-white mb-1">Implementación por Stack Tecnológico</h3>
          <p class="text-slate-400 text-sm">
            Durante el proceso de selección, validamos que cada consultor domine la aplicación de pruebas según el framework utilizado.
          </p>
        </div>
        <div class="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          ${tabs}
        </div>
        <div class="p-6">
          ${panels}
        </div>
      </div>`;
  }

  _renderGitFlowGrid() {
    return /* html */`
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-indigo-500/25 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-indigo-500/10 text-indigo-300 rounded-lg flex items-center justify-center ring-1 ring-indigo-500/20">
              <i data-lucide="git-branch" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Guía Rápida de Git Flow</h3>
          </div>
          <p class="text-slate-400 text-sm mb-4">Flujo recomendado para trabajo diario, validaciones y publicación.</p>
          <ol class="text-sm text-slate-300 space-y-3 list-decimal pl-5">
            <li><strong class="text-white">Crear rama de trabajo:</strong> partir de <code>develop</code> con <code>feature/&lt;scope&gt;-&lt;ticket&gt;</code>.</li>
            <li><strong class="text-white">Sincronizar temprano:</strong> hacer rebase o merge frecuente desde <code>develop</code> para evitar conflictos tardíos.</li>
            <li><strong class="text-white">Abrir Pull Request:</strong> hacia <code>develop</code> con evidencia de pruebas (unitarias/integración).</li>
            <li><strong class="text-white">Release:</strong> crear <code>release/x.y.z</code> para hardening y validación final.</li>
            <li><strong class="text-white">Hotfix:</strong> partir de <code>main</code> con <code>hotfix/x.y.z</code> para incidentes productivos.</li>
          </ol>
          <pre class="mt-4"><code class="language-bash">git checkout develop
git pull origin develop
git checkout -b feature/auth-142

# trabajo + pruebas
git push -u origin feature/auth-142</code></pre>
        </article>

        <article class="bg-slate-950 border border-cyan-500/25 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-cyan-500/10 text-cyan-300 rounded-lg flex items-center justify-center ring-1 ring-cyan-500/20">
              <i data-lucide="message-square-code" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Conventional Commits</h3>
          </div>
          <p class="text-slate-400 text-sm mb-4">Formato estándar para trazabilidad, changelog automático y releases consistentes.</p>
          <ul class="space-y-3 text-sm text-slate-300">
            <li><code class="text-emerald-300">feat:</code> nueva funcionalidad de negocio.</li>
            <li><code class="text-blue-300">fix:</code> corrección de bug.</li>
            <li><code class="text-amber-300">test:</code> pruebas nuevas o ajustes de tests.</li>
            <li><code class="text-violet-300">refactor:</code> cambio interno sin alterar comportamiento.</li>
            <li><code class="text-rose-300">chore:</code> tareas de mantenimiento, build o tooling.</li>
          </ul>
          <pre class="mt-4"><code class="language-text">feat(auth): agregar validación de token JWT
fix(users): manejar null en consulta por id
test(finance): cubrir cálculo de interés compuesto
refactor(api): extraer validaciones a middleware reusable
chore(ci): ejecutar smoke tests post-deploy en QA</code></pre>
        </article>
      </div>`;
  }

  _renderPrTemplate() {
    return /* html */`
      <article class="bg-slate-950 border border-amber-500/25 rounded-2xl p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-amber-500/10 text-amber-300 rounded-lg flex items-center justify-center ring-1 ring-amber-500/20">
            <i data-lucide="file-check-2" class="w-5 h-5"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Plantilla de Pull Request (PR)</h3>
        </div>

        <p class="text-slate-400 text-sm mb-4">
          Usa esta estructura para asegurar trazabilidad, evidencias de prueba y control de riesgo antes del merge.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-3">Checklist de Calidad</p>
            <ul class="text-sm text-slate-300 space-y-2">
              <li>✔ Rama de trabajo alineada a Git Flow (feature/release/hotfix).</li>
              <li>✔ Commits en formato Conventional Commits.</li>
              <li>✔ Evidencia de pruebas unitarias y, si aplica, integración/E2E.</li>
              <li>✔ Cobertura mantenida o mejorada respecto al baseline.</li>
              <li>✔ Riesgos identificados y plan de rollback definido.</li>
              <li>✔ Code review cruzado realizado antes de merge.</li>
            </ul>
          </div>

          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p class="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-3">Evidencia Mínima Requerida</p>
            <ul class="text-sm text-slate-300 space-y-2">
              <li>1. Captura o log de ejecución de pruebas.</li>
              <li>2. Resumen del cambio funcional y técnico.</li>
              <li>3. Impacto esperado en negocio o usuario final.</li>
              <li>4. Validación de seguridad/análisis estático cuando aplique.</li>
            </ul>
          </div>
        </div>

        <div class="flex justify-between items-center mb-2">
          <p class="text-xs uppercase tracking-wider text-slate-500">Plantilla base reusable</p>
          <button data-copy="pr-template-sample" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
            <i data-lucide="copy" class="w-3 h-3"></i> Copiar plantilla
          </button>
        </div>
        <pre><code id="pr-template-sample" class="language-markdown">## Contexto
- Ticket/Historia:
- Tipo de cambio: feat | fix | refactor | test | chore
- Stack impactado:

## ¿Qué cambia?
-
-

## Evidencia de pruebas
- [ ] Unitarias
- [ ] Integración
- [ ] E2E (si aplica)
- Resultado:

## Riesgo e impacto
- Riesgo funcional: Bajo | Medio | Alto
- Riesgo técnico: Bajo | Medio | Alto
- Impacto en negocio:

## Plan de rollback
-

## Checklist final
- [ ] Sigue Git Flow
- [ ] Commits con Conventional Commits
- [ ] Code Review cruzado completo
- [ ] Sin hallazgos críticos de seguridad abiertos</code></pre>
      </article>`;
  }

  _renderBottomGrid() {
    return /* html */`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="bg-slate-950 border border-rose-500/25 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center ring-1 ring-rose-500/20">
              <i data-lucide="shield-alert" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Seguridad y Análisis Estático</h3>
          </div>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="border-l-2 border-rose-500/40 pl-4">
              <strong class="text-white">Code Review Cruzado:</strong>
              todo Pull Request debe ser revisado por otro desarrollador para validar calidad y existencia de pruebas.
            </li>
            <li class="border-l-2 border-rose-500/40 pl-4">
              <strong class="text-white">Análisis Estático:</strong>
              aplicamos herramientas automáticas para detectar vulnerabilidades y deuda técnica antes del despliegue.
            </li>
            <li class="border-l-2 border-rose-500/40 pl-4">
              <strong class="text-white">Corrección Proactiva:</strong>
              los hallazgos de seguridad reportados por herramientas corporativas se corrigen de forma prioritaria.
            </li>
          </ul>
        </article>

        <article class="relative bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-2xl p-6 overflow-hidden">
          <div class="absolute right-[-15%] top-[-20%] w-1/2 h-[150%] bg-blue-500/10 blur-[90px] pointer-events-none rounded-full"></div>
          <div class="relative z-10">
            <p class="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-3">Llamado a la Acción</p>
            <p class="text-slate-200 leading-relaxed">
              Tu código es la base de la confianza con el cliente. Aplicar estos lineamientos no es solo una tarea técnica;
              es tu compromiso con la excelencia y la estabilidad del ecosistema de <strong class="text-white">BTG Pactual</strong>.
            </p>
          </div>
        </article>
      </div>`;
  }

  // ── Helpers de stack (generados desde STACK_CONFIGS) ─────────────────────

  /**
   * Renderiza un botón de pestaña para el stack dado.
   * @param {{ id: string, label: string }} stack
   * @param {boolean} isFirst
   */
  _renderStackTab({ id, label }, isFirst) {
    const activeClass   = 'border-blue-500 text-blue-400';
    const inactiveClass = 'border-transparent text-slate-500';
    return /* html */`
      <button data-stack="${id}" class="code-tab px-6 py-4 text-sm font-medium border-b-2 ${isFirst ? activeClass : inactiveClass}">
        ${label}
      </button>`;
  }

  /**
   * Renderiza el panel de contenido para un stack.
   * @param {{ id: string, badge: object, description: string, snippets: object }} stack
   * @param {boolean} isFirst
   */
  _renderStackPanel({ id, badge, description, snippets }, isFirst) {
    return /* html */`
      <div id="code-${id}" class="code-content ${isFirst ? '' : 'hidden'} space-y-6">
        <p class="text-slate-400 text-sm">${description}</p>

        <div class="flex justify-between items-center">
          <span class="text-xs ${badge.class} px-2 py-1 rounded">${badge.text}</span>
          <button data-copy="${id}-test-sample" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
            <i data-lucide="copy" class="w-3 h-3"></i> Copiar
          </button>
        </div>

        ${this._renderCopyableSnippet('Configuración de pruebas', `${id}-config-sample`, snippets.config.lang, snippets.config.code, 'Copiar config')}
        ${this._renderCopyableSnippet('Código implementado',     `${id}-impl-sample`,   snippets.impl.lang,   snippets.impl.code,   'Copiar implementación')}

        <div class="space-y-2">
          <p class="text-xs uppercase tracking-wider text-slate-500">Prueba asociada</p>
          <pre><code id="${id}-test-sample" class="${snippets.test.lang}">${snippets.test.code}</code></pre>
        </div>
      </div>`;
  }

  /**
   * Genera un bloque <pre><code> con título y botón de copia.
   * @param {string} title      — etiqueta visible encima del bloque
   * @param {string} id         — id del elemento <code> (usado por ClipboardManager)
   * @param {string} lang       — clase CSS del lenguaje (e.g. "language-xml")
   * @param {string} code       — contenido HTML-safe del snippet
   * @param {string} copyLabel  — texto del botón copiar
   */
  _renderCopyableSnippet(title, id, lang, code, copyLabel) {
    return /* html */`
      <div class="space-y-2">
        <p class="text-xs uppercase tracking-wider text-slate-500">${title}</p>
        <div class="flex justify-end">
          <button data-copy="${id}" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
            <i data-lucide="copy" class="w-3 h-3"></i> ${copyLabel}
          </button>
        </div>
        <pre><code id="${id}" class="${lang}">${code}</code></pre>
      </div>`;
  }

  // ── Ciclo de vida ─────────────────────────────────────────────────────────

  /** Vincula tabs y botones de copia una sola vez tras el primer mount. */
  onActivate(sectionEl) {
    if (this._bound) return;
    this._bound = true;

    const container = sectionEl.querySelector('#playbook-container');
    if (!container) return;

    this._switcher = new CodeSwitcher(container);

    container.querySelectorAll('.code-tab').forEach((btn) => {
      btn.addEventListener('click', () =>
        this._switcher.switchTo(btn.dataset.stack, btn)
      );
    });

    container.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () =>
        this._clipboard.copy(btn.dataset.copy, btn)
      );
    });
  }
}
