import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const Categories = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <Header title="Categorías" iconName="ios-keypad" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CategoryWrapper>
            <CategoryCard
              title="Desarrollo de Software"
              category="SoftwareDevelopment"
              navigation={navigation}
            />
            <CategoryCard
              title="Desarrollo Web"
              category="WebDevelopment"
              navigation={navigation}
            />
            <CategoryCard
              title="Desarrollo para Moviles"
              category="MobileDevelopment"
              navigation={navigation}
            />
            <CategoryCard
              title="Redes"
              category="Networking"
              navigation={navigation}
            />
            <CategoryCard
              title="Administrador de Sistemas"
              category="SystemAdministrator"
              navigation={navigation}
            />
            <CategoryCard title="N/A" category="None" navigation={navigation} />
          </CategoryWrapper>
        </ScrollView>
      </Wrapper>
    </SafeAreaView>
  );
};

export default Categories;

Categories.navigationOptions = {
  header: null,
};

const Wrapper = styled.View`
  flex: 1;
  background: white;
`;

const CategoryWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
  margin-top: 20px;
`;
