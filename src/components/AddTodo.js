import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    Keyboard,
} from "react-native";

const AddToDo = () => {
    const [text, setText] = useState("");
    // console.log(text);

    const onPress = () => {
        setText("");
        Keyboard.dismiss();
    };
    const button = (
        <View className="justify-center items-center rounded-full" style={styles.buttonStyle}>
            <Image source={require("../../assets/icons/add_white/add_white.png")} />
        </View>
    );

    return (
        <View className="flex-row bg-pink-500 items-center justify-between" style={styles.block}>
            <TextInput
                placeholder="할일을 입력하세요."
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}
                returnKeyType="done"
            />
            {Platform.select({
                ios: (
                    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                        {button}
                    </TouchableOpacity>
                ),
                android: <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>,
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: "#bdbdbd",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle: {
        width: 48,
        height: 48,
        backgroundColor: "#26a69a",
    },
});

export default AddToDo;
