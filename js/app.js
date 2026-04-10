/**
 * @file app.js — Raíz de composición (Composition Root)
 *
 * Este archivo es el único lugar donde se instancian y conectan las dependencias.
 * Principio de Inversión de Dependencias: los módulos reciben sus colaboradores
 * como parámetros; nunca los crean internamente.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CÓMO AGREGAR UNA NUEVA SECCIÓN (solo 3 pasos):
 *   1. Agrega una entrada en config/site.config.js → nav[].
 *   2. Crea js/sections/TuSeccion.js extendiendo SectionBase.
 *   3. Importa y registra aquí: registry.register(new TuSeccion()).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { SITE_CONFIG }          from '../config/site.config.js';

// ── Servicios core ──────────────────────────────────────────────────────────
import { MermaidRenderer }      from './core/MermaidRenderer.js';
import { ClipboardManager }     from './core/ClipboardManager.js';
import { OnboardingManager }    from './core/OnboardingManager.js';
import { Router }               from './core/Router.js';
import { SidebarBuilder }       from './core/SidebarBuilder.js';

// ── Registro de secciones ───────────────────────────────────────────────────
import { SectionRegistry }      from './sections/SectionRegistry.js';

// ── Secciones concretas ─────────────────────────────────────────────────────
import { HomeSection }          from './sections/HomeSection.js';
import { CulturaSection }       from './sections/CulturaSection.js';
import { EstrategiaSection }    from './sections/EstrategiaSection.js';
import { PlaybookSection }      from './sections/PlaybookSection.js';
import { DocumentacionSection } from './sections/DocumentacionSection.js';
import { ColaboracionSection }  from './sections/ColaboracionSection.js';
import { OnboardingSection }    from './sections/OnboardingSection.js';

// ── 1. Instanciar servicios core ────────────────────────────────────────────
const mermaidRenderer   = new MermaidRenderer();
const clipboardManager  = new ClipboardManager();
const onboardingManager = new OnboardingManager();

// ── 2. Construir el registro e inyectar dependencias en las secciones ───────
const registry = new SectionRegistry();
registry.register(new HomeSection());
registry.register(new CulturaSection());
registry.register(new EstrategiaSection());
registry.register(new PlaybookSection(clipboardManager));
registry.register(new DocumentacionSection());
registry.register(new ColaboracionSection());
registry.register(new OnboardingSection(onboardingManager));

// ── 3. Conectar el router ───────────────────────────────────────────────────
const router = new Router(registry, mermaidRenderer);

// ── 4. Montar la barra lateral ──────────────────────────────────────────────
const sidebar = new SidebarBuilder(SITE_CONFIG, router);
sidebar.mount();

// ── 5. Renderizar todas las secciones en el DOM ─────────────────────────────
const contentArea = document.getElementById('content-area');
registry.mountAll(contentArea);

// ── 6. Delegación global para enlaces data-navigate dentro de secciones ─────
//       Las secciones usan data-navigate="id" para navegar sin acoplarse al router.
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-navigate]');
  if (target) router.navigateTo(target.dataset.navigate);
});

// ── 7. Navegar a la sección por defecto ─────────────────────────────────────
const defaultSection = SITE_CONFIG.nav.find((n) => n.default);
if (defaultSection) router.navigateTo(defaultSection.id);
