import { TreeNode } from '../../util/types';
interface FileTableProps {
    loading: boolean;
    currentTreeNode: TreeNode | undefined;
    navigateTo: (path: string) => void;
}
export default function FileTable({ loading, currentTreeNode, navigateTo }: FileTableProps): import("react/jsx-runtime").JSX.Element;
export {};
