"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/throttleTime');
require('rxjs/add/observable/fromEvent');
var SearchBox = (function () {
    function SearchBox(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.delay = 1300;
        this.value = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
        var eventStream = Rx_1.Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(function () { return _this.inputValue; })
            .debounceTime(this.delay)
            .distinctUntilChanged();
        eventStream.subscribe(function (input) { return _this.value.emit(input); });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SearchBox.prototype, "delay", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchBox.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "update", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'searchbox',
            template: "<div class=\"search-box\">\n            <input #input type=\"search\" (input)=\"update.emit(input.value)\" [(ngModel)]=\"inputValue\" formControl=\"term\" placeholder=\"Search ...\">\n        </div>",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRSxlQUFlLENBQUMsQ0FBQTtBQUduRixtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFDckMsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFVdkM7SUFPSSxtQkFBb0IsVUFBc0I7UUFQOUMsaUJBc0JDO1FBZnVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOakMsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNwQixVQUFLLEdBQWlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUtsQyxJQUFNLFdBQVcsR0FBRyxlQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBZixDQUFlLENBQUM7YUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDeEIsb0JBQW9CLEVBQUUsQ0FBQztRQUU1QixXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBYkQ7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzRDQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OzZDQUFBO0lBWGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHdNQUVDO1NBRWQsQ0FBQzs7aUJBQUE7SUF3QkYsZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLGlCQUFTLFlBc0JyQixDQUFBIiwiZmlsZSI6InNlYXJjaGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlYXJjaGJveCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWFyY2gtYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInNlYXJjaFwiIChpbnB1dCk9XCJ1cGRhdGUuZW1pdChpbnB1dC52YWx1ZSlcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiBmb3JtQ29udHJvbD1cInRlcm1cIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCAuLi5cIj5cclxuICAgICAgICA8L2Rpdj5gLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3gge1xyXG4gICAgQElucHV0KCkgZGVsYXk6IG51bWJlciA9IDEzMDA7XHJcbiAgICBAT3V0cHV0KCkgdmFsdWU6IEV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBjb25zdCBldmVudFN0cmVhbSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiB0aGlzLmlucHV0VmFsdWUpXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcclxuICAgICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgIGV2ZW50U3RyZWFtLnN1YnNjcmliZShpbnB1dCA9PiB0aGlzLnZhbHVlLmVtaXQoaW5wdXQpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KCcnKTtcclxuICAgIH1cclxuICAgICovXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
