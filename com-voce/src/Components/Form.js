import React, { Component } from 'react'
import FormDiv from './FormStyled'
import axios from "axios"

export default class Form extends Component {
    state={
        nome: "",
        email: "",
        campoIncorreto: false,
        telefone: "",
        enviado: false
    }


    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
        console.log(this.state.nome)
    } 


    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
        console.log(this.state.email)
    } 


    onChangeTelefone = (event) => {
        this.setState({telefone: event.target.value})
        console.log(this.state.telefone)
    } 


    onClickEnviar = () => {
        
        if( this.state.email.includes("@") && this.state.nome.length !== 0 && this.state.telefone.length > 8) {
            const body = {
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone
            }
            
            this.formPost(body)
            this.setState({
                nome: "",
                email: "",
                telefone: "",
                enviado: !this.state.enviado,
                campoIncorreto:false
            })
        } else {
            this.setState({campoIncorreto: true})
        }
    }

    formPost = async (body) => {

        try {
            const response = axios.post("link", body, "header")
            console.log(response.data)
        } catch(error){
            console.log(error.response.data.message)
        }
    }

    render() {
        return (
            <FormDiv>
                {this.state.campoIncorreto? <p>Por favor, preencha todos os campos corretamente!</p> : ""}
                <label for="nome">Nome</label>
                <input 
                    id="nome" 
                    type={"text"} 
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                ></input>
                <label for="email">E-mail</label>
                <input
                    id="email" 
                    type={"text"} 
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                 ></input>

                <label for="telefone">Telefone</label>
                <input 
                    id="telefone" 
                    type={"text"} 
                    placeholder={"(xx) xxxxxxxxx"}
                    value={this.state.telefone}
                    onChange={this.onChangeTelefone}
                ></input>

                <button onClick={this.onClickEnviar}>Enviar</button>
                {this.state.enviado? <p>Obrigado! Entraremos em contato em Breve.</p> : null}
            </FormDiv>
        )
    }
}
