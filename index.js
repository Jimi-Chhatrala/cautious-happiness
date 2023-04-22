import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://cautious-happiness-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);

const database = getDatabase(app);

const shoppingListInDB = ref(database, "shoppingList");
// const cartItemsInDB = ref(database, "cartItems");

// console.log(app);

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);

  clearInputFielsEl();

  appentItemToShoppingListEl(inputValue);
  // console.log(`${inputValue} added to database.`);
});

function clearInputFielsEl() {
  inputFieldEl.value = "";
}

function appentItemToShoppingListEl(inputValue) {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
}
