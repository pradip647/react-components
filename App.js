/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
//Delete file package.json under ./node_modules/react-native/local-cli/core/fixtures/files/package.json
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Deck from './src/components/deck';
import NewDeck from './src/components/newdeck';

import Header from './src/components/Header';
import CustomInput from './src/components/Login/CustomInput';
import CustomButton from './src/components/CustomButton';
import CustomFbButton from './src/components/CustomFbButton';
import CustomGoogleButton from './src/components/CustomGoogleButton';

//login
//import LoginInput from './src/components/Login/LoginInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
const NEWDATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' }
];

//export default class App extends Component<{}> {
//export default class App extends Component {
  export default class App extends React.Component {  

  state={username:"",password:""};

  renderCard(item) {
    return (
      <View key={item.id} >
        <Text >{item.id} </Text>
        <Text>{item.text} </Text>
      </View>
    )
  }

  renderNewCard(item) {
    return (
      <View key={item.id} >
        <Text >{item.id} </Text>
        <Text>{item.text} </Text>
      </View>
    )
  }
  checkbuttonData() {
      console.log(this.state);
  }


  render() {
    const { containerView, inputView, submitView, socialView, GoogleView } = styles;
    return (
      <View style={containerView}>

          <View style={inputView}>
              <CustomInput
                    placeholder="Enter Username"
                    lebel="New Field"
                    value={this.state.username}
                    onChangeText={text => this.setState({username:text})}
              />
              <CustomInput
                    placeholder="Enter Password"
                    lebel="New Field"
                    value={this.state.password}
                    onChangeText={text => this.setState({password:text})}
              />
          </View>

          <View style={submitView}>
              <CustomButton onPress={()=>this.checkbuttonData()} children="Submit"/>
          </View>

          <View style={socialView}>
              <View ><CustomFbButton/></View>
              <View style={GoogleView}><CustomGoogleButton/></View>
          </View>

      </View>


    )

  }

  
}

const styles = StyleSheet.create({
      containerView:{
        flex: 1,
        backgroundColor:'#3d3d5c'
      },
      inputView:{
        top:100
      },
      submitView:{
        top:120
      },

      socialView:{
        top:130,
        marginLeft:20,
        marginRight:20
      },

      GoogleView:{
        top:10
      },

      // container: {
      //   flex: 1,
      //  // justifyContent: 'center',
      //  // alignItems: 'center',
      //   backgroundColor: '#F5FCFF',
      // },
      // welcome: {
      //   fontSize: 20,
      //   textAlign: 'center',
      //   margin: 10,
      // },
      // instructions: {
      //   textAlign: 'center',
      //   color: '#333333',
      //   marginBottom: 5,
      // },

});








    // return (
    //   <View style={{flex:1}}>
    //   <Header headerText={'Header'} />

    //     <View>

    //     <CustomInput
    //         placeholder="please enter"
    //         lebel="New Field"
    //         value={this.props.text}
    //         onChangeText={text => this.props.text=text}
    //         />

    //          <Text style={styles.welcome}>
    //           Welcome to React Native!
    //         </Text>
    //           <Deck 
    //             data={DATA}
    //             renderCard={this.renderCard}
    //           />
    //           <NewDeck
    //             data={NEWDATA}
    //             renderNewCard={this.renderNewCard}
    //           /> 


    //     </View>
    //   </View>

    // );