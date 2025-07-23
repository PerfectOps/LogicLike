import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { FilterButtonProps } from '../types/FilterButtonProps';
import { StyleSheet } from 'react-native-unistyles';
import { colors } from '../constants/colors';

const FilterButton: React.FC<FilterButtonProps> = React.memo(({ 
    selectedTag, 
    onPress 
}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.container} 
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Text style={styles.text}>
                    {selectedTag || 'Все темы'}
                </Text>
                <Image source={require('../assets/downPointer.png')} style={styles.downIcon} />
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 5,
        paddingRight: 5,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        borderRadius: 40
    },
    container: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontFamily: 'Nunito-ExtraBold',
        textAlign: 'center',
        color: colors.white
    },
    downIcon: {
        width: 18,
        height: 18
    },
});

export default FilterButton;