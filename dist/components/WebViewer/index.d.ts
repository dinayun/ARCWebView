interface WebViewerProps {
    jsonString: string;
    readmefetch?: () => Promise<string>;
    licensefetch?: () => Promise<string>;
    clearJsonCallback?: () => void;
}
export default function WebViewer({ jsonString, readmefetch, licensefetch, clearJsonCallback, }: WebViewerProps): import("react/jsx-runtime").JSX.Element;
export {};
