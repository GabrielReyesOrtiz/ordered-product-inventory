import Product from "./product.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);

    let btnFind = document.querySelector("#btnFind");
    btnFind.addEventListener("click", this._search);

    let btnDelete = document.querySelector("#btnDelete");
    btnDelete.addEventListener("click", this._delete);

    let btnList = document.querySelector("#btnList");
    btnList.addEventListener("click", this._list);

    let btnListI = document.querySelector("#btnListI");
    btnListI.addEventListener("click", this._listReverse);
  }

  _readProduct() {
    //leer los inputs (la entrada de datos)
    let inpId = document.querySelector("#id");
    let inpName = document.querySelector("#name");
    let inpQuantity = document.querySelector("#quantity");
    let inpCost = document.querySelector("#cost");

    //obtener el valor
    let id = inpId.value; //string
    let name = inpName.value; //string
    let quantity = Number(inpQuantity.value); //número
    let cost = Number(inpCost.value); //número

    //si cada campo tiene un valor ó que tenga info.
    if (id && name && quantity && cost) {
      //se limpia el formulario
      inpId.value = "";
      inpName.value = "";
      inpQuantity.value = "";
      inpCost.value = "";

      //se crea al participante
      return new Product(id, name, quantity, cost);
    }
    //si falta algún campo, entonces regresa false
    return false;
  }

  _addProduct = () => {
    let product = this._readProduct();

    if (!product) {
      document.getElementById("elementAdd").innerHTML =
        "Error todos los elementos son requeridos";
      return;
    }
    let added = this._inventory.add(product);

    if (added === false) {
      document.getElementById("elementAdd").innerHTML =
        "Error, Producto ya registrado";
      return;
    }
    if (added === true) {
      document.getElementById("elementAdd").innerHTML =
        "Se agrego correctamente nuevo producto";
      return;
    }
    document.getElementById("elementAdd").innerHTML =
      "Error, solo se pueden agregar hasta 20 productos";
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#idDelete");
    let idDelete = inpIdDelete.value;

    let element2 = document.getElementById("elementDelete");
    let del = this._inventory.delete(idDelete, element2);

    if (del === false) {
      document.getElementById("elementDelete").innerHTML =
        "Null ---> El producto no existe ";
      return;
    }
  };

  _search = () => {
    let inpIdFind = document.querySelector("#idFind");
    let idFind = inpIdFind.value;

    let element = document.getElementById("elementFind");

    let find = this._inventory.searchProduct(idFind, element);

    if (find === false) {
      document.getElementById("elementFind").innerHTML =
        "NUll ----> El producto no existe ";
      return;
    }
  };

  _list = () => {
    let table = document.querySelector("#table");
    document.getElementById("table").innerHTML =
      "<table><tr><td><b>Id de Producto</b></td><td><b>Nombre</b></td><td><b>Cantidad</b></td><td><b>Costo por Unidad</b></td><td><b>Valor de Mercancía</b></td></tr></table>";
    this._inventory.list(table);
  };
  _listReverse = () => {
    let table2 = document.querySelector("#table2");
    document.getElementById("table2").innerHTML =
      "<table><tr><td><b>Id de Producto</b></td><td><b>Nombre</b></td><td><b>Cantidad</b></td><td><b>Costo por Unidad</b></td><td><b>Valor de Mercancía</b></td></tr></table>";
    this._inventory.listReverse(table2);
  };
}

new App();
