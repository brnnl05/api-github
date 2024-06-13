/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

import { Container, Selector, Cleaner} from './styles';

const Filter = () => {
    const langs =[
        {name: 'JavaScript', count: 5, color: '#FCC419'},
        {name: 'Shell', count: 2, color: '#CED4DA'},
        {name: 'PHP', count: 1, color: '#25BEFF'},
    ];

    const selectors = langs.map(({name, count, color}) => (
        <Selector key = {name.toLowerCase()} color = {color}>
            <span>{name}</span>
            <span>{count}</span>
        </Selector>
    ));

    return (
        <Container>
            {selectors}
            <Cleaner>Limpar</Cleaner>
        </Container>
    );
}

export default Filter;