import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Counter = ({ count, onIncrease, onDecrease }) => {
    return (
        <View className="flex-1">
            <View className="flex-1 justify-center items-center">
                <Text className="text-7xl font-bold">{count}</Text>
            </View>
            <Button
                title="+1"
                onPress={() => {
                    console.log("+1");
                    onIncrease();
                }}
            />
            <Button
                title="-1"
                onPress={() => {
                    console.log("-1");
                    onDecrease();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    numberArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 72,
        fontWeight: "bold",
    },
});

export default Counter;
