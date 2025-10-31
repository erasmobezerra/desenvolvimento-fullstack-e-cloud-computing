### 🧠 Diferença entre programação síncrona e assíncrona

- **Programação síncrona**:
  - Executa tarefas **uma de cada vez**, em ordem.
  - Cada operação **bloqueia** a próxima até ser concluída.
  - Exemplo: leitura de arquivo com `fs.readFileSync()`.
  - Mais fácil de entender, mas **ineficiente** para tarefas demoradas como acesso a banco de dados ou rede.

- **Programação assíncrona**:
  - Permite que múltiplas tarefas sejam iniciadas **simultaneamente**.
  - Usa **callbacks**, **Promises** ou **async/await** para lidar com operações que levam tempo.
  - Exemplo: leitura de arquivo com `fs.readFile()` ou `await fs.promises.readFile()`.
  - Evita bloqueios e melhora a **escalabilidade**, ideal para servidores que lidam com muitas requisições.

### ⚙️ Como Node.js lida com isso

- Node.js é baseado em um **loop de eventos** e usa **I/O não bloqueante**, o que significa que ele pode iniciar uma operação (como ler um arquivo) e continuar executando outras tarefas enquanto espera a resposta.
- Isso é essencial para aplicações como APIs, microsserviços e sistemas em tempo real.

### 🛠️ Técnicas comuns de programação assíncrona

| Técnica       | Descrição                                                                 |
|---------------|---------------------------------------------------------------------------|
| Callbacks     | Funções passadas como argumento para serem chamadas após a conclusão.     |
| Promises      | Objetos que representam o resultado futuro de uma operação assíncrona.    |
| Async/Await   | Sintaxe moderna que facilita a leitura e escrita de código assíncrono.    |

### 📌 Quando usar cada uma?

- Use **síncrono** apenas em scripts simples ou quando o bloqueio não afeta a performance.
- Prefira **assíncrono** em servidores, APIs e qualquer aplicação que precise lidar com múltiplas tarefas simultâneas.

Se quiser, posso mostrar exemplos práticos de cada abordagem em Node.js. Quer ver?
