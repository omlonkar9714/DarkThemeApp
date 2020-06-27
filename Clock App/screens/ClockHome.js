import React, {Component} from 'react';
import {View, Text, ToastAndroid, Button, StyleSheet} from 'react-native';
// import {AdMobBanner} from 'react-native-admob';

// const BannerExample = ({style, title, children, ...props}) => (
//   <View {...props} style={[styles.example, style]}>
//     <Text style={styles.title}>{title}</Text>
//     <View>{children}</View>
//   </View>
// );

// const bannerWidths = [200, 250, 320];

class ClockHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curHour: '',
      curMin: '',
      curSec: '',
      dotVisible: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        curHour: date.getHours(),
        curMin: date.getMinutes(),
        curSec: date.getSeconds(),
        dotVisible: !this.state.dotVisible,
      });
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <BannerExample title="AdMob - Basic"> */}
        {/* <AdMobBanner
            adSize="banner"
            adUnitID="ca-app-pub-5743413904307874/7151965310"
            // adUnitID="ca-app-pub-3940256099942544/2934735716"
            ref={(el) => (this._basicExample = el)}
          />
          <Button
            title="Reload"
            onPress={() => this._basicExample.loadBanner()}
          />
        </BannerExample> */}
        <View
          style={{
            height: 400,
            width: 400,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: 200,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <Text style={{fontSize: 50, color: 'red'}}>
                {this.state.curHour > 12
                  ? this.state.curHour - 12
                  : '0' + this.state.curHour}
              </Text>
            </View>
            <View
              style={{
                width: 10,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              {this.state.dotVisible === true && (
                <View>
                  <Text style={{fontSize: 50, color: 'red'}}>:</Text>
                </View>
              )}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <Text style={{fontSize: 50, color: 'red'}}>
                {' '}
                {this.state.curMin > 9
                  ? this.state.curMin
                  : '0' + this.state.curMin}{' '}
              </Text>
            </View>
            <View
              style={{
                width: 10,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              {this.state.dotVisible === true && (
                <View>
                  <Text style={{fontSize: 50, color: 'red'}}>:</Text>
                </View>
              )}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <Text style={{fontSize: 50, color: 'red'}}>
                {this.state.curSec < 10
                  ? '0' + this.state.curSec
                  : this.state.curSec}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            {this.state.dotVisible === true && (
              <View>
                <Text style={{fontSize: 20, color: 'red'}}>
                  {this.state.curHour > 12 ? 'pm' : 'am'}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 30 : 10,
  },
  example: {
    paddingVertical: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
  },
});

export default ClockHome;
