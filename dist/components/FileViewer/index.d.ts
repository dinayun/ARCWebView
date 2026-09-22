import { ContentType, FileTypes, FileViewerContent } from '../../util/types';
interface FileViewerContentProps {
    file: FileTypes;
    contentType: ContentType;
}
interface FileViewerProps {
    nodes: FileViewerContent[];
}
declare function FileViewerContent({ file, contentType }: FileViewerContentProps): import("react/jsx-runtime").JSX.Element;
export default function FileViewer({ nodes }: FileViewerProps): import("react/jsx-runtime").JSX.Element;
export {};
