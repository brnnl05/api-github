import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

// eslint-disable-next-line react/function-component-definition
const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42}  color = "white"  />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
