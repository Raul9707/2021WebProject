import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider} from "react-hook-form";
import AddressInput from './AddressInput';
import {Link} from "react-router-dom";
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";



export const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();

  return (
    <> 
    <Typography variant = "h6" gutterBottom>
    Shipping address
    </Typography>
    <FormProvider {...methods}>
     <form onSubmit={methods.handleSubmit(data=>{
       dispatch({
          type: actionType.SET_SHIPPINGDATA,
          shippingData: data,
       });
       nextStep();

     })}>
       <Grid containet spacing = {3}>
         <AddressInput required name="firstName" label= "First Name"/>
         <AddressInput required name="lastName" label= "Last Name"/>
         <AddressInput required name="address1" label= "Adress"/>
         <AddressInput required name="email" label= "Email address"/>
         <AddressInput required name="city" label= "City"/>
         <AddressInput required name="postCode" label= "Post Code"/>
       </Grid>
       <div style={{display: "flex", justifyContent:"space-between", marginTop:"1rem"}}>
        <Button component={Link} to="/checkout-page">Back to the checkout page</Button>
        <Button type= "submit" variant="contained" color="primary">Next</Button>
       </div>
     </form>
    </FormProvider>


      
    </>
  )
}

export default AddressForm