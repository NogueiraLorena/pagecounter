import React, { Component } from "react";

import "./styles.css";

import styled from "styled-components";

const ConteinerBigger = styled.section`
  background-color: rgb(255, 255, 255);
  width: 60vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 6em;
`;

const Title = styled.h1`
  color: #000;
  font-size: 3rem;
`;

const Buttons = styled.button`
  background: #c900a0;
  background-image: -webkit-linear-gradient(top, #c900a0, #1e62d0);
  background-image: -moz-linear-gradient(top, #c900a0, #1e62d0);
  background-image: -ms-linear-gradient(top, #c900a0, #1e62d0);
  background-image: -o-linear-gradient(top, #c900a0, #1e62d0);
  background-image: -webkit-gradient(to bottom, #c900a0, #1e62d0);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: 200;
  padding: 21px;
  -webkit-box-shadow: inset 1px 1px 20px 0 #0059a0;
  -moz-box-shadow: inset 1px 1px 20px 0 #0059a0;
  box-shadow: inset 1px 1px 20px 0 #0059a0;
  border: solid #ffffff 2px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
`;

const ButtonsConteiner = styled.div`
  width: 30vw;
  height: 20vh;
  border: solid #b803a9 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class App extends Component {
  state = {
    numero: 0
  };

  componentDidMount() {
    document.title = this.state.numero;
  }

  componentDidUpdate() {
    document.title = this.state.numero;
  }

  add = () => {
    const parar = setInterval(() => {
      this.setState({
        numero: this.state.numero + 1
      });
    }, 1000);
    this.parar = () => {
      clearInterval(parar);
    };
  };

  negative = () => {
    const parar = setInterval(() => {
      this.setState({
        numero: this.state.numero - 1
      });
    }, 1000);
    this.parar = () => {
      clearInterval(parar);
    };
  };

  limpar = () => {
    this.setState({
      numero: 0
    });
  };

  render() {
    return (
      <ConteinerBigger>
        <Title> {this.state.numero} </Title>
        <ButtonsConteiner>
          <Buttons onClick={this.add}> Crescer </Buttons>
          <Buttons onClick={this.negative}> Decrescer </Buttons>
          <Buttons onClick={this.parar}> Parar </Buttons>
          <Buttons onClick={this.limpar}> Limpar </Buttons>
        </ButtonsConteiner>

        <p>
          A aplicação é limitada. Por favor, não aperte o botão de crescer logo
          depois do botão de decrescer. E vice-versa.
        </p>
      </ConteinerBigger>
    );
  }
}
export default App;
