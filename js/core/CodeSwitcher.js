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

  static ACTIVE_TAB_CLASSES = [
    'border-blue-400',
    'text-white',
    'bg-blue-500/15',
    'shadow-[inset_0_-2px_0_0_rgba(96,165,250,1)]',
  ];

  static INACTIVE_TAB_CLASSES = [
    'border-transparent',
    'text-slate-500',
    'bg-transparent',
  ];

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
      .forEach((el) => {
        el.classList.remove(...CodeSwitcher.ACTIVE_TAB_CLASSES, ...CodeSwitcher.INACTIVE_TAB_CLASSES);
        el.classList.add(...CodeSwitcher.INACTIVE_TAB_CLASSES);
      });

    const target = this._container.querySelector(`#code-${stack}`);
    if (target) target.classList.remove('hidden');
    if (activeTabBtn) {
      activeTabBtn.classList.remove(...CodeSwitcher.INACTIVE_TAB_CLASSES);
      activeTabBtn.classList.add(...CodeSwitcher.ACTIVE_TAB_CLASSES);
    }
  }
}
