<h3>Documentação da Aplicação Web com Logs</h3>
<h4>Visão Geral</h4>
<p>Esta aplicação web foi projetada para realizar a verificação de números pares e ímpares, enquanto registra eventos e erros em um arquivo de log (é uma abordagem fundamental para entender a captura e manutenção de logs).
O sistema é dividido em duas partes principais:</p>
<ol>
  <li>Frontend: Interface web responsável pela interação do usuário</li>
  <li>Backend: Servidor Node.js com Express.js que gerencia os logs e os registra em um arquivo .txt.</li>
</ol>.
<h4>Funcionalidades Principais</h4>
<ol>
  <li>Verificar se um número é par ou ímpar.</li>
  <li>Registrar logs de erros e informações em um arquivo de texto (logs.txt):</li>
  <ul>
    <li>
      Logs de ERROS: Capturam problemas como entradas inválidas ou falhas no carregamento da imagem.
    </li>
    <li>
      Logs de INFO: Capturam eventos normais, como o processamento de uma entrada válida.
    </li>
  </ul>
  <li>Capturar data e hora de cada evento ou erro para rastreabilidade.</li>
</ol>
<h4>Dependências do Projeto</h4>
<ol>
  <li>Node.js: Ambiente de execução do backend.</li>
  <li>Express.js: Framework usado para criar o servidor e gerenciar rotas.</li>
</ol>
<p>instale as dependências usando: <code>npm install express</code></p>
<h4>Detalhes da Implementação</h4>
<p>O FrontEnd</p>
<ol>
  <li>Um campo de texto para o usuário inserir o número.</li>
  <li>Um botão para verificar se o número é par ou ímpar.</li>
  <li>Uma área de resultado que exibe se o número é par ou ímpar.</li>
  <li>Lógica em JavaScript para capturar erros e enviar logs ao backend.</li>
</ol>
<p>Componentes do FrontEnd</p>
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <p>Processamento dos dados do usuário e envio de logs ao backend via API RESTful.</p>
</ol>
<p>O BackEnd</p>
<p>O backend foi implementado com Node.js e Express.js, e tem como funções principais:</p>
<ol>
  <li>Servir os arquivos estáticos do frontend.</li>
  <li>Gerenciar um endpoint RESTful para registrar logs no arquivo logs.txt.</li>
</ol>
<p>Componentes do BackEnd</p>
<ol>
  <li>Servidor (server.js)</li>
  <li>Registro de logs no arquivo logs.txt</li>
  <p>Formato: [TIMESTAMP] [TIPO] MENSAGEM.</p>
</ol>
<h4>Como executar o projeto</h4>
<ol>
  <li>Clone o repositório ou copie os arquivos.</li>
  <li>instale as depedências: <code>npm install</code></li>
  <li>inicie o servidor <code>node server.js</code></li>
  <li>Acesse a aplicação no navegador em <code>http://localhost:3000.</code></li>
</ol>
<h4>Conclusão</h4>
<p>Este projeto demonstra a captura e gerenciamento básico de logs em uma aplicação web simples. Ele é ideal para compreender conceitos fundamentais de logs, interações frontend-backend e a criação de APIs RESTful com Node.js e Express.js.</p>
