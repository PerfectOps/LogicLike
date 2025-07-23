import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { TagButtonProps } from '../types/TagButtonProps';
import { colors } from '../constants/colors';

const TagButton: React.FC<TagButtonProps> = React.memo(({ tag, isSelected, onPress }) => {
    const handlePress = () => onPress(tag);

    return (
        <TouchableOpacity 
            style={[styles.container, isSelected && styles.selected]} 
            onPress={handlePress}
        >
            <Text style={[styles.text, isSelected && styles.selectedText]}>
                {tag}
            </Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.border,
        borderRadius: 12
    },
    selected: {
        backgroundColor: colors.green,
        borderColor: colors.green,
        borderWidth: 2,
        borderRadius: 12,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Nunito-ExtraBold',
        textAlign: 'left',
        paddingLeft: 18,
        color: colors.textSecondary
    },
    selectedText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Nunito-ExtraBold',
        textAlign: 'left',
        paddingLeft: 18
    },
});

export default TagButton;