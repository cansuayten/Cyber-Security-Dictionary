import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {toast} from "react-toastify";
import Button from "@material-ui/core/Button";
export default class SearchWord extends Component {
  constructor(props) {
        super(props);

        this.state = {
          searchWord: "",
            word: {
                wordEng: "",
                wordTurkish: "",
                abbreviationEng:"",
                abbreviationTurkish: "",
                explanationEnglish: "",
                explanationTurkish:""
            }, 
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      let newState = this.state;
      const name = e.target.name;
      const value = e.target.value;
      newState.searchWord = value;
      this.setState({
          newState
      });

  }
  SearchWord() {
    var arananKelime = this.state.searchWord;
    if(arananKelime!="")
    {var url = "/words/"+ arananKelime;
    console.log(url)
    axios.get(url)
        .then(response => {
          console.log(response)
          toast.success("Kelime bulundu!");
                this.setState({
                  word: response.data,
                        searchWord: "" });
                      })
        .catch(error => {
            console.log(error.response)
            toast.error("Kelime bulunamadı!");
            this.setState({
               searchWord: "" })
        });
      }
      else {
        toast.error("Lütfen kelime giriniz!");
      }

}
displayWord(){
 let displayEnabled=0;
  if (this.state.word.wordEng!="" && this.state.word.wordTurkish!="")
  {displayEnabled=1}
  else
  {displayEnabled=0}
  if (displayEnabled==1) {
  return (
    <div>
      <Grid style={{marginTop:"60px"}}>
       <label>İngilizce kelime: {this.state.word.wordEng}</label>
       <br></br>
       <label>İngilizce kısaltma: {this.state.word.abbreviationEng}</label>
       <br></br>
       <label>İngilizce açıklama: {this.state.word.explanationEnglish}</label>
       <br></br>
       <label>Türkçe kelime: {this.state.word.wordTurkish}</label>
       <br></br>
       <label>Türkçe kısaltma: {this.state.word.abbreviationTurkish}</label>
       <br></br>
       <label>Türkçe açıklama: {this.state.word.explanationTurkish}</label>
       <br></br>
       </Grid>
    </div>
  )
  }

}

  render() {
    return (
      <body style={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1800&t=st=1659596992~exp=1659597592~hmac=39e4a22d4df93b0e3138775296fb49751ea4026070876c73ad0d466a6607d9ea)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundColor:"#fff"
    }}>
      <div >
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">SİBER GÜVENLİK SÖZLÜĞÜ</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Anasayfa</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/listWords">Kelime Listesi </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Kelime Ara<span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
                </nav>

                <label style = {{marginTop:"150px"}}>Kelime:</label>
                                <br></br>
                                <TextField
                                    style={{
                                        width:800,
                                    }}
                                    value ={this.state.searchWord}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="searchWord"
                                    type="text"
                                    onChange={this.handleChange}
                                />

                                  <Button 
                                    style={{
                                        backgroundColor:"transparent",
                                        width:100,
                                        height:50,
                                        border:"1px solid",
                                        marginTop: "15px",
                                        marginLeft:"30px",
                                    }}
                                    onClick={(this.SearchWord.bind(this))}>
                                    Ara
                                </Button>      

                              
                                <div>{this.displayWord()}</div>         
    

                </div>

</body>

    )
  }
}
