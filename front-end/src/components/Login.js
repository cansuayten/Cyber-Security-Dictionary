import React from "react";
import axios from "axios";
import { login } from "../api/apiCalls";
import ButtonWithProgress from "./ButtonWithProgress";
//import {Authentication}  from './AuthenticationContext';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import Input from "./Input";
import Box from "@material-ui/core/Box";
import {loginSuccess} from '../redux/authActions'
class Login extends React.Component{
    //static contextType=Authentication;

    state = {
        username: null,
        password:null,
        error: null,
        pendingApiCall: false
    };
    componentDidMount() {
        this.requestInterceptors = axios.interceptors.request.use( request => {
            this.setState({
                pendingApiCall: true
            });
            return request;
        });
        this.responseInterceptors = axios.interceptors.response.use( response => {
            this.setState({
                pendingApiCall: false
            });
            return response;
        }, (error) => {
            this.setState({
                pendingApiCall: false
            });
            throw error;
        });
    }

    componentWillUnmount() {
        axios.interceptors.request.eject(this.requestInterceptors);
        axios.interceptors.response.eject(this.responseInterceptors);
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
            error: null
    });
    }

    onClickLogin = async event => {
        event.preventDefault();
        const {username,password}=this.state;
        //const {onLoginSuccess} = () => {}//this.context;
        const creds = {
            username,
            password
        };

        this.setState({
                    error: null
                });  
        console.log("c",creds)
        axios.post('/auth', {}, { auth: creds }).then(response => {
            console.log("r",response);

        this.props.history.push('/wordsPage');

        const authState = {
            username: username,
            password:password,
        };

        //onLoginSuccess(authState);
        /*const action = {
            type:  "login-success",
            payload: authState 
        }*/
        this.props.onLoginSuccess(authState);
        console.log("us:",username)
        }).catch(e => {
                console.log("e",e.response.data.error);
                this.setState({
                    error: e.response.data.error
                });
            });
    };

    render() {  
        const password =this.state.password;
        const buttonEnabled = this.state.username && this.state.password;
        const pendingApiCall=this.state.pendingApiCall;
        return(
            <Box style={{
                backgroundColor:"#85002F",
            }}>
            <div className="container" > 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container justify="center" square style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor:"#fff",
            }}>
                <form>  
                    <Grid container justify="center">
                <Avatar style={{
                    backgroundColor:"#85002F",
                    width:"80px",
                    height:"80px",
                    marginBottom:"20px",
                    marginTop:"120px"
                }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    </Grid>
                <Typography component="h1" variant="h5">
                        Yönetici Girişi
                    </Typography>
                    <br></br>                     
                     <Input name="username" label="Kullanıcı Adı" onChange={this.onChange}/>                            
                     <br></br>     
                    <div className="form-group">
                        <label style ={{fontSize:"17px"}}>Şifre</label>
                        <input style ={{marginTop:"10px",fontSize:"17px"}}className= "form-control" name="password" type="password" onChange={this.onChange}/>
                        <div className="invalid-feedback">{password}</div>
                    </div>
                    <br></br>     
                    {this.state.error && <div className="alert alert-danger"> 
                        {this.state.error}
                    </div>}        
                                     
                    <div className="text-center">
                        <ButtonWithProgress 
                        disabled={!buttonEnabled || pendingApiCall}  
                        onClick={this.onClickLogin} 
                        text={"Giriş"} 
                        pendingApiCall={pendingApiCall}
                        />
                    </div>
                    <br></br>
                    <br></br>
                </form>
                
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            </Box>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccess: (authState) =>  dispatch(loginSuccess(authState))
    }
}

export default connect(null,mapDispatchToProps)(Login);