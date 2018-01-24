import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//make a compontent
class CustomFbButton extends Component {  
//const CustomFbButton = ({onPress, backgroundColor, name}) =>{
    constructor(props){
        super(props);
    }
    
    loginWithFacebook(){
        console.log("data found")
    }

    render() {
        const { containerView } = styles;
        return (
            // <View style={containerView}>
                <Icon.Button 
                name="facebook"
                backgroundColor='#3b5998'
                onPress={()=>this.loginWithFacebook()}>
                    Login with Facebook
                </Icon.Button>   
            // </View>
    );
    }

};

const styles={
    containerView:{
        marginLeft:20, 
        marginRight:20
    }

}


export default CustomFbButton;