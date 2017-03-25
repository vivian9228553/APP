import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';

const Header = () =>{
    const {add,box,btn,title} = styles;
    return(
       <View>
            <View style={[add]}></View> 

            <View style = {[box]}>
                <Image source = {require('../Asset/btn_back.png')}
                        style = {[btn]} />
                <Text style={[title]}>Hearthstone</Text>
                <Image source = {require('../Asset/btn_like.png')}
                        style = {[btn]} />
            </View>
        </View>
    );
};

const styles ={
    add:{
        height:20,
        backgroundColor:'#6441a5'
    },
    box:{
        backgroundColor:'#6441a5',
        flexDirection:'row',
        justifyContent:'center'  

    },
    btn:{
        width:33,
        height:33,
        padding:6
    },
    title:{
        backgroundColor:'#6441a5',
        color:'white',
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        width:292,
        padding:6
    }
};
export default Header;