import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';

const Search = () =>{
    const {container,add,header,search_box,search_icon,search_text,cast} = styles;
    return(
        <View style={[container]}>
            <View style={[add]}></View>
            <View style={[header]}>
                <View style={[search_box]}>
                    <Image source={require('../Asset/icon_search.png')}
                            style={[search_icon]} />
                    <Text style={[search_text]}>Search</Text>
                </View>
                <Image source={require('../Asset/btn_cast.png')}
                        style={[cast]} />
            </View>
        </View>
    );
};

const styles = {
    container:{
        flex:1
    },
    add:{
        height:20,
        backgroundColor:'#6441a5',
    },
    header:{
        height:44,
        backgroundColor:'#6441a5',
        flexDirection:'row',
        alignItems:'center',
        padding:3.5
    },
    search_box:{
        width:320,
        height:30,
        borderRadius:5,
        backgroundColor:'#311f53',
        flexDirection:'row',
        alignItems:'center',
        margin:5
    },
    search_text:{
        fontSize:15,
        color:'#b9a3e3',
        textAlign:'left',
        
    },
    search_icon:{
        width:18,
        height:18,
        padding:8.5,
        margin:8.5,
    },
    cast:{
        width:33,
        height:33,
        padding:7.5,
        justifyContent:'flex-start'
    }
};

export default Search;