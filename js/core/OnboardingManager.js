/**
 * @file OnboardingManager.js
 * SRP: persistir el estado del checklist de onboarding en localStorage.
 */
export class OnboardingManager {
  /** @param {string} [storagePrefix='onboarding-step'] */
  constructor(storagePrefix = 'onboarding-step') {
    this._prefix = storagePrefix;
  }

  /**
   * Vincula la persistencia a todos los checkboxes .check-item dentro de
   * `containerEl`. Seguro para llamar múltiples veces (guarda con dataset flag).
   * @param {HTMLElement|Document} [containerEl=document]
   */
  init(containerEl = document) {
    containerEl.querySelectorAll('.check-item').forEach((cb, index) => {
      if (cb.dataset.managed) return;
      cb.dataset.managed = 'true';

      const saved = localStorage.getItem(`${this._prefix}-${index}`);
      if (saved === 'true') cb.checked = true;

      cb.addEventListener('change', (e) => {
        localStorage.setItem(`${this._prefix}-${index}`, String(e.target.checked));
      });
    });
  }
}
