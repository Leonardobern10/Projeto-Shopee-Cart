
/**
 * Permite a criação de um item.
 */
class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }

    /**
     * Calcula dinamicamente o subtotal de cada item.
     * Subtotal = price x quantity.
     */
    get subtotal() {
        return this.price * this.quantity;
    }
}

export default Item;
