export function pythonPanel() {
  return `
		<!-- Requisitos previos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Requisitos previos</span>
				</div>
				<button data-copy="python_requisitos_previos" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>

			<p class="text-sm text-slate-400 pl-3">Instala las dependencias antes de ejecutar:</p>

			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="python_requisitos_previos" class="language-ini">pip install pytest faker
pip install pytest-cov
</code></pre>
		</div>



		<!-- Estructura del proyecto -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Estructura del proyecto</span>
				</div>
			</div>

			<p class="text-sm text-slate-400 pl-3">Instala las dependencias antes de ejecutar:</p>

			<pre class="bg-black/40 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
	<code>mi_proyecto/
	│
	├── app/
	│   └── client.py
	│
	├── test/
	│   └── test_client.py
	│
	├── pyproject.toml
		</code></pre>

		</div>



		<!-- Configuración de pruebas -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Configuración de pruebas (📄pyproject.toml)</span>
				</div>
				<button data-copy="python_configuracion_pruebas" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>

			<p class="text-sm text-slate-400 pl-3">Crear archivo llamado 'pyproject.toml'</p>

			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="python_configuracion_pruebas" class="language-ini">[tool.pytest.ini_options]
addopts = "-q --maxfail=1"
testpaths = ["tests"]
[tool.coverage.run]
branch = true
source = ["app"]
</code></pre>

			<p class="text-sm text-slate-400 pl-3">
				Analiza únicamente el código contenido en la carpeta app y modifícalo según sea necesario.
			</p>

		</div>



		<!-- Código implementado -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Código implementado (📄client.py)</span>
				</div>
				<button data-copy="python_codigo_implementado" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>

			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="python_codigo_implementado" class="language-python">
def create_customer_payload(name: str, email: str, credit_limit: int) -> dict:
	if credit_limit <= 0:
		raise ValueError("credit_limit must be greater than zero")
		return {
				"name": name,
				"email": email,
				"credit_limit": credit_limit,
		}
</code></pre>

		</div>



<!-- Prueba asociada -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Prueba asociada (📄test_client.py)</span>
				</div>
				<button data-copy="python_prueba_asociada" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>

			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="python_prueba_asociada" class="language-python">
import pytest
from faker import Faker
from app.customers import create_customer_payload

fake = Faker()

def test_create_customer_payload_is_valid():
	payload = create_customer_payload(fake.name(), fake.email(), 5000)

	assert payload["name"]
	assert "@" in payload["email"]
	assert payload["credit_limit"] > 0
</code></pre>

			<p class="text-sm text-slate-400 pl-3">
				Los archivos deben comenzar con test_*.py o terminar con *_test.py.
			</p>
			<p class="text-sm text-slate-400 pl-3">
				Las funciones o metodos deben comenzar con test_.
			</p>
		</div>



		<!-- Comandos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<!-- Línea decorativa -->
			<div class="absolute left-0 top-0 h-full w-1 bg-amber-400/70 rounded-l-xl"></div>

			<!-- Header -->
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-amber-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Comandos</span>
				</div>
			</div>

			<p class="text-sm text-slate-400 pl-3">
				Ejecutar tests
			</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-ini">python -m pytest</code></pre>

			<p class="text-sm text-slate-400 pl-3">
				Ejecutar con coverage
			</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-ini">python -m pytest --cov=app</code></pre>

		</div>

			`;
}
