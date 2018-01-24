import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//make a compontent
class CustomGoogleButton extends Component {  
//const CustomFbButton = ({onPress, backgroundColor, name}) =>{
    constructor(props){
        super(props);
    }
    
    loginWithGoogle(){
        console.log("data found")
    }
    
    render() {
        const { containerView } = styles;
        return (
            // <View style={containerView}>
                <Icon.Button 
                name="google"
                backgroundColor='#cc3300'
                onPress={()=>this.loginWithGoogle()}>
                    Login with Google
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


export default CustomGoogleButton;