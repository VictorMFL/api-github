import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Title, Form, Input, Button } from './styles';

import GithubLogoSvg from '../../../assets/GithubLogoSvg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <GithubLogoSvg alt='Logo GitHub' />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;