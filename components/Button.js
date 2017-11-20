import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../styles';

const Button = function ({text, onPress, disabled, inverted, style}) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[Styles.button, (inverted && Styles.invertedButton), (disabled && Styles.disabledButton), style]}>
            <View style={{alignItems: 'center'}}>
                <Text style={[Styles.buttonText, (inverted && Styles.invertedButtonText)]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    inverted: PropTypes.bool,
    style: PropTypes.object
};

export default Button;