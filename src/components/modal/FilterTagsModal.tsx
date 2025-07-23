import React, { useCallback } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { FilterTagsModalProps } from '../../types/FilterTagsModal';
import TagButton from '../TagButton';
import { colors } from '../../constants/colors';

const FilterTagsModal: React.FC<FilterTagsModalProps> = ({
    visible,
    tags,
    selectedTag,
    onTagSelect,
    onClose,
}) => {
    
    const handleTagPress = (tag: string) => {
        onTagSelect(tag);
    };

    const handleAllTagsPress = () => {
        onTagSelect(null);
    };

    const renderTag = useCallback(({ item }: { item: string }) => (
        <TagButton 
            tag={item} 
            isSelected={item === selectedTag}
            onPress={handleTagPress}
        />
    ), [selectedTag, handleTagPress]);

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Выбор темы</Text>
                    <TouchableOpacity 
                        style={styles.closeButton} 
                        onPress={onClose}
                    >
                        <Image source={require('../../assets/cross.png')} style={styles.closeButtonIcon} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tags}
                    renderItem={renderTag}
                    keyExtractor={(item: string) => item}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    ListHeaderComponent={
                        <TagButton 
                            tag="Все темы"
                            isSelected={selectedTag === null}
                            onPress={handleAllTagsPress}
                        />
                    }
                />
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24
    },
    title: {
        fontSize: 18,
        fontFamily: 'Nunito-ExtraBold',
        color: colors.textSecondary,
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: 24,
        top: 24
    },
    closeButtonIcon: {
        tintColor: colors.icon,
        width: 22,
        height: 22
    },
    listContent: {
        paddingVertical: 18,
        width: 336,
        marginHorizontal: 'auto',
        gap: 6
    },
});

export default FilterTagsModal;