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
        <h2 class="text-3xl font-bold mb-2">Checklist de Onboarding de Excelencia</h2>
        <p class="text-slate-400">Hitos por fase para asegurar alineación técnica, operativa y de negocio en BTG Pactual.</p>
      </header>

      <div class="space-y-6">
        <div class="bg-slate-950 border border-blue-500/25 rounded-3xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">Fase 1</span>
            <h3 class="text-xl font-bold">Fundamentos</h3>
          </div>
          <div class="space-y-4">
            ${this._item('Entorno de Desarrollo',
              'Configuración local, acceso a repositorios, dependencias y linters instalados.')}
            ${this._item('Alineación Técnica',
              'Comprender estrategia de ramificación (Git Flow/Trunk), convenciones de commits y ciclo de PR.')}
            ${this._item('Comprensión de Negocio y Dominio',
              'Entender flujos críticos, riesgos operativos y qué escenarios no pueden fallar en producción.')}
            ${this._item('Seguridad y Cumplimiento Básico',
              'Validar manejo de secretos, datos sensibles y lineamientos de seguridad aplicables al proyecto.')}
          </div>
        </div>

        <div class="bg-slate-950 border border-emerald-500/25 rounded-3xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">Fase 2</span>
            <h3 class="text-xl font-bold">Ejecución</h3>
          </div>
          <div class="space-y-4">
            ${this._item('Primera Prueba Exitosa',
              'Ejecutar y pasar suite local de pruebas unitarias del stack asignado.')}
            ${this._item('Pipeline y Quality Gates',
              'Conocer criterios de fallo en CI/CD, smoke tests y condiciones de promoción de ambientes.')}
            ${this._item('Primer PR Aprobado y Mergeado',
              'Entregar un cambio pequeño con pruebas, revisión cruzada y merge exitoso a la rama objetivo.')}
            ${this._item('Primer Defecto Corregido End-to-End',
              'Reproducir, corregir, validar y cerrar un bug real con evidencia técnica y funcional.')}
          </div>
        </div>

        <div class="bg-slate-950 border border-violet-500/25 rounded-3xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="inline-block text-[10px] font-semibold tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded">Fase 3</span>
            <h3 class="text-xl font-bold">Operación y Mejora Continua</h3>
          </div>
          <div class="space-y-4">
            ${this._item('Sincronización QA',
              'Alineación formal con QA del equipo mixto para revisar KPIs y dinámica de colaboración.')}
            ${this._item('Observabilidad y Soporte',
              'Saber leer logs, métricas y trazas del servicio asignado para diagnóstico temprano.')}
            ${this._item('Definición de Done Operativa',
              'Acordar criterios reales de terminado: pruebas, cobertura, code review, seguridad y documentación.')}
            ${this._item('Runbook de Incidentes',
              'Conocer protocolo de severidades, escalamiento, tiempos de respuesta y plan de rollback.')}
            ${this._item('Ownership de KPI Personal',
              'Acordar métricas individuales de desempeño (ej. defectos reabiertos, tiempo de corrección).')}
            ${this._item('Plan de Mejora de 30 Días',
              'Definir acciones concretas de mejora técnica y colaboración para consolidar el onboarding.')}
          </div>
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
