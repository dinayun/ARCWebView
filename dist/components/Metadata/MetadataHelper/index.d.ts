import { Person, Publication } from '@nfdi4plants/arctrl';
export declare function MetadataField({ exists, label, children, as }: {
    exists: boolean;
    label: string;
    children: React.ReactNode;
    as?: any;
}): import("react/jsx-runtime").JSX.Element;
export declare function PersonsField({ persons }: {
    persons: Person[];
}): import("react/jsx-runtime").JSX.Element;
export declare function PublicationsField({ publications }: {
    publications: Publication[];
}): import("react/jsx-runtime").JSX.Element;
