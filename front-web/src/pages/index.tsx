import React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  Stack,
} from '@chakra-ui/core';

import FastFeetLogo from '../assets/logo.svg';
import FastFeetBackgroundImage from '../assets/imagemFundo.svg';
import SingInBackgroudImage from '../assets/singin.jpg';

const Home: React.FC = () => {
  return (
    <Grid
      as="main"
      backgroundColor="blue.900"
      templateColumns="1fr 1fr"
      height="100vh"
      width="100vw"
      templateAreas="
        'singin backgroud'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        backgroundImage=""
        gridArea="singin"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        justifySelf="end"
        minWidth="375px"
        width="100%"
        height="100%"
      >
        <Icon name="fundo" />
        <FastFeetLogo />
        <Stack paddingTop={12}>
          <Heading size="xl" color="yellow.400">
            Bem-vindo!
          </Heading>
          <Heading size="xl" color="write">
            Você é nosso maior valor.
          </Heading>
        </Stack>
        <Stack spacing={2} paddingTop={3}>
          <Input
            color="write"
            name="cpf"
            placeholder="CPF"
            size="lg"
            height="12"
            width="311px"
            borderRadius="md"
            focusBorderColor="yellow.400"
          />

          <Input
            name="senha"
            placeholder="Senha"
            size="lg"
            height="12"
            width="311px"
            borderRadius="md"
            type="password"
            focusBorderColor="yellow.400"
          />
          <Button
            height="12"
            width="311px"
            backgroundColor="yellow.400"
            borderRadius="md"
            _hover={{ backgroundColor: 'yellow.500' }}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
      <Flex
        gridArea="backgroud"
        justifyContent="center"
        flexDir="column"
        width="100%"
        height="100%"
        backgroundImage={`url(${SingInBackgroudImage})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </Grid>
  );
};

export default Home;
