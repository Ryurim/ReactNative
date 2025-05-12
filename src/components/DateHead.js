import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DateHead = ({ date }) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formatted = `${year}년 ${month}월 ${day}일`;

    const { top } = useSafeAreaInsets();

    return (
        <>
            <View className="bg-emerald-400" style={{ height: top }} />
            <StatusBar barStyle="light-content" />
            <View className="p-5 bg-emerald-400">
                <Text className="text-2xl text-white">{formatted}</Text>
            </View>
        </>
    );
};

export default DateHead;
