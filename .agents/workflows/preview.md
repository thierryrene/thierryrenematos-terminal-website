---
description: Como iniciar o servidor HTTP local para preview do Terminal Portfolio
---

# Iniciar Preview Local (Terminal Portfolio Vanilla)

Ao executar este workflow, vamos iniciar rapidamente um servidor HTTP nativo do Python para rodar o arquivo index.html no navegador, pois ele tem dependências de módulos JS ou caminhos absolutos que requerem um protocolo `http://` no lugar de `file://`.

## 1. Abrir Porta e Iniciar Servidor
Mudar para o diretório raiz e iniciar módulo simple HTTP do python; isso iniciará na porta `8080` (estendida).

// turbo
```bash
python3 -m http.server 8080
```

## 2. Acessar o App
Abra seu navegador local (Chrome/Firefox) apontando na url `http://localhost:8080/`.

## 3. Matar o processo (shutdown)
Para parar o processo local caso o terminal fique travado neste comando bash na conversa atual:

```bash
kill -9 $(lsof -t -i:8080)
```
