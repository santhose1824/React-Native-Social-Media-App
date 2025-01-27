import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Routes } from "../navigation/routes";

const HomeScreen =  ({navigation})=>{
    return(
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
            <Text style={{color:'black'}}>Home Screen</Text>
            <TouchableOpacity style={
                {
                    backgroundColor:'black',
                    borderRadius:10,
                    padding:10,
                    margin:10
                }
            }
            onPress={()=>navigation.navigate(Routes.MessageScreen)} 
            >
                <Text style={{color:'white'}}>Go to Message Screen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;