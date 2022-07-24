import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomer } from './asyncAction/customer';

//Для работы с асинхронными операциями, нам требуется модуль redux-thunk

const App = () => {
  //Чтобы изменить состояние нам нужен dispatch
  const dispatch = useDispatch()
  //Полуаем состояние
  const cash = useSelector(state => state.cash.cash)
  const customer = useSelector(state => state.customer.customer)

  //Будем изменять состояние
  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  //Функции с клиентами
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='App'>
      <div style={{fontSize: "3rem"}}>{cash}</div>
        <div style={{display: "flex"}}>
          {/* promt -встроенная функция браузера, которая показывает поле для ввода */}
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
          <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
          <button onClick={() => dispatch(fetchCustomer())}>Получить клиентов из базы данных</button>
        </div>
        {customer.length > 0 ?
          <div>
            {customer.map(customer => 
              <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop:5}}>
                {customer.name}
              </div>
            )}
          </div>
          :
          <div style={{fontSize: "2rem", marginTop:20}}>
            Клиенты отсутствуют
          </div>
        }
    </div>
  );
}

export default App;
