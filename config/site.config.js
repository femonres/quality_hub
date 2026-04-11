/**
 * @file site.config.js — Configuración CMS centralizada
 *
 * CÓMO AGREGAR UNA NUEVA SECCIÓN:
 *   1. Agrega una entrada al array `nav` aquí abajo.
 *   2. Crea /js/sections/TuSeccion.js extendiendo SectionBase.
 *   3. Regístrala con `registry.register(new TuSeccion())` en app.js.
 *
 * No se necesita modificar ningún otro archivo.
 */

export const SITE_CONFIG = {
  meta: {
    title: 'Quality Engineering Hub | BTG Pactual & Amaris',
    version: 'v1.0.0',
    searchPlaceholder: 'Buscar lineamientos, snippets o procesos...',
    brand: {
      abbr: 'QE',
      name: 'Quality Hub',
      subtitle: 'BTG Pactual',
    },
    partner: {
      abbr: 'AC',
      name: 'Amaris Consulting',
      subtitle: 'BTG Pactual Partner',
    },
  },

  /**
   * Ítems de navegación.
   * Cada `id` debe coincidir con el getter `id` de su SectionBase.
   * Exactamente un ítem debe tener `default: true`.
   */
  nav: [
    { id: 'home',         icon: 'home',            label: 'Inicio',            default: true },
    { id: 'consultor-exitoso', icon: 'handshake',  label: 'Consultor Exitoso'              },
    { id: 'cultura',      icon: 'shield-check',    label: 'Cultura de Calidad'               },
    { id: 'estrategia',   icon: 'layers',          label: 'Estrategia de Pruebas'            },
    { id: 'metricas-kpis',icon: 'bar-chart-2',     label: 'Métricas y KPIs'                  },
    { id: 'playbook',     icon: 'code-2',          label: 'Playbook Técnico'                 },
    //{ id: 'documentacion',icon: 'book-open',       label: 'Documentación'                    },
    { id: 'colaboracion', icon: 'users-2',         label: 'Colaboración QA'                  },
    { id: 'onboarding',   icon: 'clipboard-check', label: 'Onboarding'                       },
  ],
};
