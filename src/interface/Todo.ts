export interface Todo {
    title: string;
    description: string;
    status: boolean;
    onStatusChange: (status: boolean) => void;
    onDelete: () => void;
}