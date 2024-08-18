// components/AppBar.tsx
import { hp, wp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import ScreenWrapper from './ScreenWrapper';

const AppBar: React.FC = () => {
    return (
        <Appbar.Header style={styles.header}>
            <Image source={require('../assets/images/react-logo.png')} style={styles.logo} resizeMode="contain" />
            <Appbar.Content title="" />
            <Appbar.Action icon="bell-outline" onPress={() => { }} />
            <Appbar.Action icon="cog-outline" onPress={() => { }} />
        </Appbar.Header>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: 30,
        borderBottomWidth: wp(10),
        borderBottomColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
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
