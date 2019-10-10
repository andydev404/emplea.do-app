import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import HeaderShape from '../components/Header/HeaderShape';
import {API_URI} from '../constants/endpoint';

const SingleJob = ({navigation}) => {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    JobURI,
    jobTitle,
    jobCompany,
    jobLocation,
    jobDate,
  } = navigation.getParam('data');
  useEffect(() => {
    async function loadJobContent() {
      const {data: jobContent} = await axios.get(
        `${API_URI.slice(0, 36)}${JobURI}.json`,
      );
      setJob(jobContent);
      setLoading(false);
    }
    loadJobContent();
  }, [JobURI]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Content>
        <Header>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <ButtonGoBack>
              <Icon name="md-arrow-back" size={36} color="white" />
            </ButtonGoBack>
          </TouchableWithoutFeedback>
          <Title>{jobTitle}</Title>
          <HeaderShape style={styles.shape} color="white" />
        </Header>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <ContentMetadata>
            <Item>
              <Icon name="ios-business" size={18} color="#333" />
              <ItemName>{jobCompany}</ItemName>
            </Item>
            <Item>
              <Icon name="ios-pin" size={18} color="#333" />
              <ItemName>{jobLocation}</ItemName>
            </Item>
            <Item>
              <Icon name="ios-calendar" size={18} color="#333" />
              <ItemName>{jobDate}</ItemName>
            </Item>
          </ContentMetadata>
          <ContentHtml>
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="#4481eb"
                size="large"
              />
            ) : (
              <HTML
                html={job.jobDetails.replace(/(<.*?>)|\s+/g, (m, $1) =>
                  $1 ? $1 : ' ',
                )}
                textSelectable={true}
                imagesMaxWidth={Dimensions.get('window').width - 40}
              />
            )}
          </ContentHtml>
        </ScrollView>
      </Content>
    </SafeAreaView>
  );
};

export default SingleJob;

SingleJob.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  shape: {
    width: '100%',
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

const Content = styled.View`
  flex: 1;
  background: #fff;
`;

const Header = styled.View`
  height: 150px;
  align-items: center;
  position: relative;
  background: #4481eb;
`;

const ButtonGoBack = styled.View`
  position: absolute;
  left: 20px;
  top: 10px;
`;

const Title = styled.Text`
  color: white;
  font-family: 'Poppins';
  font-size: 20px;
  text-align: center;
  padding: 0 20px;
  margin-top: 50px;
`;

const ContentMetadata = styled.View`
  background: #fff;
  height: 105px;
  border-radius: 4px;
  margin-top: 8px;
  padding: 0 20px;
`;

const ItemName = styled.Text`
  margin-left: 10px;
  color: #333;
`;

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ContentHtml = styled.View`
  padding: 20px;
`;
