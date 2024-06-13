/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react'

import Repository from './Repository';
import { Container } from './styles';

const Repositories = () => {
    return (
    <Container>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
    </Container>
    );
}

export default Repositories;