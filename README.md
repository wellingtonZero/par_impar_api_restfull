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
