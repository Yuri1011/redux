import { createStore } from "redux";
import { decrement, increment } from "./redux/actions-creators.js";
import { rootReducer } from "./redux/rootReducer.js";
import { INCREMENT, DECREMENT } from "./redux/types.js";
import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "INIT_APLICATION" });

asyncBtn.addEventListener("click", () => {});

themeBtn.addEventListener("click", () => {
  //   document.body.classList.toggle("dark");
});
