import React, {Component} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Omkar Lonkar',
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginVertical: 50}}> Stopwatch </Text>
        <Text style={{marginVertical: 50}}> Stopwatch </Text>
        <QRCode
          //QR code value
          value={this.state.valueForQRCode ? this.state.valueForQRCode : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
          // logo={{
          //   uri:
          //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
          // }}
          // //Center Logo size  (Optional)
          // logoSize={100}
          // //Center Logo margin (Optional)
          // logoMargin={2}
          // //Center Logo radius (Optional)
          // logoBorderRadius={15}
          // //Center Logo background (Optional)
          // logoBackgroundColor="yellow"
        />
      </View>
    );
  }
}

export default Stopwatch;
