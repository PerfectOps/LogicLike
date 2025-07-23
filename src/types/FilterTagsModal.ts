export interface FilterTagsModalProps {
    visible: boolean;
    tags: string[];
    selectedTag: string | null;
    onTagSelect: (tag: string | null) => void;
    onClose: () => void;
}