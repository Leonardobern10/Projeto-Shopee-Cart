# Shopee Cart

O **Shopee Cart** é um projeto simples de carrinho de compras desenvolvido como desafio na formação NodeJs Developer (DIO) em JavaScript utilizando classes ES6. Este projeto tem como objetivo fornecer uma implementação básica de funcionalidades comuns em carrinhos de compras, como adicionar itens, remover itens, calcular o total, e exibir o conteúdo do carrinho. Ideal para quem deseja aprender ou aprimorar suas habilidades em JavaScript orientado a objetos.

## Funcionalidades

- **Adicionar Itens ao Carrinho**: Adiciona itens ao carrinho de compras.
- **Remover Itens do Carrinho**: Remove uma quantidade específica de um item ou remove o item completamente do carrinho.
- **Exibir Itens no Carrinho**: Lista todos os itens presentes no carrinho com seus detalhes.
- **Calcular Total do Carrinho**: Calcula o valor total dos itens presentes no carrinho.

## Estrutura do Projeto

O projeto é composto por duas classes principais:

- **Item**: Representa um item que pode ser adicionado ao carrinho. Contém propriedades como nome, preço e quantidade, além de calcular o subtotal dinamicamente.
- **Cart**: Gerencia o carrinho de compras, permitindo adicionar, remover itens, calcular o total e exibir os itens no carrinho.

## Exemplo de Uso

```javascript
import Cart from "./services/Cart2.js";
import Item from "./services/Item2.js";

// Criação de um novo carrinho
const cart = new Cart();

// Adição de itens ao carrinho
const item1 = new Item("Hot Wheels Ferrari", 20.99, 1);
const item2 = new Item("Hot Wheels Lamborghini", 39.99, 3);

cart.addItem(item1);
cart.addItem(item2);

// Remoção e manipulação dos itens no carrinho
cart.deleteItem(item1.name);
cart.removeItem(1);

// Exibição do carrinho e cálculo do total
cart.displayCart();
cart.calculateTotal();
```

## Pré-requisitos

- Node.js instalado no sistema.

## Como Executar

1. Clone o repositório para o seu ambiente local.
2. Navegue até o diretório do projeto.
3. Execute o arquivo principal que utiliza as classes `Cart` e `Item` para testar as funcionalidades.

```bash
node src/index.js
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License.
