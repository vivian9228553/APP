import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';

const Tab = () =>{
    const{container,line,tab,box,pic1,pic2,pic3,pic4,text1,text} = styles;
    return(
        <View style={[container]}>

            <View style={[line]}></View>
        <View style={[tab]}>
            <View style={[box]}>
                <Image source={require('../Asset/btn_games_selected.png')}
                        style={[pic1]} />
                <Text style={[text1]}>Games</Text>
            </View>
            <View style={[box]}>
                <Image source={require('../Asset/btn_channels.png')}
                        style={[pic2]} />
                <Text style={[text]}>Channels</Text>
            </View>
           <View style={[box]}>
                <Image source={require('../Asset/btn_following.png')}
                        style={[pic3]} />
                <Text style={[text]}>Following</Text>
            </View>
           <View style={[box]}>
                <Image source={require('../Asset/btn_me.png')}
                        style={[pic4]} />
                <Text style={[text]}>Me</Text>
            </View>
        </View>
        </View>
    );
};

const styles ={
    container:{
        flex:1,
        justifyContent:'flex-end',               
    },
    tab:{
        flexDirection:'row',
    },
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
   
    },
    pic1:{
        width:49,
        height:49,
        
    },
    pic2:{
        width:49,
        height:49,
    },
    pic3:{
        width:49,
        height:49,
    },
    pic4:{
        width:49,
        height:49,
    },
    text1:{
        fontSize:10,
        color:'#6441a5',
        textAlign:'center',
        position:'absolute',
        bottom:1,
    },
    text:{
        fontSize:10,
        color:'#bbbbbb',
        textAlign:'center',
        position:'absolute',
        bottom:1,
    },
    line:{
        width:375,
        height:0.5,
        backgroundColor:'rgba(0,0,0,0.2)',
    }
};

export default Tab;