export default class Product {
  constructor(id, name, quantity, cost) {
    this._id = Number(id);
    this._name = name.toUpperCase();
    this._quantity = Number(quantity);
    this._cost = Number(cost);
    this._total = Number(quantity) * Number(cost);
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getQuantity() {
    return this._quantity;
  }

  getCost() {
    return this._cost;
  }
  setName(id) {
    this._id = id;
  }

  setName(name) {
    this._name = name;
  }

  setQuantity(quantity) {
    this._quantity = quantity;
  }

  setCost(cost) {
    this._cost = cost;
  }

  getTotal() {
    return Number(this._total);
  }

  setTotal(total) {
    this._total = total;
  }
}
