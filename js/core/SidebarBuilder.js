/**
 * @file SidebarBuilder.js
 * SRP:  construir la navegación lateral desde la configuración.
 * DIP:  recibe el Router como abstracción; no depende de su implementación.
 */
export class SidebarBuilder {
  /**
   * @param {object}                               config  SITE_CONFIG
   * @param {import('./Router.js').Router}         router
   */
  constructor(config, router) {
    this._config = config;
    this._router = router;
  }

  /**
   * Inyecta metadata de marca y los botones de navegación en el shell HTML.
   */
  mount() {
    this._applyMeta();
    this._buildNav();
  }

  // ── Privados ───────────────────────────────────────────────────────────────

  _applyMeta() {
    const { brand, partner, version, searchPlaceholder } = this._config.meta;

    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    set('brand-abbr',      brand.abbr);
    set('brand-name',      brand.name);
    set('brand-subtitle',  brand.subtitle);
    set('partner-abbr',    partner.abbr);
    set('partner-name',    partner.name);
    set('partner-subtitle',partner.subtitle);
    set('version-badge',   version);

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = searchPlaceholder;
  }

  _buildNav() {
    const navEl = document.getElementById('sidebar-nav');
    if (!navEl) return;
    navEl.innerHTML = '';

    this._config.nav.forEach((item) => {
      const btn = document.createElement('button');
      btn.dataset.section = item.id;
      btn.className =
        'sidebar-link w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-slate-900';
      btn.innerHTML = `<i data-lucide="${item.icon}" class="w-5 h-5"></i><span>${item.label}</span>`;
      btn.addEventListener('click', () => this._router.navigateTo(item.id, btn));
      navEl.appendChild(btn);
    });
  }
}
