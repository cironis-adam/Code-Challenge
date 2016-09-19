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
var _this = this;
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
            template: "<div class=\"search-box\">\n            <input #input type=\"search\" (input)=\"update.emit(input.value)\" [ngFormControl]=\"searchStation\" placeholder=\"Search ...\">\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
this.items = this.term.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(function (term) { return _this.wikipediaService.search(term); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlCQXVCQztBQXZCRCxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFFaEUsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFRdkM7SUFBQTtRQUNjLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU10QyxDQUZDLEFBRUE7SUFKRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUpEO1FBQUMsYUFBTSxFQUFFOzs2Q0FBQTtJQVBiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwwTEFFQztTQUNkLENBQUM7O2lCQUFBO0lBUUUsZ0JBQUM7QUFBRCxDQVBKLEFBT0ssSUFGQTtBQUxRLGlCQUFTLFlBS2pCLENBQUE7QUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtLQUNsQyxZQUFZLENBQUMsR0FBRyxDQUFDO0tBQ2pCLG9CQUFvQixFQUFFO0tBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQyIsImZpbGUiOiJzZWFyY2gtYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VhcmNoYm94JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwic2VhcmNoXCIgKGlucHV0KT1cInVwZGF0ZS5lbWl0KGlucHV0LnZhbHVlKVwiIFtuZ0Zvcm1Db250cm9sXT1cInNlYXJjaFN0YXRpb25cIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCAuLi5cIj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3gge1xyXG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KCcnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy50ZXJtLnZhbHVlQ2hhbmdlc1xyXG4gICAgLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgLnN3aXRjaE1hcCh0ZXJtID0+IHRoaXMud2lraXBlZGlhU2VydmljZS5zZWFyY2godGVybSkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
