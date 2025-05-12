import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Empty = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Image source={require("../../assets/images/circle.png")} />
            <Text className="text-2xl" style={styles.description}>
                야호! 할 일이 없습니다.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    description: {
        color: "#9e9e9e",
    },
});

export default Empty;
