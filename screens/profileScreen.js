import React from "react";
import { SafeAreaView, Text } from "react-native";

const ProfileScreen = ({navigation}) =>{
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
            <Text style={{color:'black'}}>Profile Screen</Text>
        </SafeAreaView>
    );
}

export default ProfileScreen