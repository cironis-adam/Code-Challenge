import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Station }           from './station.model';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class StationService {
    constructor (private http: Http) {}

    private stationsUrl = '/station/'; // URL to web API

    getStations (params:string): Observable<Station[]> {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let queryUrl = 'station/' + params;

        return this.http.get(queryUrl, { headers: headers }).map((r: Response) => r.json() as Station[]);
    }
}
