import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Theme from '../Theme.style';
import styled from 'styled-components/native';

const navigateTo = (screen, navigationObject, ...params) => () => {
  navigationObject.navigate(screen, {...params});
};

const CategoryCard = ({title, navigation, category}) => (
  <TouchableWithoutFeedback
    onPress={navigateTo('CategoryScreen', navigation, {title, category})}>
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  </TouchableWithoutFeedback>
);

export default CategoryCard;

const Title = styled.Text`
  color: ${Theme.LIGHT_GRAY};
  font-family: ${Theme.PRIMARY_FONT};
  font-size: 17px;
`;

const Wrapper = styled.View`
  background: #f9f9f9;
  width: 155px;
  height: 140px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
  border: 1px solid #f2f2f2;
`;
