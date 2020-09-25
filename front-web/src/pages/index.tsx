import React from 'react';
import { Flex, Grid } from '@chakra-ui/core';

import FastFeetLogo from '../assets/logo.svg';
import singInBackgroudImage from '../assets/login.jpg';

const Home: React.FC = () => {
  return (
    <Grid
      as="main"
      backgroundColor="#4C33CC"
      templateColumns="1fr 3fr 3fr 1fr"
      height="100vh"
      templateAreas="
        '. singin backgroud .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="singin"
        flexDir="column"
        alignItems="center"
        justifySelf="end"
        minWidth="360px"
      >
        <FastFeetLogo />
        <h1>Welcome to FastFeet</h1>
        Você é nosso maior valor.
        <form>
          <input name="cpf" placeholder="CPF" />
          <input name="senha" placeholder="Senha" />

          <button>Entrar</button>
        </form>
      </Flex>
      <Flex
        backgroundImage="url(`${singInBackgroudImage}`)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        gridArea="backgroud"
        flexDir="column"
        alignItems="center"
        justifySelf="end"
      >
        .
      </Flex>
    </Grid>
  );
};

export default Home;
