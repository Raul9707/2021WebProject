import { Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = ({message}) => {
    console.log(message)
    return (
        <>
            <Typography variant = "h6">{message}</Typography>
            <Divider/>
            <Typography variant="subtitle2" gutterBottom>
                {message === "Succcesful Payment"
                ? "Your booking reference : Rgh8787878lkj"
                :""
                }
            </Typography>
            <Button component={Link} to= "/" variant ="outlined" type="button">
                Back to home page
            </Button>
        </>
    )
}

export default Confirmation
