//gallary swiping  code

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  Image,
} from 'react-native';

const images = [
  'https://iphone-wallpaper.pics/wallpaper/5/0/50-minimalist-iphone-wallpapers-34_e8040da6cf606378949d3f404eeb28a6_raw.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLdsb6pllY8PUGMLJIzwXAoMhsWqe3BVceFar5TkGSmTvk-Cb8&usqp=CAU',
  'https://img.freepik.com/free-photo/lake-mountains_1204-507.jpg?size=626&ext=jpg',
  'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxsrZ1Te-QWOuWdQXjIZ9rFL-harEgyGjG5JXWy8IxyQWgvPxG&usqp=CAU',
  'https://secureservercdn.net/198.71.233.68/c48.9b2.myftpupload.com/wp-content/uploads/2020/01/Top-16-PUBG-Mobile-HD-Wallpaper-Image-Free-Download-1140x600.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM1FaU7a49qSunQXOkWXBLP3T299T9VRmUwyx1mZcg6JG4KU0o&usqp=CAU',
];

const window = Dimensions.get('window');

export default class App extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window,
    },
  };

  onDimensionsChange = ({window}) => {
    this.setState({dimensions: {window}});
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onDimensionsChange);
  }

  render() {
    const windowWidth = this.state.dimensions.window.width;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{
                    width: windowWidth,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                  }}
                  key={imageIndex}>
                  <Image source={{uri: image}} style={styles.card}>
                    {/* <View style={styles.textContainer}></View> */}
                  </Image>
                  {/* <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.infoText}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View> */}
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    backgroundColor: 'white',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1.5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'powderblue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    marginVertical: 10,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
