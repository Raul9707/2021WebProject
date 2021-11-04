import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles} from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { actionType } from '../reducer';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        marginBottom: "7rem",
        
    },
    appBar:{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow:{
        
        flexGrow:1,
    },
    button:{
        marginLeft: theme.spacing(2),
    },
    image:{
        marginRight: "10px",
        height: "3rem",
    },

}));

export default function Navbar() {
const classes = useStyles();
const [{basket, user}, dispatch] = useStateValue();
const history = useHistory();

const handleAuth = () =>{
    if(user){
        auth.signOut();
        dispatch({
            type: actionType.EMPTY_BASKET,
            basket: [],
        });
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
        history.push("/")
    }
}

return (
        <div className={classes.root} >
            <AppBar position="fixed" >
                <Toolbar className={classes.appBar}>
                <Link to ="/">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkOIe-NkjL2H50TFxv75sTq0dXpN2Jg8BbFolcKkYQNNL1I0HhfLkK0zkOho4Nfco-3o&usqp=CAU"/>
                    </IconButton>
                </Link>
                <Link to ="/ram">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://cdn.pixabay.com/photo/2020/10/12/14/55/ram-5648990_960_720.png"/>
                    </IconButton>
                </Link>
                <Link to ="/CPU">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://cdn0.iconfinder.com/data/icons/mobile-phone-componets-1/144/mobile-icon_07-512.png"/> 

                    </IconButton>
                </Link>
                <Link to ="/GPU">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://cdn-icons-png.flaticon.com/512/1470/1470120.png"/> 
                    </IconButton>
                </Link>
                <Link to ="/MotherBoard">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://cdn1.iconfinder.com/data/icons/nuuline-electronics/128/electronics_components_technology-22-512.png"/> 
                    </IconButton>
                </Link>
                <Link to ="/Cases">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="https://cdn-icons-png.flaticon.com/512/1/1480.png"/> 
                    </IconButton>
                </Link>
                <Link to ="/Coolers">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <img className={classes.image } src="http://cdn.onlinewebfonts.com/svg/img_537090.png"/> 
                    </IconButton>
                </Link>




                <div className={classes.grow}/>
                <Typography variant="h6" color="textPrimary" component="p">
                Hello {user? user.email : "Guest"}
                </Typography>
                <div className={classes.button}>
                    <Link to = "/signin"> 
                        <Button variant="outlined" onClick={handleAuth}>
                        <strong>{user? "Sign Out" : "Sign In"}</strong>
                        </Button>
                    </Link>
                    <IconButton aria-label = "show cart items" color="inherit">
                    <Badge badgeContent={basket?.length} color="secondary">
                        <Link to ="checkout-page">
                            <ShoppingCart fontSize="large" color="primary"/>
                        </Link>
                    </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </div>
        );
}
