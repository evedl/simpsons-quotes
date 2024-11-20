import QuoteComponent from '@/components/quotes/QuoteComponent';
import DividerComponent from '@/components/ui/DividerComponent';
import LoadingComponent from '@/components/ui/LoadingComponent';
import { fetchQuotes } from '@/services/appservices';
import { SimpsonsQuote } from '@/types/promiseTypes';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator, Button, TouchableOpacity } from 'react-native';


export default function HomeScreen() {

    const [quote, setQuote] = useState<SimpsonsQuote | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Boolean>(false);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const quotes = await fetchQuotes();
                console.log(quotes, 'cpmponent');
                setQuote(quotes);
            }
            catch (error) {
                console.error('error al obtener la frase: ', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [reload]);

    if (loading) return ( <LoadingComponent /> );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <QuoteComponent quote={quote!} />
                <DividerComponent />
                <TouchableOpacity style={styles.button} onPress={() => setReload(!reload) }>
                    <Text style={styles.textButton}>
                        Siguiente personaje
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
                <Image source={require('@/assets/images/the_Simpsons_Logo.png')} resizeMode='contain' style={styles.footerimg} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f64d6',
        padding: 20,
    },
    card: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#f8db27',
        width: '100%',
        padding: 20,
        shadowColor: '#9c5b01',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    button: {
        backgroundColor: '#93ca27',
        padding: 12,
        borderRadius: 5,
        elevation: 2,
        
    },
    textButton: {
        color: '#2f64d6',
        fontWeight: '500',
        textAlign: 'center',
    },

    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        marginBottom: 5,
    },
    footerimg: {
        width: 150,
        height: 150
    }
});
