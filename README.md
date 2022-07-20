# EVMD Front-End/Mobile Test

## Instruções
- Dê um fork deste repositório.
- Ao finalizar o desafio, faça o commit e, em seguida crie uma pull request neste repositório.

## Desafio
Dentro do projeto criado existem duas telas que serão a base do desafio: *Home* e *Details*.
O desafio consiste em fazer a leitura da única tabela do banco de dados (SQLite) existente na aplicação e criar uma listagem dos usuários dessa tabela na tela *Home*. Ao clicar em um dos usuários listados, o aplicativo deverá abrir a tela *Details* com os detalhes do usuário selecionado anteriormente, além de poder favoritar o usuário.
O nome do banco de dados, para criar a conexão, está salvo dentro das variáveis de ambiente.

## Regras/Requisitos

- Utilizar Expo
- Utilizar o componente UserCard já criado na pasta components para os itens da listagem
- Carregar no UserCard os dados respectivos.
- A listagem deve possuir paginação (Lazy Load/Scroll Infinito)
- Utilizar REDUX para persistir o identificador do usuário selecionado e usá-lo para carregar os dados na tela de detalhes
- Tornar funcional o botão ‘Favorito’, persistindo o booleano no banco 

## Desejável
- Utilizar as melhores práticas para aumento de desempenho do app.
