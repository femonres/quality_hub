export function javaPanel() {
  return `
		<!-- Requisitos previos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Requisitos previos</span>
				</div>
			</div>
			<p class="text-sm text-slate-400 pl-3">Agrega las dependencias al <code class="text-orange-300">pom.xml</code> en scope <code class="text-orange-300">test</code>:</p>
			<ul class="text-sm text-slate-400 pl-6 list-disc space-y-1">
				<li><strong class="text-slate-300">JUnit Jupiter 5.10+</strong> — motor de pruebas</li>
				<li><strong class="text-slate-300">Mockito Core 5.12+</strong> — simulación de dependencias</li>
				<li><strong class="text-slate-300">JaCoCo</strong> — cobertura de código (plugin Maven)</li>
			</ul>
		</div>

		<!-- Estructura del proyecto -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Estructura del proyecto</span>
				</div>
			</div>
			<pre class="bg-black/40 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
<code>mi_proyecto/
│
├── src/
│   ├── main/
│   │   └── java/com/app/
│   │       └── ProductService.java
│   └── test/
│       └── java/com/app/
│           └── ProductServiceTest.java
│
└── pom.xml</code></pre>
		</div>

		<!-- Configuración de pruebas -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Configuración de pruebas (📄pom.xml)</span>
				</div>
				<button data-copy="java_config_pruebas" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Dependencias y plugin de cobertura:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="java_config_pruebas" class="language-xml">&lt;dependency&gt;
  &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
  &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
  &lt;version&gt;5.10.2&lt;/version&gt;
  &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.mockito&lt;/groupId&gt;
  &lt;artifactId&gt;mockito-core&lt;/artifactId&gt;
  &lt;version&gt;5.12.0&lt;/version&gt;
  &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;

&lt;!-- Plugin cobertura --&gt;
&lt;plugin&gt;
  &lt;groupId&gt;org.jacoco&lt;/groupId&gt;
  &lt;artifactId&gt;jacoco-maven-plugin&lt;/artifactId&gt;
  &lt;version&gt;0.8.12&lt;/version&gt;
  &lt;executions&gt;
    &lt;execution&gt;
      &lt;goals&gt;&lt;goal&gt;prepare-agent&lt;/goal&gt;&lt;/goals&gt;
    &lt;/execution&gt;
    &lt;execution&gt;
      &lt;id&gt;report&lt;/id&gt;
      &lt;phase&gt;test&lt;/phase&gt;
      &lt;goals&gt;&lt;goal&gt;report&lt;/goal&gt;&lt;/goals&gt;
    &lt;/execution&gt;
  &lt;/executions&gt;
&lt;/plugin&gt;
</code></pre>
		</div>

		<!-- Código implementado -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Código implementado (📄ProductService.java)</span>
				</div>
				<button data-copy="java_codigo_implementado" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="java_codigo_implementado" class="language-java">public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public void purchase(String name, int qty) {
        Product product = repository.findByName(name)
            .orElseThrow(() -&gt; new NotFoundException("Product not found"));
        if (product.getStock() &lt; qty)
            throw new OutOfStockException("Insufficient stock");
    }
}
</code></pre>
		</div>

		<!-- Prueba asociada -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Prueba asociada (📄ProductServiceTest.java)</span>
				</div>
				<button data-copy="java_prueba_asociada" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="java_prueba_asociada" class="language-java">class ProductServiceTest {
    @Test
    void shouldThrowExceptionWhenProductStockIsLow() {
        // 1. Arrange
        ProductRepository repository = mock(ProductRepository.class);
        ProductService    service    = new ProductService(repository);
        Product           product    = new Product("Laptop", 0);

        when(repository.findByName("Laptop")).thenReturn(Optional.of(product));

        // 2. Act &amp; 3. Assert
        assertThrows(OutOfStockException.class, () -&gt; {
            service.purchase("Laptop", 1);
        });
    }
}
</code></pre>
			<p class="text-sm text-slate-400 pl-3">
				Los métodos de prueba deben ser package-private (sin <code class="text-orange-300">public</code>), anotados con <code class="text-orange-300">@Test</code> y retornar <code class="text-orange-300">void</code>.
			</p>
		</div>

		<!-- Comandos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-orange-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-orange-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Comandos</span>
				</div>
			</div>
			<p class="text-sm text-slate-400 pl-3">Ejecutar tests</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">mvn test</code></pre>
			<p class="text-sm text-slate-400 pl-3">Ejecutar con reporte de cobertura JaCoCo</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">mvn test jacoco:report</code></pre>
		</div>
	`;
}
