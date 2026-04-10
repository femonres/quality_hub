/**
 * @file MermaidRenderer.js
 * SRP: única responsabilidad — inicializar Mermaid y re-renderizar
 *      diagramas dentro de cualquier contenedor dado.
 */
export class MermaidRenderer {
  constructor() {
    mermaid.initialize({ startOnLoad: false, theme: 'dark' });
  }

  /**
   * Busca todos los bloques .mermaid dentro de `containerEl` y los renderiza.
   * Idempotente: puede llamarse múltiples veces sin duplicar SVGs.
   * @param {HTMLElement|null} containerEl
   */
  async renderIn(containerEl) {
    if (!containerEl) return;

    const blocks = Array.from(containerEl.querySelectorAll('.mermaid'));
    if (!blocks.length) return;

    blocks.forEach((block) => {
      if (!block.dataset.rawDefinition) {
        block.dataset.rawDefinition = block.textContent.trim();
      }
      block.textContent = block.dataset.rawDefinition;
      block.removeAttribute('data-processed');
    });

    try {
      await mermaid.run({ nodes: blocks });
    } catch (err) {
      console.error('[MermaidRenderer] Error al renderizar:', err);
    }
  }
}
