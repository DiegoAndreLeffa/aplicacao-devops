# aplicacao-devops

## N1 Devops

- Faça o clone do repositório.
- Depois do repositório clonado, abra-o no vscode ou na IDE de sua escolha.
- Depois de aberto, abra o terminal e digite (npm install).
- Para rodar a aplicação, digite no terminal (node src/app.js).
- Se quiser testar abra no Postman ou Insomnia com o localhost:3000.

Essa aplicação funciona da seguinte forma:

`Rota GET`: Endpoint "/"

Retorno:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>N1 sobre a matéria de Devops ADS31 com o professor Flaris!</h1>
    <p>Integrantes do grupo: Diego André, Maria Egydio e Leonardo Giora</p>
  </body>
</html>
```

`Rota GET`: Endpoint "/integrantes"

Retorno:

```
{
  'integrantes': [
    { 'nome': 'Diego André' },
    { 'nome': 'Leonardo Giora' },
    { 'nome': 'Maria Egydio' },
  ]
}
```
