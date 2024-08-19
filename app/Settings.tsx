import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { removeTokenAndUser } from '@/utils/storage';
import { useRouter } from 'expo-router';
import Button from '@/components/Button';
import { wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';
import ScreenWrapper from '@/components/ScreenWrapper';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const Settings = () => {

    const [isLoggingOutLoading, setIsLoggingOutLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            setIsLoggingOutLoading(true);

            setTimeout(async () => {
                await removeTokenAndUser();
                router.push('/Login');
                setIsLoggingOutLoading(false);
            }, 3000);
        } catch (error) {
            Alert.alert('Logout Failed', 'An error occurred while logging out.');
            setIsLoggingOutLoading(false);
        }
    };

    return (
        <ScreenWrapper backgroundColor={'white'}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{ fontSize: wp(5), fontWeight: 'bold', marginBottom: wp(5) }}>Settings</Text>

                <TouchableOpacity style={styles.card} onPress={() => router.push('/Login')}>
                    <Ionicons name='home-outline' size={17.5} color='black' />
                    <View style={{ marginLeft: wp(5), flex: 1, }}>
                        <Text style={styles.cardText}>Profile</Text>
                    </View>
                    <Ionicons name='chevron-forward' size={17.5} color='black' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push("/Login")}>
                    <Ionicons name='analytics' size={17.5} color='black' />
                    <View style={{ marginLeft: wp(5), flex: 1, }}>
                        <Text style={styles.cardText}>History</Text>
                    </View>
                    <Ionicons name='chevron-forward' size={17.5} color='black' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push("/Login")}>
                    <Ionicons name='card' size={17.5} color='black' />
                    <View style={{ marginLeft: wp(5), flex: 1, }}>
                        <Text style={styles.cardText}>Funds</Text>
                    </View>
                    <Ionicons name='chevron-forward' size={17.5} color='black' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push("/Login")}>
                    <Ionicons name='add' size={17.5} color='black' />
                    <View style={{ marginLeft: wp(5), flex: 1, }}>
                        <Text style={styles.cardText}>Add Funds</Text>
                    </View>
                    <Ionicons name='chevron-forward' size={17.5} color='black' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push("/Login")}>
                    <Ionicons name='cash' size={17.5} color='black' />
                    <View style={{ marginLeft: wp(5), flex: 1, }}>
                        <Text style={styles.cardText}>Withdraw Funds</Text>
                    </View>
                    <Ionicons name='chevron-forward' size={17.5} color='black' />
                </TouchableOpacity>

                <View style={{ paddingHorizontal: wp(15) }}>
                    <Button
                        title="Logout"
                        onPress={handleLogout}
                        style={{ marginTop: 20 }}
                        isLoading={isLoggingOutLoading}
                        disabled={isLoggingOutLoading}
                    />
                </View>
            </ScrollView>
        </ScreenWrapper >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.colors.grey,
        padding: 20,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 0,
        justifyContent: 'space-between',
    },
    cardText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#f44336',
    },
    logoutText: {
        color: '#fff',
    },
});

export default Settings;
