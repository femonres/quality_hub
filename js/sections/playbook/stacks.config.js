import { dotnetPanel }  from "./dotnetPanel.js";
import { javaPanel }    from "./javaPanel.js";
import { angularPanel } from "./angularPanel.js";
import { pythonPanel }  from "./pythonPanel.js";
import { tsPanel }      from "./tsPanel.js";
/**
 * @file stacks.config.js
 * Configuración de datos para los paneles de código del Playbook.
 *
 * OCP: agregar un nuevo stack = añadir un objeto a STACK_CONFIGS.
 *      PlaybookSection genera los tabs y paneles automáticamente; no requiere
 *      modificarse.
 *
 * Contrato de cada entrada:
 *   id          {string}  — identificador único; determina el id del panel
 *                           DOM (`code-{id}`) y los ids de los snippets
 *                           (`{id}-config-sample`, `{id}-impl-sample`,
 *                            `{id}-test-sample`).
 *   label       {string}  — texto visible en la pestaña.
 *   badge       {object}  — { text, class } etiqueta del framework de testing.
 *   description {string}  — párrafo introductorio del panel.
 *   snippets    {object}  — { config, impl, test }
 *     config    {object}  — { lang, code } — bloque de dependencias/configuración.
 *     impl      {object}  — { lang, code } — código de producción de ejemplo.
 *     test      {object}  — { lang, code } — prueba unitaria asociada.
 *   panel       {Function}— Html customizado para el stack
 *
 * NOTA sobre el contenido de `code`:
 *   Los valores son cadenas HTML-safe (usan entidades como &lt; y &gt;) porque
 *   se insertan directamente dentro de <pre><code> al renderizar el HTML.
 */

export const STACK_CONFIGS = [
  // ─── .NET ────────────────────────────────────────────────────────────────
  {
    id: "dotnet",
    label: ".NET",
    badge: { text: "xUnit + Moq", class: "bg-blue-500/10 text-blue-400" },
    description:
      "El estándar exige validar casos límite y excepciones para garantizar estabilidad en producción.",
    panel: dotnetPanel,
  },

  // ─── Java ────────────────────────────────────────────────────────────────
  {
    id: "java",
    label: "Java",
    badge: {
      text: "JUnit 5 + Mockito",
      class: "bg-orange-500/10 text-orange-400",
    },
    description:
      "Se recomienda aislar servicios con mocks y validar reglas de negocio con escenarios de excepción.",
    panel: javaPanel,
  },

  // ─── Angular ─────────────────────────────────────────────────────────────
  {
    id: "angular",
    label: "Angular",
    badge: { text: "Jasmine + Karma", class: "bg-red-500/10 text-red-300" },
    description:
      "Se prioriza el desacoplamiento de la lógica del componente respecto al DOM para acelerar la ejecución de tests.",
    panel: angularPanel,
  },

  // ─── Python ──────────────────────────────────────────────────────────────
  {
    id: "python",
    label: "Python",
    badge: {
      text: "pytest + Faker",
      class: "bg-emerald-500/10 text-emerald-300",
    },
    description:
      "El enfoque en Python combina pruebas unitarias rápidas con generación de datos sintéticos para cubrir casos borde.",
    panel: pythonPanel,
  },

  // ─── TypeScript ──────────────────────────────────────────────────────────
  {
    id: "ts",
    label: "TypeScript",
    badge: { text: "Jest + ts-jest", class: "bg-cyan-500/10 text-cyan-300" },
    description:
      "En TypeScript, privilegiamos funciones atómicas, manejo explícito de errores y contratos fuertemente tipados.",
    panel: tsPanel,
  },
];
