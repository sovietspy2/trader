
import { STOCKS } from "./constants";

export const initialState = {
  login: "null",
  test: true,
  stocks: {
    loading: false,
    data: null,
    pageSize: 20,
    searchData: null,
  },
  stockInfo: {
    loading: false,
    data: null,
  }
};

export function reducer(draft, action) {
  switch (action.type) {
    case "login":
      draft.login = "I AM LOGGED IN";
      return;
    case "reset":
      return initialState;
    case STOCKS.LOAD_START:
      draft.stocks.loading = true;
      return
    case STOCKS.LOAD_SUCCESS:
      draft.stocks.data = action.data;
      draft.stocks.searchData = action.data;
      draft.stocks.loading = false;
      return;
    case STOCKS.PAGE_SIZE:
      draft.stocks.pageSize = action.data;
      return;
    case STOCKS.INDIVIDUAL_LOAD_START:
      draft.stockInfo.loading = true;
      return;
    case STOCKS.INDIVIDUAL_LOAD_SUCCESS:
      draft.stockInfo.data = action.data;
      console.log(action.data)
      draft.stockInfo.loading = false;
      return;
    case STOCKS.SEARCH:

      if (!action.data) {
        draft.stocks.data = draft.stocks.searchData;
      } else {
        draft.stocks.data = draft.stocks.searchData.filter(item => {
          return item.symbol === action.data;
        });
        console.log(draft.stocks.data);
      }
  }
}