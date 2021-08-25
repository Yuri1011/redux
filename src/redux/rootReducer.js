import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME } from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 5;
  }

  return state;
}

const initialThemeState = {
  value: "light",
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
      break;

    default:
      return state;
      break;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
