import { useState, useEffect } from 'react';
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Login(){

    return (
        <div>
            <Header />
            <div id="container">
                <h1>Faça seu login:</h1>
                <h1>Usuario: </h1>
                <h1>Senha:</h1>
                
                
            </div>
            <Footer />
        </div>
    );
};

export default Login;