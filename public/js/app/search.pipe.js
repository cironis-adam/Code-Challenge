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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, _a) {
        var term = _a[0];
        return value.filter(function (item) { return item.locationName.startsWith(term); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: "search"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFLcEQ7SUFBQTtJQUlBLENBQUM7SUFIRyw4QkFBUyxHQUFULFVBQVUsS0FBSyxFQUFFLEVBQU07WUFBTCxZQUFJO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBTkw7UUFBQyxXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDOztrQkFBQTtJQUtGLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxrQkFBVSxhQUl0QixDQUFBIiwiZmlsZSI6InNlYXJjaC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiBcInNlYXJjaFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZSwgW3Rlcm1dKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcigoaXRlbSk9PiBpdGVtLmxvY2F0aW9uTmFtZS5zdGFydHNXaXRoKHRlcm0pKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
