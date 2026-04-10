# Quality Test CMS

Proyecto front-end modular con arquitectura tipo CMS para gestionar secciones de contenido de forma escalable.

## Stack

- HTML + Tailwind CDN
- JavaScript (ES Modules)
- Mermaid para diagramas
- Prism para syntax highlighting
- Lucide para iconos

## Ejecutar en local

Como el proyecto usa módulos ES (`type="module"`), debes abrirlo con servidor HTTP local.

### Opción 1: Python (recomendada)

```bash
cd /Users/femonres/projects/quality-test
python3 -m http.server 5500
```

Abrir en navegador:

```text
http://localhost:5500
```

### Opción 2: Node (si tienes npx)

```bash
cd /Users/femonres/projects/quality-test
npx serve -l 5500 .
```

Abrir en navegador:

```text
http://localhost:5500
```

## Estructura

```text
.
├── config/site.config.js         # Configuración global + navegación
├── css/styles.css                # Estilos globales
├── index.html                    # Shell principal
└── js
    ├── app.js                    # Composition root (inyección de dependencias)
    ├── core                      # Servicios reutilizables
    │   ├── Router.js
    │   ├── SidebarBuilder.js
    │   ├── MermaidRenderer.js
    │   ├── ClipboardManager.js
    │   ├── CodeSwitcher.js
    │   └── OnboardingManager.js
    └── sections                  # Secciones CMS
        ├── SectionBase.js
        ├── SectionRegistry.js
        ├── SectionTemplate.js    # Plantilla base para nuevas secciones
        └── DocumentacionSection.js # Ejemplo integrado
```

## Cómo agregar una nueva sección

1. Duplicar la plantilla

Copia `js/sections/SectionTemplate.js` y renómbralo, por ejemplo: `MiNuevaSection.js`.

2. Ajustar clase e id

- Renombra la clase.
- Cambia el getter `id()` por un identificador único (ej. `mi-nueva-seccion`).

3. Agregar al menú

En `config/site.config.js`, agrega una entrada en `nav`:

```js
{ id: 'mi-nueva-seccion', icon: 'file-text', label: 'Mi Nueva Sección' }
```

4. Registrar en app.js

- Importa tu sección en `js/app.js`.
- Registra la instancia en el `SectionRegistry`:

```js
registry.register(new MiNuevaSection());
```

5. Probar en local

Recarga el navegador y valida:

- La sección aparece en el menú lateral.
- Navega correctamente.
- Si incluye Mermaid, renderiza al entrar a la sección.

## Buenas prácticas

- Mantén una responsabilidad por módulo.
- Evita lógica inline en HTML; usa `onActivate()` en cada sección.
- Inyecta dependencias desde `js/app.js`.
- Reutiliza `js/core/` antes de crear lógica duplicada.
- Mantén el `id` de sección sincronizado entre clase y `site.config.js`.
