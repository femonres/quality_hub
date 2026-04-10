import { SectionBase } from './SectionBase.js';

/**
 * @file OnboardingSection.js
 * Checklist de onboarding con persistencia en localStorage.
 *
 * DIP: OnboardingManager es inyectado vía constructor.
 */
export class OnboardingSection extends SectionBase {
  /** @param {import('../core/OnboardingManager.js').OnboardingManager} onboardingManager */
  constructor(onboardingManager) {
    super();
    this._onboarding = onboardingManager;
  }

  get id() { return 'onboarding'; }

  render() {
    return /* html */`
      <header>
        <h2 class="text-3xl font-bold mb-2">Tu Checklist de Onboarding</h2>
        <p class="text-slate-400">Hitos que debes completar para alinearte con los estándares de BTG Pactual.</p>
      </header>

      <div class="bg-slate-950 border border-slate-800 rounded-3xl p-8">
        <div class="space-y-6">
          ${this._item('Entorno de Desarrollo',
            'Configuración local, acceso a repositorios y linters instalados.')}
          ${this._item('Alineación Técnica',
            'Entender la estrategia de ramificación (Gitflow/Trunk) y convenciones de commits.')}
          ${this._item('Primera Prueba Exitosa',
            'Ejecutar y pasar suite de pruebas unitarias locales en el stack asignado.')}
          ${this._item('Sincronización QA',
            'Presentación con el Líder de QA del equipo mixto para entender KPIs específicos.')}
        </div>
      </div>
    `;
  }

  /** Se llama cada vez que el usuario navega a esta sección. */
  onActivate(sectionEl) {
    this._onboarding.init(sectionEl);
  }

  // ── Privados ───────────────────────────────────────────────────────────────

  /**
   * Genera el HTML de un ítem del checklist.
   * @param {string} title
   * @param {string} description
   * @returns {string}
   */
  _item(title, description) {
    return /* html */`
      <label class="flex items-start gap-4 p-4 hover:bg-slate-900 rounded-xl transition-all cursor-pointer">
        <input type="checkbox"
          class="check-item w-5 h-5 mt-1 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500">
        <div>
          <span class="font-bold text-lg block mb-1">${title}</span>
          <p class="text-sm text-slate-500">${description}</p>
        </div>
      </label>
    `;
  }
}
