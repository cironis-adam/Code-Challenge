import { Component, Output, EventEmitter } from "@angular/core";
import {Control} from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'searchbox',
    template: `<div class="search-box">
            <input #input type="search" (input)="update.emit(input.value)" placeholder="Search ...">
        </div>`
})
export class SearchBox {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}