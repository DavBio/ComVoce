import AppDiv from "./AppStyled"
import React, { Component } from 'react'
import Form from './Components/Form'
import sobreImg from './sobreImg.jpeg'


export default class App extends Component {
  render() {
  return (
    <AppDiv>
      <header>
        <h1>COM VOCÊ</h1>
        <p>AJUDE A FUNDAÇÃO JOÃO DE FREITAS</p>

      </header>
      <content>
        <section className="sobre">
          <h2>Sobre a Campanha</h2>
          <div>
            <img src={sobreImg} alt="banner" />
            <p>Ação social que tem como objetivo conectar os idosos da instituição com outras pessoas que desejam mandar mensagens de carinho e incentivo, além de se proporem a conversar por algumas horas.</p>
          </div>
        </section>
        <section className="formSection">
          <h2>Inscreva-se</h2>
          <Form></Form>
        </section>
      </content>
      <footer><span></span></footer>
    </AppDiv>
  );
  }
}
