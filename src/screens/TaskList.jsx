import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";

import todayImage from '../../assets/imgs/today.jpg'

export default props => {
    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background} />

            <View style={style.taskList}>
                <Text>TaskList</Text>
            </View>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    }
}
)