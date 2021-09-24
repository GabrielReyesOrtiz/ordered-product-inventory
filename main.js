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
      Swal.fire("Error", "Todos los campos son requeridos", "error");
      return;
    }
    let added = this._inventory.add(product);

    if (added === false) {
      Swal.fire("Error", "Participante ya registrado", "error");
      return;
    }
    if (added === true) {
      Swal.fire("Correcto", "Se agregó un nuevo participante", "success");
      return;
    }
    Swal.fire("Error", "No puede agregar mas productos", "error");
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#idDelete");
    let idDelete = inpIdDelete.value;

    let del = this._inventory.delete(idDelete);

    if (del === false) {
      Swal.fire("Error", "Producto no existe", "error");
      return;
    }
    Swal.fire("Producto eliminado", "Eliminado", "success");
  };

  _search = () => {
    let inpIdFind = document.querySelector("#idFind");
    let idFind = inpIdFind.value;

    let find = this._inventory.searchProduct(idFind);

    if (find === false) {
      Swal.fire("Error", "Producto no existe", "error");
      return;
    }
    Swal.fire("Producto encontrado", "Encontrado", "success");
  };

  _list = () => {
    this._inventory.list();
  };
  _listReverse = () => {
    this._inventory.listReverse();
  };
}

new App();
