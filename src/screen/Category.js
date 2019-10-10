import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Theme from '../Theme.style';
import {API_URI} from '../constants/endpoint';
import Header from '../components/Header';
import JobItem from '../components/JobItem';

class Category extends React.Component {
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
    const category = this.props.navigation.state.params[0].category;
    axios
      .get(`${API_URI}?page=${page}&PageSize=15&JobCategory=${category}`)
      .then(({data}) => {
        this.setState((prevState, nextProps) => ({
          jobList:
            page === 1 ? Array.from(data) : [...this.state.jobList, ...data],
          loading: false,
        }));
      })
      .catch(err => {
        console.log(err);
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
    const category = this.props.navigation.state.params[0].category;
    this.setState({isFetching: true}, () => {
      axios
        .get(`${API_URI}?page=1&PageSize=15&JobCategory=${category}`)
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
    const title = navigation.state.params[0].title;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <Header title={title} iconName="ios-keypad" />
          <View style={styles.wrapper}>
            {loading ? (
              <ActivityIndicator
                style={styles.loading}
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
                keyExtractor={item => uuidv4()}
                showsVerticalScrollIndicator={false}
                onRefresh={() => this.refreshData()}
                refreshing={isFetching}
                onEndReached={this.loadMoreData}
                onEndReachedThreshold={0.5}
              />
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

Category.navigationOptions = {
  header: null,
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loading: {
    marginTop: 50,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 130,
  },
});
