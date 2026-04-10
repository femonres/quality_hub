/**
 * @file CodeSwitcher.js
 * SRP: gestionar el cambio de pestañas dentro de un contenedor de código.
 */
export class CodeSwitcher {
  /**
   * @param {HTMLElement} containerEl  Elemento raíz que contiene los botones
   *                                   .code-tab y los paneles .code-content.
   */
  constructor(containerEl) {
    this._container = containerEl;
  }

  /**
   * Muestra el panel del stack indicado y marca `activeTabBtn` como activo.
   * @param {string} stack
   * @param {HTMLElement|null} activeTabBtn
   */
  switchTo(stack, activeTabBtn) {
    this._container
      .querySelectorAll('.code-content')
      .forEach((el) => el.classList.add('hidden'));

    this._container
      .querySelectorAll('.code-tab')
      .forEach((el) => el.classList.remove('border-blue-500', 'text-blue-400'));

    const target = this._container.querySelector(`#code-${stack}`);
    if (target) target.classList.remove('hidden');
    if (activeTabBtn) activeTabBtn.classList.add('border-blue-500', 'text-blue-400');
  }
}
