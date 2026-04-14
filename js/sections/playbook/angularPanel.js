export function angularPanel() {
  return `
		<!-- Requisitos previos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Requisitos previos</span>
				</div>
				<button data-copy="angular_requisitos_previos" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Instala las dependencias de desarrollo:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="angular_requisitos_previos" class="language-bash">npm install --save-dev jasmine-core karma karma-chrome-launcher karma-jasmine karma-jasmine-html-reporter
</code></pre>
			<p class="text-sm text-slate-400 pl-3">
				En proyectos Angular CLI, Jasmine y Karma ya vienen preconfigurados. Instala solo si es un proyecto manual.
			</p>
		</div>

		<!-- Estructura del proyecto -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Estructura del proyecto</span>
				</div>
			</div>
			<pre class="bg-black/40 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
<code>mi_proyecto/
│
├── src/
│   └── app/
│       ├── finance.service.ts
│       └── finance.service.spec.ts
│
├── karma.conf.js
└── package.json</code></pre>
		</div>

		<!-- Configuración de pruebas -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Configuración de pruebas (📄package.json)</span>
				</div>
				<button data-copy="angular_config_pruebas" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Scripts y dependencias clave:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="angular_config_pruebas" class="language-json">{
  "scripts": {
    "test": "ng test --watch=false --browsers=ChromeHeadless",
    "test:coverage": "ng test --watch=false --browsers=ChromeHeadless --code-coverage"
  },
  "devDependencies": {
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.3",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.1",
    "karma-jasmine": "~5.1.0"
  }
}
</code></pre>
		</div>

		<!-- Código implementado -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Código implementado (📄finance.service.ts)</span>
				</div>
				<button data-copy="angular_codigo_implementado" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="angular_codigo_implementado" class="language-typescript">import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  calculateInterest(principal: number, rate: number): number {
    if (principal &lt;= 0 || rate &lt; 0) {
      throw new Error('Invalid parameters');
    }
    return principal + principal * rate;
  }
}
</code></pre>
		</div>

		<!-- Prueba asociada -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Prueba asociada (📄finance.service.spec.ts)</span>
				</div>
				<button data-copy="angular_prueba_asociada" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="angular_prueba_asociada" class="language-typescript">import { TestBed } from '@angular/core/testing';
import { FinanceService } from './finance.service';

describe('FinanceService', () =&gt; {
  let service: FinanceService;

  beforeEach(() =&gt; {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceService);
  });

  it('should calculate compound interest correctly', () =&gt; {
    // 1. Arrange
    const principal = 1000;
    const rate = 0.05;

    // 2. Act
    const result = service.calculateInterest(principal, rate);

    // 3. Assert
    expect(result).toEqual(1050);
  });

  it('should throw an error for invalid principal', () =&gt; {
    expect(() =&gt; service.calculateInterest(0, 0.05)).toThrow();
  });
});
</code></pre>
			<p class="text-sm text-slate-400 pl-3">
				Los archivos de prueba deben terminar en <code class="text-red-300">.spec.ts</code> y estar junto al archivo que prueban.
			</p>
		</div>

		<!-- Comandos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-red-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-red-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Comandos</span>
				</div>
			</div>
			<p class="text-sm text-slate-400 pl-3">Ejecutar tests</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">ng test --watch=false --browsers=ChromeHeadless</code></pre>
			<p class="text-sm text-slate-400 pl-3">Ejecutar con coverage</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">ng test --watch=false --code-coverage</code></pre>
		</div>
	`;
}
