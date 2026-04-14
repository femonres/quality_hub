export function dotnetPanel() {
  return `
		<!-- Requisitos previos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Requisitos previos</span>
				</div>
				<button data-copy="dotnet_requisitos_previos" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Agrega los paquetes NuGet al proyecto de pruebas:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="dotnet_requisitos_previos" class="language-bash">dotnet add package xunit
dotnet add package xunit.runner.visualstudio
dotnet add package Moq
dotnet add package coverlet.collector
</code></pre>
		</div>

		<!-- Estructura del proyecto -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Estructura del proyecto</span>
				</div>
			</div>
			<pre class="bg-black/40 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto">
<code>mi_solucion/
│
├── MyApp/
│   └── Users/
│       └── UserService.cs
│
├── MyApp.Tests/
│   ├── MyApp.Tests.csproj
│   └── Users/
│       └── UserServiceTest.cs
│
└── mi_solucion.sln</code></pre>
		</div>

		<!-- Configuración de pruebas -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Configuración de pruebas (📄MyApp.Tests.csproj)</span>
				</div>
				<button data-copy="dotnet_config_pruebas" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<p class="text-sm text-slate-400 pl-3">Proyecto de pruebas separado que referencia el proyecto principal:</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="dotnet_config_pruebas" class="language-xml">&lt;Project Sdk="Microsoft.NET.Sdk"&gt;
  &lt;PropertyGroup&gt;
    &lt;TargetFramework&gt;net8.0&lt;/TargetFramework&gt;
  &lt;/PropertyGroup&gt;
  &lt;ItemGroup&gt;
    &lt;PackageReference Include="xunit" Version="2.8.1" /&gt;
    &lt;PackageReference Include="xunit.runner.visualstudio" Version="2.8.1" /&gt;
    &lt;PackageReference Include="Moq" Version="4.20.70" /&gt;
    &lt;PackageReference Include="coverlet.collector" Version="6.0.2" /&gt;
  &lt;/ItemGroup&gt;
  &lt;ItemGroup&gt;
    &lt;ProjectReference Include="../MyApp/MyApp.csproj" /&gt;
  &lt;/ItemGroup&gt;
&lt;/Project&gt;
</code></pre>
		</div>

		<!-- Código implementado -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Código implementado (📄UserService.cs)</span>
				</div>
				<button data-copy="dotnet_codigo_implementado" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="dotnet_codigo_implementado" class="language-csharp">public class UserService {
    private readonly IUserRepository _repo;

    public UserService(IUserRepository repo) {
        _repo = repo;
    }

    public async Task&lt;User&gt; GetDetails(int id) {
        var user = await _repo.GetById(id);
        if (user == null) throw new NotFoundException("User not found");
        return user;
    }
}
</code></pre>
		</div>

		<!-- Prueba asociada -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Prueba asociada (📄UserServiceTest.cs)</span>
				</div>
				<button data-copy="dotnet_prueba_asociada" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
					<i data-lucide="copy" class="w-3 h-3"></i> Copiar
				</button>
			</div>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code id="dotnet_prueba_asociada" class="language-csharp">[Fact]
public async Task GetUser_ShouldThrowException_WhenUserNotFound() {
    // 1. Arrange: Simulamos la dependencia del repositorio
    var mockRepo = new Mock&lt;IUserRepository&gt;();
    mockRepo.Setup(r =&gt; r.GetById(99)).ReturnsAsync((User)null);
    var service = new UserService(mockRepo.Object);

    // 2. Act &amp; 3. Assert: Validamos la excepción esperada
    await Assert.ThrowsAsync&lt;NotFoundException&gt;(() =&gt; service.GetDetails(99));
}
</code></pre>
			<p class="text-sm text-slate-400 pl-3">
				Los métodos de prueba deben ser públicos, retornar <code class="text-blue-300">void</code> o <code class="text-blue-300">Task</code> y estar decorados con <code class="text-blue-300">[Fact]</code> o <code class="text-blue-300">[Theory]</code>.
			</p>
		</div>

		<!-- Comandos -->
		<div class="relative rounded-xl bg-slate-900/40 p-4 space-y-3">
			<div class="absolute left-0 top-0 h-full w-1 bg-blue-400/70 rounded-l-xl"></div>
			<div class="flex items-center justify-between pl-3">
				<div class="flex items-center gap-2 text-blue-400">
					<i data-lucide="check-check" class="w-4 h-4"></i>
					<span class="text-sm font-medium">Comandos</span>
				</div>
			</div>
			<p class="text-sm text-slate-400 pl-3">Ejecutar tests</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">dotnet test</code></pre>
			<p class="text-sm text-slate-400 pl-3">Ejecutar con coverage</p>
			<pre class="bg-white/5 rounded-md px-4 py-1 text-sm text-slate-200 font-mono ml-3 overflow-x-auto leading-none">
<code class="language-bash">dotnet test --collect:"XPlat Code Coverage"</code></pre>
		</div>
	`;
}
