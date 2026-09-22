interface AppProps {
    jsonString?: () => Promise<string>;
    readmefetch?: () => Promise<string>;
    licensefetch?: () => Promise<string>;
}
declare function App({ jsonString: outerJson, readmefetch, licensefetch }: AppProps): import("react/jsx-runtime").JSX.Element;
export default App;
