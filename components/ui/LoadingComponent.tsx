//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#68da66" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f64d6',
    },
});

export default LoadingComponent;
