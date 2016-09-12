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
var search_pipe_1 = require('./search-pipe');
var search_box_1 = require('./search-box');
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "value", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            directives: [search_box_1.SearchBox],
            providers: [station_service_1.StationService, http_1.HTTP_PROVIDERS],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [station_service_1.StationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFFL0MsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsNEJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDJCQUEwQixjQUFjLENBQUMsQ0FBQTtBQVV6QztJQUlJLHNCQUFxQixjQUE4QjtRQUp2RCxpQkFVQztRQU53QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIbkQsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUlyQixjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVBEO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQVZaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFVBQVUsRUFBRSxDQUFFLHNCQUFTLENBQUU7WUFDekIsU0FBUyxFQUFFLENBQUUsZ0NBQWMsRUFBRSxxQkFBYyxDQUFFO1lBQzdDLEtBQUssRUFBRSxDQUFFLHdCQUFVLENBQUU7U0FDeEIsQ0FBQzs7b0JBQUE7SUFXRixtQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksb0JBQVksZUFVeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFN0YXRpb24gfSBmcm9tICcuL3N0YXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGlvblNlcnZpY2UgfSBmcm9tICcuL3N0YXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hQaXBlIH0gZnJvbSAnLi9zZWFyY2gtcGlwZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tICcuL3NlYXJjaC1ib3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbIFNlYXJjaEJveCBdLFxuICAgIHByb3ZpZGVyczogWyBTdGF0aW9uU2VydmljZSwgSFRUUF9QUk9WSURFUlMgXSxcbiAgICBwaXBlczogWyBTZWFyY2hQaXBlIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBzdGF0aW9uczogU3RhdGlvbltdID0gW107XG4gICAgQElucHV0KCkgdmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzdGF0aW9uU2VydmljZTogU3RhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3RhdGlvblNlcnZpY2UuZ2V0U3RhdGlvbnMoXCJcIikuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRpb25zID0geFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
