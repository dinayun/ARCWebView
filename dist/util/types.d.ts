export type TreeNode = {
    name: string;
    id: string;
    type: "file" | "folder";
    children?: TreeNode[];
    sha256?: string;
    contentSize?: string;
};
export type FileTypes = File | Blob | string;
export type ContentType = "text" | "markdown" | "binary" | "jsx";
export type FileViewerContent = {
    node: TreeNode;
    name?: string;
    content?: () => Promise<FileTypes>;
    component?: React.JSX.Element;
    contentType?: ContentType;
};
export type FileCache = Record<string, FileTypes>;
export type FileCacheContextType = {
    files: FileCache;
    setFile: (key: string, file: FileTypes) => void;
};
export interface SearchCache {
    name: string;
    path: string;
    type: "file" | "header" | "isa-title" | "isa-table" | "person";
}
export type SearchCacheContextType = {
    cache: SearchCache[];
    setCache: React.Dispatch<React.SetStateAction<SearchCache[]>>;
};
