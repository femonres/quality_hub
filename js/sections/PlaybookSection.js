import { SectionBase }    from './SectionBase.js';
import { CodeSwitcher }   from '../core/CodeSwitcher.js';

/**
 * @file PlaybookSection.js
 * Sección de playbook con pestañas de código por stack tecnológico.
 *
 * DIP: ClipboardManager es inyectado vía constructor.
 * SRP: la lógica de UI (tabs, copia) se delega a CodeSwitcher y ClipboardManager.
 *
 * Los eventos se vinculan programáticamente en `onActivate`, sin handlers inline.
 */
export class PlaybookSection extends SectionBase {
  /** @param {import('../core/ClipboardManager.js').ClipboardManager} clipboardManager */
  constructor(clipboardManager) {
    super();
    this._clipboard = clipboardManager;
    this._switcher  = null;
    this._bound     = false;
  }

  get id() { return 'playbook'; }

  render() {
    return /* html */`
      <div>
        <h2 class="text-3xl font-bold mb-2">Playbook Técnico</h2>
        <p class="text-slate-400">Lineamientos por stack tecnológico y ejemplos de implementación.</p>
      </div>

      <div id="playbook-container" class="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
        <div class="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button data-stack="dotnet" class="code-tab px-6 py-4 text-sm font-medium border-b-2 border-blue-500 text-blue-400">.NET</button>
          <button data-stack="java"   class="code-tab px-6 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500">Java</button>
          <button data-stack="angular"class="code-tab px-6 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500">Angular</button>
          <button data-stack="python" class="code-tab px-6 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500">Python</button>
          <button data-stack="ts"     class="code-tab px-6 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500">TypeScript</button>
        </div>

        <div class="p-6">
          <!-- .NET -->
          <div id="code-dotnet" class="code-content space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">xUnit + Moq</span>
              <button data-copy="dotnet-sample" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i> Copiar
              </button>
            </div>
            <pre><code id="dotnet-sample" class="language-csharp">public class UserServiceTests {
    [Fact]
    public async Task CreateUser_ShouldReturnTrue_WhenDataIsValid() {
        // 1. Arrange
        var mockRepo = new Mock&lt;IUserRepository&gt;();
        var service  = new UserService(mockRepo.Object);
        var newUser  = new User { Name = "Juan", Email = "juan@example.com" };

        mockRepo.Setup(r =&gt; r.SaveAsync(newUser)).ReturnsAsync(true);

        // 2. Act
        var result = await service.CreateUser(newUser);

        // 3. Assert
        Assert.True(result);
        mockRepo.Verify(r =&gt; r.SaveAsync(It.IsAny&lt;User&gt;()), Times.Once);
    }
}</code></pre>
          </div>

          <!-- Java -->
          <div id="code-java" class="code-content hidden space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">JUnit 5 + Mockito</span>
              <button data-copy="java-sample" class="copy-btn text-xs text-slate-500 hover:text-white flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i> Copiar
              </button>
            </div>
            <pre><code id="java-sample" class="language-java">class ProductServiceTest {
    @Test
    void shouldThrowExceptionWhenProductStockIsLow() {
        // 1. Arrange
        ProductRepository repository = mock(ProductRepository.class);
        ProductService    service    = new ProductService(repository);
        Product           product    = new Product("Laptop", 0);

        when(repository.findByName("Laptop")).thenReturn(Optional.of(product));

        // 2. Act & 3. Assert
        assertThrows(OutOfStockException.class, () -&gt; {
            service.purchase("Laptop", 1);
        });
    }
}</code></pre>
          </div>

          <!-- Angular -->
          <div id="code-angular" class="code-content hidden">
            <pre><code class="language-typescript">it('should render user name after async load', fakeAsync(() =&gt; {
    // Arrange
    const fixture   = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    userService.getUser.and.returnValue(of({ name: 'BTG User' }));

    // Act
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    // Assert
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('BTG User');
}));</code></pre>
          </div>

          <!-- Python -->
          <div id="code-python" class="code-content hidden">
            <pre><code class="language-python">import pytest
from app.services import calculate_tax

def test_calculate_tax_base_case():
    # Arrange
    amount   = 100
    expected = 119

    # Act
    result = calculate_tax(amount, tax_rate=0.19)

    # Assert
    assert result == expected</code></pre>
          </div>

          <!-- TypeScript -->
          <div id="code-ts" class="code-content hidden">
            <pre><code class="language-typescript">describe('AuthMiddleware', () =&gt; {
  it('should return 401 if no token is provided', async () =&gt; {
    const req  = mockRequest();
    const res  = mockResponse();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });
});</code></pre>
          </div>
        </div>
      </div>
    `;
  }

  /** Vincula tabs y botones de copia una sola vez tras el primer mount. */
  onActivate(sectionEl) {
    if (this._bound) return;
    this._bound = true;

    const container = sectionEl.querySelector('#playbook-container');
    if (!container) return;

    this._switcher = new CodeSwitcher(container);

    container.querySelectorAll('.code-tab').forEach((btn) => {
      btn.addEventListener('click', () =>
        this._switcher.switchTo(btn.dataset.stack, btn)
      );
    });

    container.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () =>
        this._clipboard.copy(btn.dataset.copy, btn)
      );
    });
  }
}
