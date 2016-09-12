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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUd4RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUNJLHdCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV2QixnQkFBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLGlCQUFpQjtJQUZsQixDQUFDO0lBSW5DLG9DQUFXLEdBQVgsVUFBYSxNQUFhO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFXLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFlLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBWkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWFiLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxzQkFBYyxpQkFZMUIsQ0FBQSIsImZpbGUiOiJzdGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBTdGF0aW9uIH0gICAgICAgICAgIGZyb20gJy4vc3RhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdGlvblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpb25zVXJsID0gJy9zdGF0aW9uLyc7IC8vIFVSTCB0byB3ZWIgQVBJXHJcblxyXG4gICAgZ2V0U3RhdGlvbnMgKHBhcmFtczpzdHJpbmcpOiBPYnNlcnZhYmxlPFN0YXRpb25bXT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBsZXQgcXVlcnlVcmwgPSAnc3RhdGlvbi8nICsgcGFyYW1zO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChxdWVyeVVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLm1hcCgocjogUmVzcG9uc2UpID0+IHIuanNvbigpIGFzIFN0YXRpb25bXSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
