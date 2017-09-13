import {ItemStore, LinkStore, QueryStore} from '../models';
import {WrappedCollectionJSON} from './json';
import {LinkBase} from '../models/link';
import {QueryBase} from '../models/query';
import {TemplateBase} from '../models/template';
import {ErrorBase} from '../models/error';

export interface CollectionData {
    version: string;
    href?: string;
}

export interface CollectionAPI {
    link(rel: string): LinkBase | undefined;
    query(rel: string): QueryBase | undefined;
    template(): TemplateBase | undefined;
    error(): ErrorBase | undefined;
    items(): ItemStore;
    hasItems(): boolean;
    links(): LinkStore;
    hasLinks(): boolean;
    queries(): QueryStore;
    hasQueries(): boolean;
    json(): WrappedCollectionJSON;
}

export interface Collection extends CollectionData, CollectionAPI {}
