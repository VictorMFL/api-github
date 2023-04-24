import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Title, Form, Input, Button } from './styles';

import GithubLogoSvg from '../../../assets/GithubLogoSvg';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [login, setLogin] = useState('');

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/${login}/repositories`)
  }

  return (
    <Container>
      <GithubLogoSvg alt='Logo GitHub' />
      <Title>API Github</Title>
      <Form onSubmit={handleSubmit} method='POST'>
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