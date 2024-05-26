import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";

import commonStyles from "../commonStyles";

import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={style.taskList}>
                <Text>Tarefa #01</Text>
                <Text>Tarefa #02</Text>
                <Text>Tarefa #03</Text>
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
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subTitle:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    }
}
)