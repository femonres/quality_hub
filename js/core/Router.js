/**
 * @file Router.js
 * SRP:  navegar entre secciones registradas.
 * OCP:  las secciones se auto-registran; el router nunca necesita cambiar.
 * DIP:  depende de abstracciones (SectionRegistry, MermaidRenderer),
 *       no de implementaciones concretas.
 */
export class Router {
  /**
   * @param {import('../sections/SectionRegistry.js').SectionRegistry} registry
   * @param {import('./MermaidRenderer.js').MermaidRenderer} mermaidRenderer
   */
  constructor(registry, mermaidRenderer) {
    this._registry = registry;
    this._mermaid  = mermaidRenderer;
  }

  /**
   * Activa la sección `sectionId` y desactiva las demás.
   * @param {string} sectionId
   * @param {HTMLElement|null} [triggerBtn=null]
   */
  navigateTo(sectionId, triggerBtn = null) {
    document.querySelectorAll('.tab-content').forEach((el) => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-link').forEach((el) => el.classList.remove('active'));

    const section = this._registry.get(sectionId);
    if (!section) {
      console.warn(`[Router] Sección "${sectionId}" no registrada.`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) {
      console.warn(`[Router] Elemento DOM "${sectionId}" no encontrado.`);
      return;
    }

    el.classList.add('active');

    const btn = triggerBtn
      ?? document.querySelector(`.sidebar-link[data-section="${sectionId}"]`);
    if (btn) btn.classList.add('active');

    this._mermaid.renderIn(el);
    section.onActivate(el);
  }
}
