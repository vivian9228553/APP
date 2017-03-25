import React, { Component } from 'react';
import {Text, View, Image,StatusBar} from 'react-native';
import Search from './src/Components/Search.js';
import Tab from './src/Components/Tab.js';

const page3 = () =>{
    const {container,background,box,pic1,pic2,pic3,line} = styles;
    return(
    <View style = {[container]}>
        <StatusBar barStyle='light-content' />
        <Search />
        <View style={[background]}>
            <View style={[box]}>
                <Image source={require('./src/Asset/img_leagueoflegends.png')}
                        style = {[pic1]} />
                <Image source={require('./src/Asset/img_counterstrike.png')}
                        style = {[pic1]} />
            </View>
            <View style={[box]}>
                <Image source={require('./src/Asset/img_hearthstone.png')}
                        style = {[pic2]} />
                <Image source={require('./src/Asset/img_dota2.png')}
                        style = {[pic2]} />
            </View>
            <View style={[box]}> 
                <Image source={require('./src/Asset/img_h1z1.png')}
                        style = {[pic3]} />
                <Image source={require('./src/Asset/img_destiny.png')}
                        style = {[pic3]} />
            </View>
        </View>
    <Tab />             
    </View>
    );
};

const styles ={
    container:{
        position:'absolute',
        flex:1,
    },
    background:{
        backgroundColor:'#f1f1f1',
        alignItems:'center',
    },
    box:{
        flexDirection:'row',
        flex:1,
    },
    
    pic1:{
        width:180,
        height:180,
        marginBottom:2.5,
        marginTop:5,
        marginRight:2.5,
        marginLeft:2.5,
    },
    pic2:{
        width:180,
        height:180,
        marginTop:2.5,
        marginBottom:2.5,
        marginRight:2.5,
        marginLeft:2.5,
    },
    pic3:{
        width:180,
        height:180,
        marginTop:2.5,
        marginBottom:0,
        marginRight:2.5,
        marginLeft:2.5,
    },
};

export default page3;