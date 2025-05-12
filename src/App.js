import React from "react";
import { SafeAreaView, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddToDo from "./components/AddTodo";
import Empty from "./components/Empty";

const App = () => {
    const today = new Date();
    console.log(today);

    return (
        <SafeAreaProvider edges={["bottom"]}>
            <KeyboardAvoidingView behavior={Platform.select({ ios: "padding" })} className="flex-1">
                <SafeAreaView className="flex-1 bg-white">
                    <DateHead date={today} />
                    <Empty />
                    <AddToDo />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
};

export default App;
