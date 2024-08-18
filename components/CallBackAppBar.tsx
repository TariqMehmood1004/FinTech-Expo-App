import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { wp } from '@/helpers/common';

interface CallBackAppBarProps {
    title?: string;
    onPressBack?: () => void;
    appBarStyle?: ViewStyle;
    titleStyle?: TextStyle;
    iconColor?: string;
}

const CallBackAppBar: React.FC<CallBackAppBarProps> = ({ title, onPressBack, appBarStyle, titleStyle, iconColor = Colors.colors.black }) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        if (onPressBack) {
            onPressBack();
        } else {
            navigation.goBack();
        }
    };

    return (
        <Appbar.Header mode="small" theme={{ colors: { primary: 'green' } }} style={[styles.header, appBarStyle]}>
            <Appbar.BackAction onPress={handleBackPress} color={iconColor} size={24} />
            <Appbar.Content title={title || ''} titleStyle={[styles.appBarTitle, titleStyle]} />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 30,
        color: Colors.colors.black,
        elevation: 0,
        padding: 0,

    },
    appBarTitle: {
        fontSize: wp(5),
        fontWeight: 'bold',
        color: Colors.colors.black,
    },
});

export default CallBackAppBar;
