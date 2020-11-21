import AppDiv from "./AppStyled"
import React, { Component } from 'react'
import Form from './Components/Form'


export default class App extends Component {
  render() {
  return (
    <AppDiv>
      <header>
        <h1>COM VOCÊ</h1>

      </header>
      <content>
        <section className="sobre">
          <h2>Sobre a Campanha</h2>
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
