Arquivos JS em PrimeCuts usam imports ES Modules.

- index.html carrega ./js/main.js com: <script type="module" src="./js/main.js"></script>
- js/main.js faz: import './components/navbar.js'
- js/components/navbar.js não exporta nada; apenas registra listeners no DOM.

