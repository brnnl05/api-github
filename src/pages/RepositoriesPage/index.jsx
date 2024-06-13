/* eslint-disable import/newline-after-import */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main} from './styles';
const RepositoriesPage = () => {
    return (
    <Container> 
        <Sidebar>
            <Profile />
            <Filter />
        </Sidebar>
        <Main>
            <Repositories />
        </Main>
    </Container>
    );
}

export default RepositoriesPage;