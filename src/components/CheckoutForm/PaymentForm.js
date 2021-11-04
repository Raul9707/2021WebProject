import {Button, CircularProgress, Divider, Typography} from "@material-ui/core";
import Review from "./Review";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"
import { actionType, getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { useState } from "react";
import {accounting} from "accounting";
import axios from "axios"

const stripePromise = loadStripe("pk_test_51Jpe46D1hp4Z3XAyFjBoUNCYnwsRWn4bklkEErInsmWYCxuSkLGUkjDE9glulJzh8P43pHoY7LuBFO9pBRCU00MI00yinmAzZy")

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style:{
    base: {
      iconColor: "rgb(240,57,122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder" :{
        color: "#ccc",
      },
    },
    invalid:{
      color: "#e5424d",
      ":focus":{
        color: "#303238",
      },
    },
  },
};


const CheckoutForm =({backStep,nextStep})=>{
  const cors = require('cors');
  const [{basket,paymentMessage},dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    setLoading(true);
    if(!error){
      const {id} = paymentMethod;
     try{
        const {data} = await axios.post
        ("http://localhost:3001/api/checkout", {
          id,
          amount: getBasketTotal(basket) * 100,
        });
        if(data.message === "Succcesful Payment"){
          dispatch({
            type: actionType.EMPTY_BASKET,
            basket: [],
          })
        }
        dispatch({
          type: actionType.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message
        })
        
        console.log(data);
        elements.getElement(CardElement).clear();
        nextStep();
      }
      catch(error){
        console.log(error)
        nextStep();
      }
      setLoading(false);

    }


  }
  

  return(
    <form onSubmit={handleSubmit}>
     <CardElement options={CARD_ELEMENT_OPTIONS}/>
     <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
        <Button variant = "outlined" onClick={backStep}>Back</Button>
        <Button disabled={!stripe} type ="submit" variant = "contained" color="primary">
          {
            loading ? (<CircularProgress/>): (`Pay ${accounting.formatMoney(getBasketTotal(basket),"$")}`)
          }
        </Button>
     </div>

    </form>
  )
}

const PaymentForm = ({backStep,nextStep}) => {
  return (
    <div>
      <Review/>
      <Divider/>
      <Typography variant="h6" gutterBottom style = {{margin: "20px"}}>
        Payment method
      </Typography>  
      <Elements stripe ={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep}/>
      </Elements> 
    </div>
  )
}

export default PaymentForm
