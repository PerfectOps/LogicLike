import { apiURL } from "../constants/api";

export const fetchCourses = async () => {
    try {
        const response = await fetch(`${apiURL}/docs/courses.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};