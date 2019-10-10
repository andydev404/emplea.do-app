import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Theme from '../Theme.style';

const JobItem = props => (
  <TouchableWithoutFeedback
    onPress={() => props.navigation.push('SingleJob', {data: props})}>
    <View
      style={[
        styles.btn,
        {
          borderLeftColor:
            props.jobType === 'Remoto'
              ? Theme.SECONDARY_COLOR
              : Theme.PRIMARY_COLOR,
        },
      ]}>
      <JobTitle>{props.jobTitle}</JobTitle>
      <Content>
        <Item>
          <Icon name="ios-business" size={18} color={Theme.LIGHT_GRAY} />
          <ItemName>{props.jobCompany}</ItemName>
        </Item>
        <Item>
          <Icon name="ios-calendar" size={18} color={Theme.LIGHT_GRAY} />
          <ItemName>{props.jobDate}</ItemName>
        </Item>
      </Content>
    </View>
  </TouchableWithoutFeedback>
);

export default JobItem;

const styles = {
  btn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.04,
    elevation: 1,
    borderLeftWidth: 3,
    marginBottom: 20,
  },
};

const Content = styled.View`
  background: #f9f9f9;
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px 10px 0 10px;
`;

const JobTitle = styled.Text`
  color: #333;
  font-family: ${Theme.SECONDARY_FONT};
`;

const ItemName = styled.Text`
  margin-left: 10px;
  font-family: ${Theme.SECONDARY_FONT};
  color: ${Theme.LIGHT_GRAY};
`;

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
