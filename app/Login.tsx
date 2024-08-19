import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import ScreenWrapper from "@/components/ScreenWrapper";
import TTextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { wp } from "@/helpers/common";
import { login } from '@/redux/slices/authSlice';
import api from '@/utils/api';
import { storeTokenAndUser } from '@/utils/storage';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isShowPassword = false;
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = async () => {

        try {
            const response = await api.post('/auth/login', { email, password });

            if (response && response.data) {
                const token = response.data.access_token;
                const userData = response.data;

                // Save token and user data locally
                await storeTokenAndUser(token, userData);
                console.log('Token and user data stored successfully');

                // Dispatch the login action to update the Redux state
                dispatch(login(token));
                console.log('Redux state updated with login token');

                // Redirect to the HomePage
                router.push('/HomePage');
                console.log('Navigation to HomePage successful');
            } else {
                throw new Error('Invalid login response');
            }
        } catch (error) {
            console.error('Login error:', error);
            let errorMessage = 'Login Failed. Please check your credentials.';
            Alert.alert('Login Failed', errorMessage);
        }
    };



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
};

export default Login;
