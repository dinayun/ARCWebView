export declare function useMemoAsync<T>(factory: () => Promise<T>, deps: React.DependencyList): {
    loading: boolean;
    value?: T;
    error?: Error;
};
