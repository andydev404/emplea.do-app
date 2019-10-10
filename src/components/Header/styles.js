import styled from 'styled-components/native';
import Theme from '../../Theme.style';

export const Container = styled.View`
  background: ${Theme.PRIMARY_COLOR};
  padding: 20px 0;
  align-items: center;
  height: 130px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 22px;
  text-align: center;
  font-family: ${Theme.PRIMARY_FONT};
`;

export const IconContainer = styled.View`
  margin-bottom: 4px;
`;
