
import { StyleSheet } from 'react-native';
import { Platform } from 'react-native'

const styles = StyleSheet.create({
    inputText: {
        borderColor: '#000',
        borderWidth: Platform.OS === 'ios' ? 1 : 0,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "#444",
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderWidth: 1,
        borderColor: "#444"
    },
    disabledButton: {
        backgroundColor: '#ccc',
        borderColor: '#ccc'
    },
    invertedButton: {
        backgroundColor: "#2F4F4F",
        borderColor:"#2F4F4F"
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20
    },
    invertedButtonText: {
        color: "#ccc"
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles;