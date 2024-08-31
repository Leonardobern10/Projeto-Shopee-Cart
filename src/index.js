/*Importação das classes */
import Cart from "./services/Cart2.js";
import Item from "./services/Item2.js";

/*Criação do carrinho*/
const cart = new Cart();

/*Mensagem de inicio */
console.log("WELCOME TO THE YOUR SHOPEE CART!");

/*Instanciação dos itens */
const item1 = new Item("Hot Wheels Ferrari", 20.99, 1);
const item2 = new Item("Hot Wheels Lamborghini", 39.99, 3);

/*Chamada dos métodos */
cart.addItem(item1); // Adicion um item no carrinho
cart.addItem(item2); // Adiciona um item no carrinho
cart.deleteItem(item1.name); // Remove a quantiade de um item do carrinho
cart.removeItem(1); // Remove o item da carrinho
cart.displayCart(); // Mostra os itens do carrinho
cart.calculateTotal(); // Calcula o valor final