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
        ];
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
    render() {
        return (
                
            <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">SİBER GÜVENLİK SÖZLÜĞÜ</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Anasayfa</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/listWords">Kelime Listesi <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Kelime Ara</a>
                    </li>
                    </ul>
                </div>
                </nav>
                <div className="boxed">
    
            <Box style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1800&t=st=1659596992~exp=1659597592~hmac=39e4a22d4df93b0e3138775296fb49751ea4026070876c73ad0d466a6607d9ea)',
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
                </div>
            
        )
    }
}

export default ListingWords;