import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from "axios";
import {toast} from "react-toastify";
import { withRouter } from 'react-router';
class UpdateWord extends Component {

    constructor(props) {
        super(props);

        this.state = {
            word: {
                wordEng: "",
                wordTurkish: "",
                abbreviationEng:"",
                abbreviationTurkish: "",
                explanationEnglish: "",
                explanationTurkish:""
            },
            id:null

        }
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount() {
        console.log(this.props.match.params)
        this.setState({id:this.props.match.params.id});
        
    }
  UpdateAWord() {
        axios.put('/words/'+this.state.id,this.state.word)
            .then(response => {
                if(response.data.messageType=="SUCCESS") {
                    toast.success("Kelime başarıyla güncellendi!");
                    this.setState({ word:{
                        wordEng: "",
                        wordTurkish: "",
                        abbreviationEng:"",
                        abbreviationTurkish: "",
                        explanationEnglish: "",
                        explanationTurkish:""
                            } });

                    this.props.history.push('/wordsPage/listWords')
                }
                else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    handleChange(e) {
        let state = {...this.state};
        const name = e.target.name;
        const value = e.target.value;
        state.word[name] = value;
        this.setState({
            state
        });
    }

    render() {
        return (
            <div>
                
                <Box style={{
                    backgroundImage: 'url(https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=1380&t=st=1659380006~exp=1659380606~hmac=d28feb0f133a2e3ba7d06d397d8495391f9daab8aa825f8f42eb48eb645b1dc3)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/wordsPage">SİBER GÜVENLİK SÖZLÜĞÜ</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/wordsPage">Kelime İşlemleri Sayfası</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/wordsPage/listWords">Kelime Listeleme-Düzenleme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wordsPage/addWord">Kelime Ekle</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wordsPage/addWord">Kelime Güncelle <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
                </nav>
                    <Grid item xs={12} sm={8} md={5} cspacing={2} alignItems={"center"} justify={"center"}
                          style={{maxWidth: "100%"}}>
                        <div  style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }} >
                            <br></br>
                            <b><font face="Tahoma" size="4" color="black">Kelime Güncelleme İşlemleri</font></b>
                            <br></br>
                            <form>
                            <font face="Tahoma" size="3" color="black">İngilizce Kelime</font>
                            <br></br>
                            <TextField
                                    style={{
                                        width:500,
                                    }}
                                    defaultValue={this.state.word.wordEng}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="wordEng"
                                    type="text"                               
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <font face="Tahoma" size="3" color="black">İngilizce Kısaltma</font>
                                <br></br>
                                <TextField
                                    style={{
                                        width:500,
                                    }}
                                    defaultValue={this.state.word.abbreviationEng}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="abbreviationEng"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <font face="Tahoma" size="3" color="black">İngilizce Açıklama</font>
                                <br></br>
                                <TextField
                                    style={{
                                        width:500,
                                    }}
                                    value={this.state.word.explanationEnglish}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="explanationEnglish"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <font face="Tahoma" size="3" color="black">Türkçe Kelime</font>
                                <br></br>
                                <TextField
                                    style={{
                                        width:500,
                                    }}
                                    defaultValue={this.state.word.wordTurkish}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="wordTurkish"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <font face="Tahoma" size="3" color="black">Türkçe Kısaltma</font>
                                <br></br>
                                <TextField
                                    style={{
                                        width:500,
                                    }}
                                    defaultValue={this.state.word.abbreviationTurkish}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="abbreviationTurkish"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <font face="Tahoma" size="3" color="black">Türkçe Açıklama</font>
                                <br></br>
                                <TextField
                                    style={{
                                        width:500,
                                    }}
                                    value={this.state.word.explanationTurkish}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="text"
                                    name="explanationTurkish"
                                    onChange={this.handleChange}
                                />
                                <Grid container justify="center">
                                <Button
                                    style={{
                                        backgroundColor:"transparent",
                                        width:100,
                                        height:50,
                                        border:"1px solid",
                                        marginTop: "15px"
                                    }}
                                    onClick={(this.UpdateAWord.bind(this))}>
                                    Güncelle
                                </Button>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                    <br></br>

                </Box>
                
            </div>
        );
    }
}

export default withRouter(UpdateWord);