import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Routes } from "../navigation/routes";

const MessageScreen = ({navigation}) =>{
    return (
        <SafeAreaView style={
            {
                flex: 1,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                backgroundColor:'white'
            }
        }>
            <Text style={{color:'black'}}>Message Screen</Text>
            <TouchableOpacity style={
                {
                    backgroundColor:'black',
                    borderRadius:10,
                    padding:10,
                    margin:10
                }
            } onPress={()=>navigation.navigate(Routes.ChatScreen)}>
                <Text style={{color:'white'}}>Go to the Chat Screen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default MessageScreen;