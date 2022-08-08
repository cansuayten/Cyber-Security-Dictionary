import { Grid } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { black } from 'chalk';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    buton: {
        margin: theme.spacing(6, 3, 2),
        width:200,
        height:50,
        backgroundColor:"#3e90b3",
        color: "#fff",
        transition: 'color 1s',
        '&:hover': {
            color: "#000"
        }
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0,0, 0.5), rgba(0,0,0,0.5)), url('https://media0.giphy.com/media/SVaBcFOQcH0VSJrDjK/giphy.gif?cid=ecf05e47s36d61penapiy0gk567p770plc1l1z6g6tpyc2qr&rid=giphy.gif&ct=g')`,
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
      }
}));
function WordsPage() {
    const classes = useStyles();
    let history = useHistory();

    const redirectToAddWord = () => {
        history.push('/wordsPage/addWord')
    }

    const redirectToListWords = () => {
        history.push('/wordsPage/listWords')
    }


    return (
        <div>
            <div>
                <br></br>
                <br></br>
            </div>
            <Box className={classes.hero}>
                <Box>
                    Kelime Düzenleme İşlemleri
                </Box>
            </Box>
            <Grid container justify="center">
                <Button className={classes.buton}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={redirectToAddWord}
                >Kelime Ekle</Button>
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

export default WordsPage

