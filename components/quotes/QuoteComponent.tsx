import { SimpsonsQuote } from '@/types/promiseTypes';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface QuoteComponentProps {
    quote: SimpsonsQuote;
}

const QuoteComponent: React.FunctionComponent<QuoteComponentProps> = ({quote}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: quote?.image }} style={styles.img} resizeMode='contain' />
            <Text style={styles.textcharacter}>
                {quote?.character}
            </Text>
            <Text style={styles.textquote}>
                "{quote?.quote}"
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
    },
    textquote: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: '#979797',
    },
    textcharacter: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#9c5b01',
    },
});

export default QuoteComponent;
