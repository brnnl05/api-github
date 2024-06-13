import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data} from './styles';
// eslint-disable-next-line arrow-body-style, react/function-component-definition
const Profile = () => {
    return (
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
                <Login>devsamurai</Login>
                <Name>Dev Samurai</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20} /> 
                    30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i> 
                </Data>
                <Data>
                    <MdWork size={20} /> Power Tuning
                </Data>
                <Data>
                    <MdLocationCity size={20} /> Brasília/DF
                </Data>
                <Data> 
                    <MdLink size={20} />
                    <a href = "https://powertuning.com.br">powertuning.com.br</a> 
                </Data>
            </Inner>
        </Container>
    );
}

export default Profile;