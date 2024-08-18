import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import { wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';

// Define the types for the props
interface CardProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    children,
    containerStyle,
    titleStyle,
    subtitleStyle,
}) => {
    return (
        <View style={[styles.card, containerStyle]}>
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            {subtitle && <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>}
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.colors.transparent,
        borderRadius: Colors.radius.md,
        padding: wp(4),
        marginVertical: wp(1),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0
    },
    title: {
        fontWeight: 'bold',
        fontSize: wp(5)
    },
    subtitle: {
        fontSize: wp(4),
        color: '#888'
    }
});
