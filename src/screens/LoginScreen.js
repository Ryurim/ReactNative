import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {
        console.log("Login with", username, password);
        // Add your login logic here
    };

    return (
        <View className="flex-1">
            {/* logo */}
            <View className="items-center mb-10">
                <View className="w-80 h-24 mb-2">
                    <Image
                        source={require("../../assets/images/eduring.png")}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Form */}
            <View className="mb-6 w-100">
                <Text className="text-gray-700 mb-1">
                    아이디 <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                    className="h-12 border border-gray-300 rounded-md px-4 mb-4"
                    placeholder="아이디"
                    value={username}
                    onChangeText={setUsername}
                />

                <Text className="text-gray-700 mb-1">
                    비밀번호 <Text className="text-red-500">*</Text>
                </Text>
                <View className="relative">
                    <TextInput
                        className="h-12 border border-gray-300 rounded-md px-4 mb-1"
                        placeholder="비밀번호"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity className="absolute right-3 top-3" onPress={togglePasswordVisibility}>
                        <Text className="text-gray-500">{passwordVisible ? "👁️" : "👁️‍🗨️"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity className="bg-indigo-600 p-3 rounded-md items-center" onPress={handleLogin}>
                <Text className="text-white font-medium text-lg">로그인</Text>
            </TouchableOpacity>

            {/* Links */}
            <View className="flex-row justify-between mt-4">
                <Text className="text-gray-700">아이디/비밀번호 찾기</Text>
                <Text className="text-indigo-600 font-medium">회원가입</Text>
            </View>
        </View>
    );
};

export default LoginScreen;
