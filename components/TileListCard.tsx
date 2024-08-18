import React from 'react';
import { View, Text, Image, ImageSourcePropType, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Icon, TouchableRipple } from 'react-native-paper';
import { Colors } from '@/constants/Colors'; // Adjust the path to your colors file
import { wp, hp } from '@/helpers/common'; // Assuming these functions are for responsive width and height

interface TileListCardProps {
    title: string;
    imageSource: string;
    returnRate: string;
    isPositive?: boolean;
    onPress?: () => void;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    returnRateStyle?: TextStyle;
    buttonStyle?: ViewStyle;
    buttonText?: string;
}

const TileListCard: React.FC<TileListCardProps> = ({
    title,
    imageSource,
    returnRate,
    isPositive = true,
    onPress,
    containerStyle,
    titleStyle,
    returnRateStyle,
    buttonStyle,
    buttonText = "View Details",
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageSource }} style={styles.image} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                </View>
                <View style={styles.returnContainer}>
                    <Text style={[styles.returnLabel, returnRateStyle]}>Annual Return</Text>
                    <View style={[styles.returnValueContainer, isPositive ? styles.positive : styles.negative]}>
                        <Icon source={isPositive ? "arrow-up" : "arrow-down"} color={isPositive ? Colors.colors.green : Colors.colors.rose} size={11} />
                        <Text style={[styles.returnRate, returnRateStyle]}>{returnRate}</Text>
                    </View>
                </View>
            </View>
            <TouchableRipple
                onPress={onPress}
                rippleColor={Colors.colors.grey}
                style={[styles.button, buttonStyle]}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableRipple>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: wp(2),
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: Colors.colors.grey,
        padding: 10,
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(0.5),
    },
    row: {
        width: '100%',
        gap: wp(2),
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        width: wp(10),
        borderRadius: wp(2),
    },
    image: {
        width: wp(10),
        height: hp(6),
        resizeMode: 'contain',
        borderRadius: wp(2),
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    returnContainer: {
        gap: 3,
    },
    returnLabel: {
        fontSize: 11,
        fontWeight: 'normal',
    },
    returnValueContainer: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: wp(2),
        paddingVertical: hp(0.5),
        paddingHorizontal: wp(1),
    },
    returnRate: {
        fontSize: 11,
        fontWeight: 'normal',
    },
    positive: {
        borderColor: Colors.colors.green,
    },
    negative: {
        borderColor: Colors.colors.rose,
    },
    button: {
        flex: 1,
        width: wp(85),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(1),
        backgroundColor: Colors.colors.grey2,
        borderWidth: 1,
        borderColor: Colors.colors.grey,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'normal',
    },
});

export default TileListCard;
