import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 55,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5 ,
        textAlign: 'center',
        color: colors.text,
    },
    welcome_text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: colors.accent1,
    },
    small_text: {
        fontSize: 10,
        marginBottom: 20,
        textAlign: 'center',
        color: '#8f8e8e',
    },
    bottom_text: {
        fontSize: 10,
        textAlign: 'center',
        color: '#8f8e8e',
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        borderColor: '#d5e3f1',
        borderWidth: 2,
        borderRadius: 12,
        padding: 10,
        paddingLeft: 12,
        fontSize: 12,
        marginBottom: 16,
        backgroundColor: '#f8f5f5',
        color: '#4d4c4c',
    },
    button: {
        backgroundColor: colors.secondary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 9,
        color: '8f8e8e',
        marginBottom: 5,
    },
});

export default styles;
