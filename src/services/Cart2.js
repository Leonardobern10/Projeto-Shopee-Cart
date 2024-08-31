/**
 * Inicia a classe como uma lista vazia.
 */
class Cart {
  constructor() {
    this.cart = [];
  }

  /**
   * Adiciona o item ao carrinho.
   * 
   * @param {Item} item - Item que será recebido para adição no carrinho. 
   */
  addItem(item) {
    this.cart.push(item);
  }

  /**
   * Pesquisa o item no carrinho através do nome.
   * Se encontrar retira ele do carrinho.
   * Se não, mostra uma mensagem de erro.
   * 
   * @param {string} name - Nome do item 
   */
  deleteItem(name) {
    const index = this.cart.findIndex((item) => item.name === name);

    if (index !== -1) {
      this.cart.splice(index, 1);
      return;
    }

    console.error("Item não encontrado!");
  }

  /**
   * O numero do indice é diminuido de uma unidade para 
   * que o valor passado tenha equivalencia ao item 
   * que se deseja excluir.
   * 
   * @param {int} index - Indice do item na lista
   */
  removeItem(index) {
    const deleteIndex = index - 1;
    if (deleteIndex >= 0 && deleteIndex < this.cart.length) {
      const delItem = this.cart[deleteIndex];
      if (delItem.quantity === 1) {
        this.deleteItem(delItem.name);
      } else {
        delItem.quantity -= 1;
      }
    } else {
      console.log("Item não encontrado!");
    }
  }

  /**
   * Calcula o valor final dos itens no carrinho.
   */
  calculateTotal() {
    const result = this.cart.reduce((total, item) => total + item.subtotal, 0);
    console.log("\nSHOPEE CART TOTAL IS: ");
    console.log(result);
  }

  /**
   * Mostra a relação dos itens que estão no carrinho.
   */
  displayCart() {
    console.log("\nSHOPEE CART LIST: ");
    this.cart.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal}`
      );
    });
  }
}

export default Cart;
