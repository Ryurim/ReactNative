import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Empty = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Image source={require("../../assets/images/young_and_happy.png")} style={styles.image} />
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
    image: {
        width: 240,
        height: 179,
        marginBottom: 16,
    },
});

export default Empty;
