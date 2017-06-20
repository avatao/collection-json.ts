import {Observable} from 'rxjs/Observable';
import {Collection, Template, TemplateJSON} from '../interfaces';
import {DataStore} from './datastore';

export abstract class TemplateBase implements Template {
    public dataStore: DataStore;

    constructor(template: TemplateJSON) {
        this.dataStore = new DataStore(template.data);
    }

    public abstract submit(): Observable<Collection>;
    public abstract update(): Observable<Collection>;
}
