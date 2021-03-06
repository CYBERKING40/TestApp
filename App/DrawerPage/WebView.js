import React from "react";
import { View, Text, } from "react-native";
import { WebView } from 'react-native-webview';
import { Header } from "../Component/Header";


export default function Web(props) {


    return (
        <>
            <Header
                title='Web View'
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3875ea' }}>
                <View style={{ height: '5%', width: '100%', borderColor: '#3875ea', borderWidth: 1 }}>
                    <WebView

                        source={{ html: '<h1 style="text-align:center">Hello, Web View</h1>' }}
                    />
                </View>
                <View style={{ height: '95%', width: '100%' }}>
                    <WebView
                        // source={{ uri: 'https://www.youtube.com/channel/UCMODu1ddOl2lAsfDkA9NTjA' }}
                        source={{ uri: 'https://www.google.com/' }}
                    //source={{ html: '<h1 style="text-align:center">Hello, Web View</h1>' }}
                    />
                </View>
            </View>
        </>
    )
}