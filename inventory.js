//clase para agregar los pasrticipantes a la "tabla"

export default class Inventory {
  constructor() {
    //vector para agregar a todos los participantes
    this._inventory = new Array();

    //tabla
  }

  //agrega los participantes
  add(product) {
    let pos = this._find(product);

    //si ya está registrado, no lo agrega
    if (pos >= 0) {
      return false;
    }

    //se muestra en la tabla

    //si no lo encuentra, lo agrega
    if (this._inventory.length < 20) {
      this._addOrdered(product);

      return true;
    }
    return;
  }
  _addOrdered(product) {
    this._inventory.push(product);
    for (let i = 0; i < this._inventory.length - 1; i++) {
      if (this._inventory[i].getId() > product.getId()) {
        for (let a = this._inventory.length - 1; a >= i; a--) {
          this._inventory[a] = this._inventory[a - 1];
        }
        this._inventory[i] = product;
        return;
      }
    }
    return;
  }

  _find(product) {
    let pos = -1;
    let pos2 = -1;
    this._inventory.forEach((p) => {
      if (p.getId() === product.getId()) {
        pos++;
        pos2 = pos;
        return;
      } else {
        pos++;
      }
    });

    return pos2;
  }

  _search(id) {
    for (let i = 0; i < this._inventory.length; i++) {
      if (this._inventory[i].getId() <= id) {
        if (id == this._inventory[i].getId()) {
          return i;
        }
      } else {
        return null;
      }
    }
  }

  searchProduct(idFind, element) {
    let find = this._search(idFind);
    if (find != null) {
      element.innerHTML =
        "Producto encontrado ID: " +
        this._inventory[find].getId() +
        " Nombre: " +
        this._inventory[find].getName() +
        " Cantidad existente: " +
        this._inventory[find].getQuantity() +
        " Costo: $" +
        this._inventory[find].getCost();
      return true;
    }

    return false;
  }

  delete(idDelete, element2) {
    let search = this._search(idDelete);
    if (search != null) {
      element2.innerHTML =
        "Se ELIMINO este producto de su inventario  ID = " +
        this._inventory[search].getId() +
        " NOMBRE = " +
        this._inventory[search].getName();
      for (let i = search; i < this._inventory.length; i++) {
        this._inventory[i] = this._inventory[i + 1];
      }

      this._inventory.pop();

      return true;
    }

    return false;
  }

  list(table) {
    for (let i = 0; i < this._inventory.length; i++) {
      let row = table.insertRow(-1);

      let colId = row.insertCell(0);
      let colName = row.insertCell(1);
      let colQuantity = row.insertCell(2);
      let colCost = row.insertCell(3);
      let colTotalValue = row.insertCell(4);

      colId.innerHTML = this._inventory[i].getId();
      colName.innerHTML = this._inventory[i].getName();
      colQuantity.innerHTML = this._inventory[i].getQuantity();
      colCost.innerHTML = "$ " + this._inventory[i].getCost();
      colTotalValue.innerHTML = "$ " + this._inventory[i].getTotal();
    }
    return;
  }

  listReverse(table2) {
    for (let i = this._inventory.length; i > 0; i--) {
      let row = table2.insertRow(-1);

      let colId = row.insertCell(0);
      let colName = row.insertCell(1);
      let colQuantity = row.insertCell(2);
      let colCost = row.insertCell(3);
      let colTotalValue = row.insertCell(4);

      colId.innerHTML = this._inventory[i - 1].getId();
      colName.innerHTML = this._inventory[i - 1].getName();
      colQuantity.innerHTML = this._inventory[i - 1].getQuantity();
      colCost.innerHTML = "$ " + this._inventory[i - 1].getCost();
      colTotalValue.innerHTML = "$ " + this._inventory[i - 1].getTotal();
    }
    return;
  }
}
