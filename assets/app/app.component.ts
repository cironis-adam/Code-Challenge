import { Component, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Station } from './station.model';
import { StationService } from './station.service';
import { SearchPipe } from './search.pipe';
import { SearchBox } from './searchbox.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    directives: [ SearchBox ],
    providers: [ StationService, HTTP_PROVIDERS ],
    pipes: [ SearchPipe ]
})
export class AppComponent {
    stations: Station[] = [];
    @Input() value;

    constructor (private stationService: StationService) {
        stationService.getStations("").subscribe(x => {
            console.log(x);
            this.stations = x
        });
    }
}