import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Station } from './station.model';
import { StationService } from './station.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [StationService, HTTP_PROVIDERS]
})
export class AppComponent {
    stations: Station[] = [];

    constructor (private stationService: StationService) {
        stationService.getStations("").subscribe(x => {
            console.log(x);
            this.stations = x
        });
    }

    onKey(event:any) {
        let searchValue = event.target.value;
        console.log(event.target.value);
        this.stationService.getStations(searchValue).subscribe(x => {
            console.log(x);
            this.stations = x
        });
    }
}