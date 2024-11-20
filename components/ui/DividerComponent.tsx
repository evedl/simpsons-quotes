//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

const DividerComponent = () => {
    return (
        <View style={styles.divider}>
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        backgroundColor: 'black',
        width: '100%',
        height: 1,
        borderStyle: 'solid',
        alignSelf: 'center',
        marginVertical: 16,
    },
});

export default DividerComponent;
