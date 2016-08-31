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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var StationService = (function () {
    function StationService(http) {
        this.http = http;
        this.stationsUrl = '/station/'; // URL to web API
    }
    StationService.prototype.getStations = function (params) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var queryUrl = 'station/' + params;
        return this.http.get(queryUrl, { headers: headers }).map(function (r) { return r.json(); });
    };
    StationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StationService);
    return StationService;
}());
exports.StationService = StationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUl4RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUNJLHdCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV2QixnQkFBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLGlCQUFpQjtJQUZsQixDQUFDO0lBSW5DLG9DQUFXLEdBQVgsVUFBYSxNQUFhO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFXLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFlLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBWkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWFiLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxzQkFBYyxpQkFZMUIsQ0FBQSIsImZpbGUiOiJzdGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGlvbiB9ICAgICAgICAgICBmcm9tICcuL3N0YXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXRpb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aW9uc1VybCA9ICcvc3RhdGlvbi8nOyAvLyBVUkwgdG8gd2ViIEFQSVxyXG5cclxuICAgIGdldFN0YXRpb25zIChwYXJhbXM6c3RyaW5nKTogT2JzZXJ2YWJsZTxTdGF0aW9uW10+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VXJsID0gJ3N0YXRpb24vJyArIHBhcmFtcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocXVlcnlVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KS5tYXAoKHI6IFJlc3BvbnNlKSA9PiByLmpzb24oKSBhcyBTdGF0aW9uW10pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
