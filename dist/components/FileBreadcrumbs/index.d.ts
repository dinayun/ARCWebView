import { TreeNode } from '../../util/types';
interface FileBreadcrumbsProps {
    currentTreeNode: TreeNode;
    title?: string;
    navigateTo: (path: string) => void;
}
export default function FileBreadcrumbs({ currentTreeNode, navigateTo, title }: FileBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
export {};
