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
    SearchPipe.prototype.transform = function (value, queryString) {
        if (value == null) {
            return null;
        }
        if (value == "") {
            return null;
        }
        if (queryString !== undefined) {
            return value.filter(function (item) { return item.locationName.toLowerCase().indexOf(queryString.toLowerCase()) !== -1; });
        }
        else {
            return value;
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFNcEQ7SUFBQTtJQWVBLENBQUM7SUFkRyw4QkFBUyxHQUFULFVBQVcsS0FBSyxFQUFFLFdBQVc7UUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzFCLE1BQU0sQ0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpFLENBQXlFLENBQUMsQ0FBQztRQUMzRyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBbEJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQzs7a0JBQUE7SUFpQkYsaUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGtCQUFVLGFBZXRCLENBQUEiLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6IFwic2VhcmNoXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIHtcclxuICAgIHRyYW5zZm9ybSAodmFsdWUsIHF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlPT1udWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWU9PVwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxdWVyeVN0cmluZyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuICAgdmFsdWUuZmlsdGVyKGl0ZW09Pml0ZW0ubG9jYXRpb25OYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeVN0cmluZy50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
