import {Observable} from 'rxjs';
import {LinkJSON} from './json';
import {CollectionBase} from '../models';

export interface LinkAPI {
    follow(params?: any): Observable<CollectionBase>;
    json(): LinkJSON;
}

export interface Link extends LinkJSON, LinkAPI {}
