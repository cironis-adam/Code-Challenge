import { Component, Input, Output, ElementRef, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'searchbox',
    template: `<div class="search-box">
            <input #input type="search" (input)="update.emit(input.value)" [(ngModel)]="inputValue" formControl="term" placeholder="Search ...">
        </div>`,

})

export class SearchBox {
    @Input() delay: number = 1300;
    @Output() value: EventEmitter = new EventEmitter();
    @Output() update = new EventEmitter();

    public inputValue: string;

    constructor(private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();

        eventStream.subscribe(input => this.value.emit(input));
    }


    /*
    ngAfterViewInit() {
        this.update.emit('');
    }
    */
}