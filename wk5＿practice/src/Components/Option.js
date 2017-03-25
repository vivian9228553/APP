import React from 'react';
import {Text, View} from 'react-native';
const Option = () =>{
    const {option,line,box,box1,box2} = styles;
    return(
    <View style={[option]}>    
        <View style={[box]}>
            <Text style={[box1]}>LIVE</Text>
            <View style={[line]}></View>
        </View>
        <Text style={[box2]}>RECENT</Text>
    </View>
    );
};
const styles = {
    option:{
        flexDirection:'row',
        alignItems:'center',
        height:44      
    },
    box:{
        flex:1
    },
    box1:{
      height:39,
      fontSize:13,
      textAlign:'center',
      color:'#6441a5',
      padding:15
    },
    line:{
        backgroundColor:'#6441a5',
        height:5
    },
    box2:{
        height:44,
        fontSize:13,
        color:'#bbbbbb',
        textAlign:'center',
        padding:15,
        flex:1
    }
};
export default Option;