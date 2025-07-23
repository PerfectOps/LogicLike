import { requestTypes } from "../types/requestTypes";

export const filterCourses = (courses: requestTypes[], selectedTag: string | null) => {
    if (!selectedTag) return courses;
    return courses.filter(course => course.tags.includes(selectedTag));
};