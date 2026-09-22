import { FileTypes } from '../util/types';
export declare const useFileCacheContext: () => import('../util/types').FileCacheContextType;
type FetchFunction = (key: string) => Promise<FileTypes>;
export declare const useCachedFiles: (keys: string[], fetchFile: FetchFunction) => {
    files: Record<string, FileTypes>;
    loading: boolean;
    errors: Record<string, Error>;
};
export {};
