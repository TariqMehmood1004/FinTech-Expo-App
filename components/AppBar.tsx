// components/AppBar.tsx
import { hp, wp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar: React.FC = () => {
    return (
        <Appbar.Header style={styles.header}>
            <Image source={require('../assets/images/react-logo.png')} style={styles.logo} resizeMode="contain" />
            <View style={styles.actions}>
                <Appbar.Action icon="bell-outline" onPress={() => console.log('Notifications Pressed')} />
                <Appbar.Action icon="cog-outline" onPress={() => console.log('Settings Pressed')} />
            </View>
        </Appbar.Header>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        elevation: wp(5),
        shadowOpacity: wp(0),
        borderBottomWidth: wp(10),
        borderBottomColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
    },
    logo: {
        width: wp(12),
        height: hp(12),
    },
    actions: {
        flexDirection: 'row',
    },
});
