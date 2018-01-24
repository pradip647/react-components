import React, {Component} from 'react';
import {
    View
} from 'react-native';

class NewDeck extends Component {

    renderNewCards(){
        return this.props.data.map(item => {
            return this.props.renderNewCard(item);
        })
        console.log("this.is New renders Card");
        console.log(this.props.data);
        console.log("end....");
    }
    
    render() {
        return (
            <View>
                {this.renderNewCards()}
            </View>
        )
    }
}

export default NewDeck;