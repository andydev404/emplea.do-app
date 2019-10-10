import axios from 'axios';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import uuidv4 from 'uuid/v4';
import Theme from '../Theme.style';
import Header from '../components/Header';
import JobItem from '../components/JobItem';
import {API_URI} from '../constants/endpoint';

class Home extends React.Component {
  state = {
    jobList: [],
    loading: true,
    isFetching: false,
    page: 1,
    loadingMore: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const {page} = this.state;
    axios
      .get(`${API_URI}?page=${page}&PageSize=8`)
      .then(({data}) => {
        this.setState((prevState, nextProps) => ({
          jobList:
            page === 1 ? Array.from(data) : [...this.state.jobList, ...data],
          loading: false,
        }));
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  loadMoreData = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this.fetchData();
      },
    );
  };

  refreshData = () => {
    this.setState({isFetching: true}, () => {
      axios
        .get(`${API_URI}?page=1&PageSize=8`)
        .then(({data}) => {
          this.setState({
            jobList: data,
            isFetching: false,
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    const {jobList, loading, isFetching} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title="Emplea.do" iconName="ios-people" />
        <Wrapper>
          {loading ? (
            <ActivityIndicator
              animating={true}
              color={Theme.PRIMARY_COLOR}
              size="large"
            />
          ) : (
            <FlatList
              data={jobList}
              renderItem={({item}) => (
                <JobItem {...item} navigation={navigation} />
              )}
              keyExtractor={() => uuidv4()}
              showsVerticalScrollIndicator={false}
              onRefresh={() => this.refreshData()}
              refreshing={isFetching}
              onEndReached={this.loadMoreData}
              onEndReachedThreshold={1}
            />
          )}
        </Wrapper>
      </SafeAreaView>
    );
  }
}

Home.navigationOptions = {
  header: null,
};

export default Home;

const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 50px;
`;

const Wrapper = styled.View`
  flex: 1;
  background: white;
  padding: 0 20px;
`;
