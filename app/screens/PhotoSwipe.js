import React, {Component} from 'react';
import {View, Text, Image, ToastAndroid, Dimensions} from 'react-native';
import {
  ScrollView,
  LongPressGestureHandler,
  State,
  TapGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const circleRadius = 30;
const windowWidth = Dimensions.get('window').width;

class PhotoSwipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: Math.random(),
          imgUrl:
            'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://img.freepik.com/free-photo/lion-digital-illustration-manipulation_114775-44.jpg?size=626&ext=jpg',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh-QLjbQ4V-jkkwwD5iZOVNyaPlqX1uhgF6tIqcwO-ZjMNWfXw&usqp=CAU',
        },
        {
          id: Math.random(),
          imgUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh9IQgqazk7km-fq7JM12zcw4qEUT3I9jgEAuCy1TQvb1K7zaz&usqp=CAU',
        },
      ],
    };
  }

  photoList() {
    return this.state.images.map((data) => {
      const doubleTap = React.createRef();
      const doubleSwipe = React.createRef();
      return (
        <PanGestureHandler
          minDist={10}
          waitFor={doubleSwipe}
          maxPointers={1}
          onHandlerStateChange={this._handleSingleSwipeGesture}>
          <PanGestureHandler
            minDist={10}
            minPointers={2}
            onHandlerStateChange={this._handleDoubleSwipeGesture}>
            <LongPressGestureHandler
              onHandlerStateChange={this._handlelongPress}>
              <TapGestureHandler
                onHandlerStateChange={this._handleSingleTap}
                waitFor={doubleTap}
                enabled={true}>
                <TapGestureHandler
                  ref={doubleTap}
                  onHandlerStateChange={this._handleDoubleTap}
                  numberOfTaps={2}>
                  <View style={{margin: 20, backgroundColor: '#ccc'}}>
                    <Image
                      style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain'}}
                      source={{uri: data.imgUrl}}></Image>
                  </View>
                </TapGestureHandler>
              </TapGestureHandler>
            </LongPressGestureHandler>
          </PanGestureHandler>
        </PanGestureHandler>
      );
    });
  }

  _handleDoubleSwipeGesture = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      ToastAndroid.showWithGravity(
        'Double finger Swiiiippeeee !!!',
        10,
        ToastAndroid.CENTER,
      );
    }
  };

  _handleSingleSwipeGesture = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      ToastAndroid.showWithGravity(
        'Single finger Swiiiippeeee !!!',
        10,
        ToastAndroid.CENTER,
      );
    }
  };

  _handlelongPress = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      ToastAndroid.showWithGravity(
        'LongPREssssssed !!!',
        10,
        ToastAndroid.CENTER,
      );
    }
  };

  _handleDoubleTap = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      ToastAndroid.showWithGravity(
        'Double Tap, so fasssstt !!!',
        10,
        ToastAndroid.CENTER,
      );
    }
  };

  _handleSingleTap = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      ToastAndroid.showWithGravity(
        'Single Taaaaaap !!!',
        10,
        ToastAndroid.CENTER,
      );
    }
  };

  //

  _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  _onPanGestureEvent = Animated.event([{nativeEvent: {x: this._touchX}}], {
    useNativeDriver: true,
  });

  render() {
    return (
      // <View
      //   style={{flex: 1, margin: 20, borderColor: '#00b5b5', borderWidth: 2}}>
      //   <ScrollView>
      //     <View style={{margin: 10}}>{this.photoList()}</View>
      //   </ScrollView>
      // </View>
      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
        <Animated.View
          style={{
            backgroundColor: 'red',
            height: 150,
            justifyContent: 'center',
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: '#42a5f5',
                borderRadius: circleRadius,
                height: circleRadius * 2,
                width: circleRadius * 2,
              },
              {
                transform: [
                  {
                    translateX: Animated.add(
                      this._touchX,
                      new Animated.Value(-circleRadius),
                    ),
                    translateY: Animated.add(
                      this._touchX,
                      new Animated.Value(-circleRadius),
                    ),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default PhotoSwipe;
