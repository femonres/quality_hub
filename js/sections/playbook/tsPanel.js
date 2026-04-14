export function tsPanel() {
  return `
		<!-- Requisitos previos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Requisitos previos</span>
				</div>
				<button data-copy="ts_requisitos_previos" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Instala las dependencias de desarrollo:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="ts_requisitos_previos" class="language-bash">npm install --save-dev jest ts-jest @types/jest typescript
</code></pre>
		</div>

		<!-- Estructura del proyecto -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Estructura del proyecto</span>
				</div>
			</div>
			<pre class="bg-black/40 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
<code>mi_proyecto/
│
├── src/
│   └── auth.middleware.ts
│
├── test/
│   └── auth.middleware.test.ts
│
├── jest.config.ts
└── package.json</code></pre>
		</div>

		<!-- Configuración de pruebas -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Configuración de pruebas (📄jest.config.ts)</span>
				</div>
				<button data-copy="ts_config_pruebas" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Crea el archivo <code class="text-cyan-300">jest.config.ts</code> en la raíz del proyecto:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="ts_config_pruebas" class="language-typescript">import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: { lines: 80 }
  }
};

export default config;
</code></pre>
		</div>

		<!-- Código implementado -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Código implementado (📄auth.middleware.ts)</span>
				</div>
				<button data-copy="ts_codigo_implementado" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="ts_codigo_implementado" class="language-typescript">import { Request, Response, NextFunction } from 'express';

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise&lt;void&gt; {
  const token = req.headers?.authorization;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  next();
}
</code></pre>
		</div>

		<!-- Prueba asociada -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Prueba asociada (📄auth.middleware.test.ts)</span>
				</div>
				<button data-copy="ts_prueba_asociada" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="ts_prueba_asociada" class="language-typescript">import { authMiddleware } from '../src/auth.middleware';

const mockRequest  = (headers = {}) =&gt; ({ headers } as any);
const mockResponse = () =&gt; {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('AuthMiddleware', () =&gt; {
  it('should return 401 if no token is provided', async () =&gt; {
    // 1. Arrange
    const req  = mockRequest();
    const res  = mockResponse();
    const next = jest.fn();

    // 2. Act
    await authMiddleware(req, res, next);

    // 3. Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next() when token is present', async () =&gt; {
    const req  = mockRequest({ authorization: 'Bearer token123' });
    const res  = mockResponse();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
</code></pre>
			<p class="text-sm text-slate-400 pl-3">
				Los archivos de prueba deben terminar en <code class="text-cyan-300">.test.ts</code> o <code class="text-cyan-300">.spec.ts</code>.
			</p>
		</div>

		<!-- Comandos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-cyan-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-cyan-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Comandos</span>
				</div>
			</div>
			<p class="text-sm text-slate-400 pl-3">Ejecutar tests</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">npm test</code></pre>
			<p class="text-sm text-slate-400 pl-3">Ejecutar con coverage</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">npm test -- --coverage</code></pre>
		</div>
	`;
}
