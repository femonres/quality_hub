/**
 * @file SectionRegistry.js
 * OCP:  nuevas secciones se registran sin modificar código existente.
 * SRP:  registra instancias de sección y monta su HTML en el DOM.
 */
export class SectionRegistry {
  constructor() {
    /** @type {Map<string, import('./SectionBase.js').SectionBase>} */
    this._sections = new Map();
  }

  /**
   * Registra una sección. El orden de registro determina el orden en el DOM.
   * @param {import('./SectionBase.js').SectionBase} section
   */
  register(section) {
    this._sections.set(section.id, section);
  }

  /**
   * Obtiene una sección registrada por id.
   * @param {string} id
   * @returns {import('./SectionBase.js').SectionBase|undefined}
   */
  get(id) {
    return this._sections.get(id);
  }

  /**
   * Renderiza todas las secciones registradas en `containerEl`.
   * Cada sección ocupa un `<section>` con la clase CSS `tab-content`.
   * @param {HTMLElement} containerEl
   */
  mountAll(containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    this._sections.forEach((section, id) => {
      const el = document.createElement('section');
      el.id = id;
      el.className = 'tab-content space-y-8';
      el.innerHTML = section.render();
      containerEl.appendChild(el);
    });

    // Re-ejecutar Lucide e inicializar Prism tras inyectar HTML dinámicamente
    lucide.createIcons();
    if (typeof Prism !== 'undefined') Prism.highlightAll();
  }
}
