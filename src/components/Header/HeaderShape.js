import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HeaderShape = () => (
  <Svg
    viewBox="0 0 1920 204.8"
    preserveAspectRatio="none"
    className="prefix__svg prefix__hero__wave--svg prefix__replaced-svg"
    style={styles.svg}>
    <Path
      d="M367 41.4c235-43.3 518-74.9 736.8 23.9 121.4 54.9 250.6 103.2 395.6 103.2 116.1 0 242.4-31 383.1-114.4 13.4-7.9 25.9-15.3 37.5-22.2v173H0v-172c0-.1 132 51.7 367 8.5z"
      fill={'#fff'}
    />
  </Svg>
);

const styles = StyleSheet.create({
  svg: {
    width: '100%',
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default HeaderShape;
