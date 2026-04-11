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
 *
 * NOTA sobre el contenido de `code`:
 *   Los valores son cadenas HTML-safe (usan entidades como &lt; y &gt;) porque
 *   se insertan directamente dentro de <pre><code> al renderizar el HTML.
 */

export const STACK_CONFIGS = [
  // ─── .NET ────────────────────────────────────────────────────────────────
  {
    id: 'dotnet',
    label: '.NET',
    badge: { text: 'xUnit + Moq', class: 'bg-blue-500/10 text-blue-400' },
    description:
      'El estándar exige validar casos límite y excepciones para garantizar estabilidad en producción.',
    snippets: {
      config: {
        lang: 'language-xml',
        code: `&lt;Project Sdk="Microsoft.NET.Sdk"&gt;
  &lt;PropertyGroup&gt;
    &lt;TargetFramework&gt;net8.0&lt;/TargetFramework&gt;
  &lt;/PropertyGroup&gt;
  &lt;ItemGroup&gt;
    &lt;PackageReference Include="xunit" Version="2.8.1" /&gt;
    &lt;PackageReference Include="xunit.runner.visualstudio" Version="2.8.1" /&gt;
    &lt;PackageReference Include="Moq" Version="4.20.70" /&gt;
  &lt;/ItemGroup&gt;
&lt;/Project&gt;`,
      },
      impl: {
        lang: 'language-csharp',
        code: `public class UserService {
    private readonly IUserRepository _repo;

    public UserService(IUserRepository repo) {
        _repo = repo;
    }

    public async Task&lt;User&gt; GetDetails(int id) {
        var user = await _repo.GetById(id);
        if (user == null) throw new NotFoundException("User not found");
        return user;
    }
}`,
      },
      test: {
        lang: 'language-csharp',
        code: `[Fact]
public async Task GetUser_ShouldThrowException_WhenUserNotFound() {
    // Arrange: Simulamos la dependencia del repositorio
    var mockRepo = new Mock&lt;IUserRepository&gt;();
    mockRepo.Setup(r =&gt; r.GetById(99)).ReturnsAsync((User)null);
    var service = new UserService(mockRepo.Object);

    // Act &amp; Assert: Validamos la excepción esperada
    await Assert.ThrowsAsync&lt;NotFoundException&gt;(() =&gt; service.GetDetails(99));
}`,
      },
    },
  },

  // ─── Java ────────────────────────────────────────────────────────────────
  {
    id: 'java',
    label: 'Java',
    badge: { text: 'JUnit 5 + Mockito', class: 'bg-orange-500/10 text-orange-400' },
    description:
      'Se recomienda aislar servicios con mocks y validar reglas de negocio con escenarios de excepción.',
    snippets: {
      config: {
        lang: 'language-xml',
        code: `&lt;dependency&gt;
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
&lt;/dependency&gt;`,
      },
      impl: {
        lang: 'language-java',
        code: `public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public void purchase(String name, int qty) {
        Product product = repository.findByName(name)
            .orElseThrow(() -&gt; new NotFoundException("Product not found"));
        if (product.getStock() &lt; qty) throw new OutOfStockException("Insufficient stock");
    }
}`,
      },
      test: {
        lang: 'language-java',
        code: `class ProductServiceTest {
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
}`,
      },
    },
  },

  // ─── Angular ─────────────────────────────────────────────────────────────
  {
    id: 'angular',
    label: 'Angular',
    badge: { text: 'Jasmine + Karma', class: 'bg-red-500/10 text-red-300' },
    description:
      'Se prioriza el desacoplamiento de la lógica del componente respecto al DOM para acelerar la ejecución de tests.',
    snippets: {
      config: {
        lang: 'language-json',
        code: `{
  "scripts": {
    "test": "ng test --watch=false --browsers=ChromeHeadless"
  },
  "devDependencies": {
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.3",
    "karma-chrome-launcher": "~3.2.0"
  }
}`,
      },
      impl: {
        lang: 'language-typescript',
        code: `@Injectable({ providedIn: 'root' })
export class FinanceService {
  calculateInterest(principal: number, rate: number): number {
    return principal + principal * rate;
  }
}`,
      },
      test: {
        lang: 'language-typescript',
        code: `it('should calculate compound interest correctly', () =&gt; {
    // Arrange: Preparamos los datos sintéticos
    const principal = 1000;
    const rate = 0.05;

    // Act: Ejecutamos la lógica
    const result = service.calculateInterest(principal, rate);

    // Assert: Validamos el resultado esperado
    expect(result).toEqual(1050);
});`,
      },
    },
  },

  // ─── Python ──────────────────────────────────────────────────────────────
  {
    id: 'python',
    label: 'Python',
    badge: { text: 'pytest + Faker', class: 'bg-emerald-500/10 text-emerald-300' },
    description:
      'El enfoque en Python combina pruebas unitarias rápidas con generación de datos sintéticos para cubrir casos borde.',
    snippets: {
      config: {
        lang: 'language-ini',
        code: `[tool.pytest.ini_options]
addopts = "-q --maxfail=1"
testpaths = ["tests"]

[tool.coverage.run]
branch = true
source = ["app"]`,
      },
      impl: {
        lang: 'language-python',
        code: `def create_customer_payload(name: str, email: str, credit_limit: int) -&gt; dict:
    if credit_limit &lt;= 0:
        raise ValueError("credit_limit must be greater than zero")
    return {
        "name": name,
        "email": email,
        "credit_limit": credit_limit,
    }`,
      },
      test: {
        lang: 'language-python',
        code: `import pytest
from faker import Faker
from app.customers import create_customer_payload

fake = Faker()

def test_create_customer_payload_is_valid():
    payload = create_customer_payload(fake.name(), fake.email(), 5000)

    assert payload["name"]
    assert "@" in payload["email"]
    assert payload["credit_limit"] &gt; 0`,
      },
    },
  },

  // ─── TypeScript ──────────────────────────────────────────────────────────
  {
    id: 'ts',
    label: 'TypeScript',
    badge: { text: 'Jest + ts-jest', class: 'bg-cyan-500/10 text-cyan-300' },
    description:
      'En TypeScript, privilegiamos funciones atómicas, manejo explícito de errores y contratos fuertemente tipados.',
    snippets: {
      config: {
        lang: 'language-json',
        code: `{
  "scripts": {
    "test": "jest --coverage"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "@types/jest": "^29.5.14"
  }
}`,
      },
      impl: {
        lang: 'language-typescript',
        code: `export async function authMiddleware(req, res, next) {
  const token = req.headers?.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return next();
}`,
      },
      test: {
        lang: 'language-typescript',
        code: `describe('AuthMiddleware', () =&gt; {
  it('should return 401 if no token is provided', async () =&gt; {
    const req  = mockRequest();
    const res  = mockResponse();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });
});`,
      },
    },
  },
];
