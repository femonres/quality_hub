/**
 * @file SectionBase.js
 * Clase abstracta base para todas las secciones del CMS.
 *
 * SOLID aplicado:
 *  - SRP: cada sección concreta renderiza exactamente una página.
 *  - LSP: cualquier sección puede reemplazar esta base sin romper Router ni Registry.
 *  - ISP: implementa solo los métodos que tu sección necesita.
 *
 * AGREGAR UNA NUEVA SECCIÓN:
 *   1. Crea una clase que extienda SectionBase.
 *   2. Implementa `get id()` y `render()`.
 *   3. Opcionalmente sobreescribe `onActivate(sectionEl)` para lógica post-mount.
 */
export class SectionBase {
  /**
   * Identificador único de la sección.
   * Debe coincidir con el `id` declarado en SITE_CONFIG.nav.
   * @returns {string}
   */
  get id() {
    throw new Error(`[SectionBase] "${this.constructor.name}" debe implementar get id().`);
  }

  /**
   * Devuelve el HTML interno de esta sección como string.
   * @returns {string}
   */
  render() {
    throw new Error(`[SectionBase] "${this.constructor.name}" debe implementar render().`);
  }

  /**
   * Hook de ciclo de vida — se invoca cada vez que el Router activa esta sección.
   * Sobreescribe para vincular eventos, inicializar plugins, etc.
   * @param {HTMLElement} _sectionEl
   */
  onActivate(_sectionEl) {}
}
