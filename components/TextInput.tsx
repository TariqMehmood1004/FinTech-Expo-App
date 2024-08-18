import { Colors } from '@/constants/Colors';
import { wp } from '@/helpers/common';
import * as React from 'react';
import { TextInput } from 'react-native-paper';

interface TTextInputProps {
    label?: string;
    secureTextEntry?: boolean;
    icon?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const TTextInput: React.FC<TTextInputProps> = ({
    label = 'Input',
    secureTextEntry = false,
    icon = 'eye',
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
}) => {
    // State to manage visibility of the password
    const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(secureTextEntry);

    // Toggle visibility function
    const toggleVisibility = () => {
        setIsSecureTextEntry(prev => !prev);
    };

    return (
        <TextInput
            label={label}
            secureTextEntry={isSecureTextEntry}
            right={icon ? <TextInput.Icon icon={icon} onPress={toggleVisibility} /> : null}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            underlineColor="transparent"
            theme={{
                colors: { primary: 'transparent', text: Colors.colors.black },
                roundness: wp(2)
            }}
            style={{
                marginVertical: wp(2),
                width: '100%',
                backgroundColor: Colors.colors.grey,
                borderRadius: wp(2)
            }}
        />
    );
};

export default TTextInput;
