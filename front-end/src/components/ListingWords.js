import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid'

import axios from "axios";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class ListingWords extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: null, 
            words: [], 
            pageSize: 10,
            word: {
                wordEng: "",
                wordTurkish: "",
                abbreviationEng:"",
                abbreviationTurkish: "",
                explanationEnglish: "",
                explanationTurkish:""
            },
            id:null};
        this.columns = [
            { field: 'id', headerName: '', width:0, renderCell: ()=>" " },
            { field: 'wordEng', headerName: 'İngilizce', width: 280 },
            { field: 'abbreviationEng', headerName: 'İngilizce Kısaltma', width: 280 },
            { field: 'explanationEnglish', headerName: 'İngilizce Açıklama', width: 280 },
            { field: 'wordTurkish', headerName: 'Türkçe', width: 280 },
            { field: 'abbreviationTurkish', headerName: 'Türkçe Kısaltma', width: 280 },
            { field: 'explanationTurkish', headerName: 'Türkçe Açıklama', width: 280 },
            {
                field: 'id', headerName: 'Eylem', width: 270, renderCell: (params) => {
                    const link2 = "/wordsPage/updateWord/" + params.row.id;
                    return (
                        <div>
                        <Link to={link2}><Button style={{
                        backgroundColor:"#30cfff",
                        width:50,
                        height:50,
                            fontSize:10,
                            marginRight:"10px"
                        }} type='secondary'>Güncelle</Button></Link>
                    <Button style={{
                        backgroundColor:"#fa6478",
                        width:50,
                        height:50,
                        fontSize:10
                    }} type='secondary'
                     onClick={()=>{this.DeleteWord(params.row.id)} }
                    >Sil</Button>
                        </div>
                    );
                }
            }
        ];
    }
    DeleteWord(id) {
        axios.delete('/words/'+id)
            .then(response => {
                if(response.data.messageType=="SUCCESS")
                {
                    toast.success("Kelime başarıyla silindi!");
                    window.location.href=window.location;
                }
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    componentDidMount() {
        axios.get('/words')
            .then(response => {
                this.setState({
                    words: response.data
                });
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    handlePageSizeChange = (params) => {
        this.setState({ pageSize: params.pageSize });
    };

    LoggedIn(props){   
            return <div className="boxed">
    
            <Box style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_53876-80911.jpg?w=1480&t=st=1659380284~exp=1659380884~hmac=02d14aee6a740b035e1b61768473031bfc76dcbdab6886451681e921c9f13ddf)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor:"#fff"
            }}>
    
            <DataGrid
                style={{ minHeight: "100vh", height: (this.state.pageSize + 2) * 50 + 'px', width: '100%' }}
                disableSelectionOnClick rows={this.state.words} columns={this.columns}
                pageSize={this.state.pageSize} rowsPerPageOptions={[5, 25, 50, 200]} pagination onPageSizeChange={this.handlePageSizeChange}
            ></DataGrid>
            </Box>
    
        </div>
       
    };

    render() {
        return (
                
            <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/wordsPage">SİBER GÜVENLİK SÖZLÜĞÜ</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/wordsPage">Kelime İşlemleri Sayfası</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/wordsPage/listWords">Kelime Listeleme-Düzenleme <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wordsPage/addWord">Kelime Ekle</a>
                    </li>
                    </ul>
                </div>
                </nav>
                {this.LoggedIn(this.props)}
                </div>
            
        )
    }
}

export default ListingWords;