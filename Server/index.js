const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe("sk_test_51Jpe46D1hp4Z3XAyXeIVYXvUlojB2FOJVUzDC1aSDcLOZ9izzHk9w6Knu2WFOQjoT0yLLFoMPKrey6QkEsy9aR2H00IlsmH00A");
const app = express();

//middleware

app.use(cors({origin: "http:/localhost: 3000"}));
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.post("/api/checkout", async (request, response) => {
    console.log(reques.body)
    response.send("recibido");
    const { id, amount } = request.body;
    try{
        const payment =  await stripe.paymentIntents.create({ 
            amount: amount,
            currency: "Dolar",   
            payment_method_types: ["card"],     
            description: "Basket of products",
            payment_method: id,
            confirm: true,
        }); 
        console.log(payment); 
        return response.status(200).json({message: "Se realizo el pago satisfactoriamente"});
    }catch(error){
        console.log(error);
        return response.json({ message: error.raw.message });
    }
});

app.listen(3001, ()=>console.log("Server listening port" , 3001));
