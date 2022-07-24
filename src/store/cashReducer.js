//Создаем дефолтное состояние
const defaultState = {
    cash: 0
}

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"
  
// Первым параметром является состояние, вторым объект (action = {type: "", payload: ""})
export const cashReducer = (state = defaultState, action) => {
    //Логика фокусируется на том, какой action проброшен в функцию
    switch(action.type){
      case ADD_CASH:
        return {...state, cash: state.cash + action.payload}
      case GET_CASH:
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }
}

export const addCashAction = (payload) => ({type: ADD_CASH, payload})
export const getCashAction = (payload) => ({type: GET_CASH, payload})