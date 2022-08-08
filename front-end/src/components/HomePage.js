import { Grid } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {useHistory} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    buton: {
        margin: theme.spacing(6, 3, 2),
        width:200,
        height:50,
        backgroundColor:"#0a478c",
        color: "#fff",
        transition: 'color 1s',
        '&:hover': {
            color: "#000"
        }
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0,0, 0.5), rgba(0,0,0,0.5)), url('https://media0.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif?cid=ecf05e47levrb8hhdcyc04qzfu6qcmmoillyxeojwk7vbcr0&rid=giphy.gif&ct=g')`,
        height:"650px",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        color:"#fff",
        fontSize:"30px",
    },
    box :{
        display: "flex",
        alignItems: "center",
      },
    admin : {
        display: "flex",
        justifyContent: "flex-end"
    }
}));
function HomePage() {
    const classes = useStyles();
    let history = useHistory();

    const redirectToSearchWord = () => {
        history.push('/search')
    }

    const redirectToLogin = () => {
        history.push('/login')
    }

    const redirectToListWords = () => {
        history.push('/listWords')
    }


    return (
        <div>
            <div>
                <div className={classes.admin}>
                    <Button style={{
                        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg')`,
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundColor: "#fff",
                        width:50,
                        height:50,
                    }}
                    onClick={redirectToLogin}></Button>
                </div>

            </div>
            <Box className={classes.hero}>
                <Box>
                   SİBER GÜVENLİK SÖZLÜĞÜ
                </Box>
            </Box>
            <Grid container justify="center">
                <Button className={classes.buton}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={redirectToSearchWord}
                >Kelime Ara</Button>
                <Button className={classes.buton}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={redirectToListWords}
                >Kelimeleri Listele</Button>
            </Grid>
        </div>
    )
}

export default HomePage

