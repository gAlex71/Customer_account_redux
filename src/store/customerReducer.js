const defaultState = {
    customer: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
    //Логика фокусируется на том, какой action проброшен в функцию
    switch(action.type){
      case ADD_MANY_CUSTOMER:
          //Вначале разворачиваем тот массив, который у нас есть, а потом тот, который прилетит от сервера
          return {...state, customer: [...state.customer, ...action.payload]}
      case ADD_CUSTOMER:
        //Разворачиваем старое состояние, и присваиваем клиентам новый массив в который разворачиваем старый, и добавляем объект через action
        return {...state, customer: [...state.customer, action.payload ]}
      case REMOVE_CUSTOMER:
          //Фильтр возвращает новый массив с клиентами, для которых функция вернула true
          //Если id клиента будет равно тому, который мы добавили в payload, то он не попадет в новый массив
        return {...state, customer: state.customer.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})