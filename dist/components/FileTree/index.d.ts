import { TreeNode } from '../../util/types';
interface FileTreeProps {
    tree: TreeNode | undefined;
    expandedFolderIds: string[];
    currentTreeNode: TreeNode | undefined;
    navigateTo: (path: string) => void;
}
export default function FileTree({ tree, currentTreeNode, expandedFolderIds, navigateTo, }: FileTreeProps): import("react/jsx-runtime").JSX.Element;
export {};
