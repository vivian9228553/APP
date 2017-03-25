import React, { Component } from 'react';
import {Text, View, Image,StatusBar} from 'react-native';
import Header from './src/Components/Header.js';
import Option from './src/Components/Option.js';
const page2 = () =>{
    const {container,background,pic,pic1} = styles;
    return(
    <View style={[container]}>

    <StatusBar barStyle='light-content' />
        <Header />
        <Option />
        <View style={[background]}>    
            <Image source={require('./src/Asset/img_firebat.png')} 
                    style = {[pic]}/>
            <Image source={require('./src/Asset/img_forsen.png')} 
                    style = {[pic]}/> 
            <Image source={require('./src/Asset/img_kolento.png')} 
                    style = {[pic1]}/>     
        </View>
    </View>
    );
};

const styles = {
    container:{
        flex:1
    },
    background:{
        alignItems:'center',
        backgroundColor:'#f1f1f1'
    },
    pic:{
        width:365,
        height:200,
        margin:2.5
    },
    pic1:{
        width:365,
        height:144,
        margin:2.5
    }
};

export default page2;