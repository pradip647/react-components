
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//make a compontent
const CustomButton = ({onPress, children}) =>{
    const { buttonStyle,textStyle } = styles;
   return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
   );

};

const styles = {
    textStyle:{
        alignSelf:'center',
        //color:'#007aff',
        color:'#ffffff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
       // flex:1,
        alignSelf:'stretch',
        //backgroundColor:'#e0e0eb',
        borderRadius:5,
        borderWidth:1,
       // borderColor:'#007aff',
       borderColor:'#b3b3cc',
        marginLeft:20,
        marginRight:20
    }
}

export default CustomButton;