import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import Ram from "./components/TypeOfProduct/Ram";
import CPU from "./components/TypeOfProduct/CPU";
import GPU from "./components/TypeOfProduct/GPU";
import MotherBoard from "./components/TypeOfProduct/MotherBoard";
import Cases from "./components/TypeOfProduct/Cases";
import Coolers from "./components/TypeOfProduct/Coolers";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
import Checkout from './components/CheckoutForm/Checkout';

function App() {

  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionType.SET_USER,
          user: authUser,
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/signup">         
            <SignUp/>
          </Route>
          <Route path="/signin">         
            <SignIn/>
          </Route>
          <Route path="/checkout-page">         
            <CheckoutPage/>
          </Route>
          <Route path="/checkout">         
            <Checkout/>
          </Route>
          <Route path="/ram">
           <Ram/>
          </Route>
          <Route path="/CPU">
           <CPU/>
          </Route>    
          <Route path="/GPU">
           <GPU/>
          </Route>    
          <Route path="/MotherBoard">
           <MotherBoard/>
          </Route>    
          <Route path="/Coolers">
           <Coolers/>
          </Route>        
          <Route path="/Cases">
           <Cases/>
          </Route>    
          <Route path="/">         
            <Products/>
          </Route>

        </Switch>
  
      </div>
    </Router>
  );
}

export default App;
