// Loader.js

import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', // Optional: dim background
    },
});

export default Loader;
