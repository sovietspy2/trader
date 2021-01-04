import { STOCKS } from "./constants";
const API_ADDRESS = "http://localhost:8080";

export function getStocks(dispatch) {
    dispatch({ type: STOCKS.LOAD_START });

    if (localStorage.getItem('stocks') && false) {
        dispatch({ type: STOCKS.LOAD_SUCCESS, data: JSON.parse(localStorage.getItem('stocks')) });
        console.log("FAST LOADED FROM CACHE")
    } else {

        fetch(API_ADDRESS + "/stocks")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    dispatch({ type: STOCKS.LOAD_SUCCESS, data: result });
                    //localStorage.setItem('stocks', JSON.stringify(result));
                    //console.log("CACHE POPULATED")

                },
                (error) => {
                    console.error(error);
                }
            )
    }
}


export function getStockInfo(dispatch, id) {
    dispatch({ type: STOCKS.INDIVIDUAL_LOAD_START });

    fetch(API_ADDRESS + "/stocks/" + id)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                dispatch({ type: STOCKS.INDIVIDUAL_LOAD_SUCCESS, data: result });
            },
            (error) => {
                console.error(error);
            }
        )
}

export function changeStocksPageSize(dispatch, size) {
    dispatch({ type: STOCKS.PAGE_SIZE, data: size })
}

export function searchStock(dispatch, name) {
    dispatch({ type: STOCKS.SEARCH, data: name })
}

