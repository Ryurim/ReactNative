import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { Image } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import Box from "./components/Box";
import Counter from "./components/Counter";

// const App = () => {
//     const [visible, setVisible] = useState(true);
//     const pressVisible = () => {
//         setVisible(!visible);
//     };
//     return (
//         // <View className="flex-1 justify-center items-center gap-3">
//         //     <StatusBar style="auto" />
//         //     {/* <LoginScreen /> */}
//         //     <Button title="토글" onPress={pressVisible} />
//         //     {visible && <Box rounded size="large" color="red" />}
//         // </View>
//         <SafeAreaView className="flex-1">
//             <Counter />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

const App = () => {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <SafeAreaView className="flex-1">
            <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
        </SafeAreaView>
    );
};

export default App;
