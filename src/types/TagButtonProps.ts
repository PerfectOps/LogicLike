export interface TagButtonProps {
    tag: string;
    isSelected: boolean;
    onPress: (tag: string) => void;
}