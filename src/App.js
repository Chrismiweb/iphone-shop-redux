import './App.css';
import Navbar from './component/Navbar';
import CartContainer from './component/CartContainer';
import cartItems from './cart-item';
import {createStore} from 'redux';
import reducer from './reducer';
// store- its used to store data in redux
//  reducer - its a function used to update store
// action -  its what happens or what updated 
// state - old state/state before update
// react-redux - provider - wraps app, connect - used in components
import { Provider } from 'react-redux';

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
};

const store = createStore(reducer, initialStore);


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
