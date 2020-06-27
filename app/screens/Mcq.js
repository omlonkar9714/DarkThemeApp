import React, {Component} from 'react';
import {View, Text, CheckBox} from 'react-native';

class Mcq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: Math.random(),
          question: 'This is multiple choice question.',
          type: 'multiple',
          options: [
            {option: 'First Option'},
            {option: 'Second Option'},
            {option: 'Third Option'},
            {option: 'Fourth Option'},
          ],
          answers: [
            {choice: false},
            {choice: false},
            {choice: false},
            {choice: false},
          ],
        },
        {
          id: Math.random(),
          question: 'This is single choice question.',
          type: 'single',
          options: [
            {option: 'First Option'},
            {option: 'Second Option'},
            {option: 'Third Option'},
          ],
          answers: [{choice: false}, {choice: false}, {choice: false}],
        },
        {
          id: Math.random(),
          question: 'This is multiple choice question.',
          type: 'multiple',
          options: [{option: 'First Option'}, {option: 'Second Option'}],
          answers: [{choice: false}, {choice: false}],
        },
        {
          id: Math.random(),
          question: 'This is single choice question.',
          type: 'single',
          options: [
            {option: 'First Option'},
            {option: 'Second Option'},
            {option: 'Third Option'},
          ],
          answers: [{choice: false}, {choice: false}, {choice: false}],
        },
      ],
    };
  }

  forMultiple = (data, index) => {
    let que = this.state.questions;
    for (let i = 0; i < que.length; i++) {
      if (que[i].id == data.id) {
        que[i].answers[index].choice = !que[i].answers[index].choice;
      }
    }
    this.setState({questions: que});
    // alert(JSON.stringify(this.state));
  };

  forSingle = (data, index) => {
    let que = this.state.questions;
    for (let i = 0; i < que.length; i++) {
      if (que[i].id == data.id) {
        for (let j = 0; j < que[i].answers.length; j++) {
          if (j == index) {
            que[i].answers[j].choice = !que[i].answers[j].choice;
          } else {
            que[i].answers[j].choice = false;
          }
        }
        // que[i].answers[index].choice = !que[i].answers[index].choice;
      }
    }
    this.setState({questions: que});
  };

  checkboxList = (data) => {
    return data.answers.map((answers, index) => {
      return (
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <CheckBox
            value={data.answers[index].choice}
            onValueChange={() => {
              if (data.type == 'multiple') {
                this.forMultiple(data, index);
              } else if (data.type == 'single') {
                this.forSingle(data, index);
              }
            }}></CheckBox>
          <Text>{data.options[index].option}</Text>
        </View>
      );
    });
  };

  mcqList = () => {
    return this.state.questions.map((data) => {
      return (
        <View style={{marginTop: 20}}>
          <View style={{marginVertical: 10}}>
            <Text>{data.question}</Text>
          </View>

          {this.checkboxList(data)}

          {/* //checkboxes  */}

          {/*           
          <View style={{marginVertical: 10}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  value={data.answers[0].choice}
                  onValueChange={() => {
                    if (data.type == 'multiple') {
                      this.forMultiple(data, 0);
                    } else if (data.type == 'single') {
                      this.forSingle(data, 0);
                    }
                  }}></CheckBox>
                <Text>{data.options[0].option}</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  value={data.answers[1].choice}
                  onValueChange={() => {
                    if (data.type == 'multiple') {
                      this.forMultiple(data, 1);
                    } else if (data.type == 'single') {
                      this.forSingle(data, 1);
                    }
                  }}></CheckBox>
                <Text>{data.options[1].option}</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  value={data.answers[2].choice}
                  onValueChange={() => {
                    if (data.type == 'multiple') {
                      this.forMultiple(data, 2);
                    } else if (data.type == 'single') {
                      this.forSingle(data, 2);
                    }
                  }}></CheckBox>
                <Text>{data.options[2].option}</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  value={data.answers[3].choice}
                  onValueChange={() => {
                    if (data.type == 'multiple') {
                      this.forMultiple(data, 3);
                    } else if (data.type == 'single') {
                      this.forSingle(data, 3);
                    }
                  }}></CheckBox>
                <Text>{data.options[3].option}</Text>
              </View>
            </View>
          </View>
           */}

          {/* //checkboxes */}
        </View>
      );
    });
  };

  render() {
    return (
      <View
        style={{
          margin: 20,
          borderWidth: 2,
          borderColor: 'powderblue',
          flex: 1,
          padding: 20,
          borderRadius: 20,
        }}>
        <View style={{margin: 20}}>
          <Text> Mcq Questions (Single / Multiple)</Text>
        </View>
        <View>{this.mcqList()}</View>
      </View>
    );
  }
}

export default Mcq;
