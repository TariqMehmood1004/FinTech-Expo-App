import ScreenWrapper from "@/components/ScreenWrapper";
import TTextInput from "@/components/TextInput";
import { wp } from "@/helpers/common";
import { Link, Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import Button from "@/components/Button";


const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const isShowPassword = false;
    const router = useRouter();

    const handleLogin = () => {
        router.push('/HomePage');
    }

    return (
        <ScreenWrapper backgroundColor={'white'}>
            <StatusBar style="auto" />
            <View style={{ flex: 1, paddingHorizontal: wp(5), paddingVertical: wp(15) }}>
                <Text style={{ fontSize: wp(7), fontWeight: 'bold', color: 'black' }}>Login</Text>

                <View style={{ height: wp(60), marginTop: wp(5) }}>
                    <TTextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        icon="email"
                    />
                    <TTextInput
                        label="Password"
                        value={password}
                        secureTextEntry={!isShowPassword} // If isShowPassword is true, secureTextEntry should be false
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        icon={isShowPassword ? "eye" : "eye-off"} // Toggle icon based on isShowPassword
                    />

                    <View style={{ marginTop: wp(2), alignItems: 'flex-end' }}>
                        <Link href="./(tabs)/HomePage" style={{ color: 'blue' }}>Forget Password?</Link>
                    </View>
                    <View style={{ padding: wp(5) }}>
                        <Button
                            title="Login"
                            onPress={handleLogin}
                            isLoading={false}
                            disabled={false}
                        />
                    </View>
                    <View style={{ padding: wp(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>Don't have an account?</Text>
                        <Link href="./(tabs)/HomePage" style={{ color: 'blue', marginLeft: wp(2), fontWeight: 'bold' }}>Sign Up</Link>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
}

export default Login