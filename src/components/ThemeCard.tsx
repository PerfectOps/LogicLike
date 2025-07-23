import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeCardProps } from '../types/ThemeCardProps';
import { colors } from '../constants/colors';

const ThemeCard: React.FC<ThemeCardProps> = React.memo(({ course }) => {
    return (
        <>
        <View style={styles.container}>
            <View style={{gap: 12}}>
                <View style={[styles.imageBox, {backgroundColor: course.bgColor}]}>
                    <Image 
                        source={{ uri: course.image }} 
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.title} numberOfLines={2}>
                    {course.name}
                </Text>
            </View>
            <View style={styles.shadow} />
        </View>
        </>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 24,
        height: 204,
    },
    imageBox: {
        paddingVertical: 9,
        paddingHorizontal: 33,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },
    image: {
        width: 144,
        height: 144,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Nunito-ExtraBold',
        textAlign: 'center',
        color: colors.text
    },
    shadow: {
        backgroundColor: colors.shadow, 
        height: 30, 
        zIndex: -1, 
        top: -14, 
        borderBottomLeftRadius: 24, 
        borderBottomRightRadius: 24
    }
});

export default ThemeCard;