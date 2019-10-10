import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderShape from './HeaderShape';
import {Container, IconContainer, Title} from './styles';

const Header = ({title, iconName}) => (
  <Container>
    <IconContainer>
      <Icon name={iconName} size={26} color="white" />
    </IconContainer>
    <Title>{title}</Title>
    <HeaderShape />
  </Container>
);

export default Header;
