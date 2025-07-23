import { useEffect, useMemo, useState } from 'react';
import { View, Text, Alert, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { requestTypes } from '../../types/requestTypes';
import { fetchCourses } from '../../services/fetchCourses';
import { filterUniqueTags } from '../../utils/filterUniqueTags';
import { filterCourses } from '../../utils/filterCourses';
import { styles } from './styles';
import FilterButton from '../../components/FilterButton';
import FilterTagsModal from '../../components/modal/FilterTagsModal';
import ThemeCard from '../../components/ThemeCard';
import { colors } from '../../constants/colors';

export default function MainScreen() {
    const [courses, setCourses] = useState<requestTypes[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            setLoading(true);
            const data = await fetchCourses();
            setCourses(data);
        } catch (err) {
            Alert.alert('Ошибка', 'Не удалось получить данные с сервера!');
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = useMemo(() => filterCourses(courses, selectedTag), [courses, selectedTag]);

    const uniqueTags = useMemo(() => filterUniqueTags(courses), [courses]);

    const handleFilterPress = () => setIsModalVisible(true);
    const handleModalClose = () => setIsModalVisible(false);

    const handleTagSelect = (tag: string | null) => {
        setSelectedTag(tag);
        setIsModalVisible(false);
    };

    const renderCourse = ({ item }: { item: requestTypes }) => (
        <ThemeCard course={item} />
    );

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <FilterButton 
                    selectedTag={selectedTag} 
                    onPress={handleFilterPress}
                />

                {loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={'large'} color={colors.green} />
                    </View>
                ) : (
                    <FlatList
                        data={filteredCourses}
                        renderItem={renderCourse}
                        keyExtractor={(item: requestTypes) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                    />
                )}

                <FilterTagsModal
                    visible={isModalVisible}
                    tags={uniqueTags}
                    selectedTag={selectedTag}
                    onTagSelect={handleTagSelect}
                    onClose={handleModalClose}
                />
            </View>
        </SafeAreaView>
    );
} 