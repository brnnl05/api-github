/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react'

import { Container, Name, Description, Footer,Lang, Link } from './styles';

const Repository = () => {
    return (
    <Container>
        <Name>Repository Name</Name>
        <Description> Repository description</Description>
        <Footer>
            <Lang>Repository Lang</Lang>
            <Link href = "https://devsamurai.com.br" target = "_blank">Ver</Link>
        </Footer>
    </Container>
    );
}

export default Repository;