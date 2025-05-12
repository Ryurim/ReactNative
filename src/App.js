import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddToDo from "./components/AddTodo";
import Empty from "./components/Empty";

const App = () => {
    const today = new Date();
    console.log(today);

    return (
        <SafeAreaProvider edges={["bottom"]}>
            <SafeAreaView className="flex-1">
                <DateHead date={today} />
                <Empty />
                <AddToDo />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default App;
