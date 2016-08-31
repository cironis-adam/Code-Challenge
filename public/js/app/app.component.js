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
var station_service_1 = require('./station.service');
var AppComponent = (function () {
    function AppComponent(stationService) {
        var _this = this;
        this.stationService = stationService;
        this.stations = [];
        stationService.getStations("").subscribe(function (x) {
            console.log(x);
            _this.stations = x;
        });
    }
    AppComponent.prototype.onKey = function (event) {
        var _this = this;
        var searchValue = event.target.value;
        console.log(event.target.value);
        this.stationService.getStations(searchValue).subscribe(function (x) {
            console.log(x);
            _this.stations = x;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [station_service_1.StationService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [station_service_1.StationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0MsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFRbkQ7SUFHSSxzQkFBcUIsY0FBOEI7UUFIdkQsaUJBa0JDO1FBZndCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZuRCxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3JCLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLEtBQVM7UUFBZixpQkFPQztRQU5HLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxxQkFBYyxDQUFDO1NBQzlDLENBQUM7O29CQUFBO0lBbUJGLG1CQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxvQkFBWSxlQWtCeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFN0YXRpb24gfSBmcm9tICcuL3N0YXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGlvblNlcnZpY2UgfSBmcm9tICcuL3N0YXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1N0YXRpb25TZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBzdGF0aW9uczogU3RhdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzdGF0aW9uU2VydmljZTogU3RhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3RhdGlvblNlcnZpY2UuZ2V0U3RhdGlvbnMoXCJcIikuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRpb25zID0geFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbktleShldmVudDphbnkpIHtcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnN0YXRpb25TZXJ2aWNlLmdldFN0YXRpb25zKHNlYXJjaFZhbHVlKS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGlvbnMgPSB4XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
