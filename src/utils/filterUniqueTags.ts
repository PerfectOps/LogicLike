import { requestTypes } from "../types/requestTypes";

export const filterUniqueTags = (courses: requestTypes[]) => {
    const result = new Set<string>();
    courses.forEach(course => {
        course.tags.forEach(tag => result.add(tag));
    });
    return Array.from(result).sort();
};