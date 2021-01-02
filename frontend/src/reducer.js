
import { useImmerReducer } from "use-immer";

export const initialState = {
    login: "null",
    test: true,
};

export function reducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.login="I AM LOGGED IN";
        return;
      case "reset":
        return initialState;
      case "decrement":
        return void draft.count--;
    }
  }