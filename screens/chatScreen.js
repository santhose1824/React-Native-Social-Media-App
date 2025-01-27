import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const ChatScreen = ({navigation}) =>{
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
            <Text style={{color:'black'}}>Chatting Screen</Text>
        </SafeAreaView>
    );
}

export default ChatScreen;