/**
 * @file ClipboardManager.js
 * SRP: copiar innerText de un elemento al portapapeles con feedback visual.
 */
export class ClipboardManager {
  /**
   * Copia el texto del elemento `elementId` y muestra feedback en `triggerBtn`.
   * @param {string} elementId
   * @param {HTMLElement} triggerBtn
   */
  async copy(elementId, triggerBtn) {
    const el = document.getElementById(elementId);
    if (!el || !triggerBtn) return;

    await navigator.clipboard.writeText(el.innerText);

    const original = triggerBtn.innerHTML;
    triggerBtn.innerHTML = '<i data-lucide="check" class="w-3 h-3"></i> Copiado';
    lucide.createIcons();

    setTimeout(() => {
      triggerBtn.innerHTML = original;
      lucide.createIcons();
    }, 2000);
  }
}
