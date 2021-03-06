export interface CollectionJSON {
    version?: string;
    href?: string;
    links?: LinkJSON[];
    items?: ItemJSON[];
    queries?: QueryJSON[];
    template?: TemplateJSON;
    error?: ErrorJSON;
}

export interface WrappedCollectionJSON {
    collection: CollectionJSON;
}

export interface ValidationJSON {
    name: string;
    prompt?: string;
    arguments?: {name: string, value: string | number | boolean}[];
    message?: string;
}

export interface DataJSON {
    name: string;
    value?: string | number | boolean | null;
    array?: (string | number | boolean | null)[] | null;
    object?: any;
    prompt?: string;
    regexp?: string;
    required?: boolean;
    validations?: ValidationJSON[];
}

export interface ErrorJSON {
    title?: string;
    code?: string;
    message?: string;
}

export interface ItemJSON {
    href: string;
    links?: LinkJSON[];
    data?: DataJSON[];
}

export interface LinkJSON {
    href: string;
    rel: string;
    name?: string;
    prompt?: string;
    render?: string;
}

export interface QueryJSON {
    href: string;
    rel: string;
    name?: string;
    prompt?: string;
    data?: DataJSON[];
}

export interface TemplateJSON {
    data: DataJSON[];
}


