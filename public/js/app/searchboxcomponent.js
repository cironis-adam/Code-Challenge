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
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/throttleTime');
require('rxjs/add/observable/fromEvent');
var SearchBox = (function () {
    function SearchBox() {
        this.update = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        this.update.emit('');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "update", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'searchbox',
            template: "<div class=\"search-box\">\n            <input #input type=\"search\" (input)=\"update.emit(input.value)\" placeholder=\"Search ...\">\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJveGNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdELGVBQWUsQ0FBQyxDQUFBO0FBRWhFLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLGdDQUFnQyxDQUFDLENBQUE7QUFDeEMsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBUXZDO0lBQUE7UUFDYyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFLMUMsQ0FBQztJQUhHLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSkQ7UUFBQyxhQUFNLEVBQUU7OzZDQUFBO0lBUGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHdKQUVDO1NBQ2QsQ0FBQzs7aUJBQUE7SUFPRixnQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksaUJBQVMsWUFNckIsQ0FBQSIsImZpbGUiOiJzZWFyY2hib3hjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWFyY2hib3gnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJzZWFyY2hcIiAoaW5wdXQpPVwidXBkYXRlLmVtaXQoaW5wdXQudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggLi4uXCI+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94IHtcclxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUuZW1pdCgnJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
