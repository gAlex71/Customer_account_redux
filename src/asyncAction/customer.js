import { addManyCustomerAction } from "../store/customerReducer"

export const fetchCustomer = () =>{
    // Чтобы мы потом могли использовать эту функцию, как action(прокидывать ее в duspatch),
    // мы должны вернуть новую функцию, которая принимает параметром dispatch
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            //Добавляем новых пользователей после ответа от сервера(передаем json в функцию диспатча)
            .then(json => dispatch(addManyCustomerAction(json)))
    }
}