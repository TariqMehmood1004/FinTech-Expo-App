import React from 'react';
import { Image, StyleSheet, Text, TextStyle, View, ViewStyle, ImageStyle } from 'react-native';
import { wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';
import { IconButton } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';

interface CardProps {
    title?: string;
    subtitle?: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
    image?: any;
    imageStyle?: ImageStyle;
    navigateTo?: any
}

const TileList: React.FC<CardProps> = ({
    title = 'Default Title',
    subtitle = 'Default Subtitle',
    containerStyle,
    titleStyle,
    subtitleStyle,
    image,
    imageStyle,
    navigateTo,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {image && (
                <Image
                    source={typeof image === 'string' ? { uri: image } : image}
                    style={[styles.image, imageStyle]}
                    resizeMode="contain"
                    onError={(e) => console.error('Failed to load image', e)}
                />
            )}
            <View style={{ flex: 1, paddingLeft: wp(3), paddingRight: wp(3) }}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
            </View>

            <View>
                <IconButton onPress={() => navigateTo} icon={'chevron-right'} size={wp(7)} iconColor='black' style={{ alignSelf: 'flex-end' }} />
            </View>
        </View>
    );
};

export default TileList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.colors.grey,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: Colors.radius.sm,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginVertical: wp(1),
        paddingHorizontal: wp(3),
        paddingVertical: wp(1),
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(6),
        height: wp(6),
        borderRadius: wp(100),
    },
    title: {
        fontWeight: 'bold',
        fontSize: wp(3.7),
    },
    subtitle: {
        fontSize: wp(3.2),
        color: '#888',
    },
});
