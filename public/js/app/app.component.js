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
var search_pipe_1 = require('./search.pipe');
var searchbox_component_1 = require('./searchbox.component');
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
            directives: [searchbox_component_1.SearchBox],
            providers: [station_service_1.StationService, http_1.HTTP_PROVIDERS],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [station_service_1.StationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFFL0MsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsNEJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLG9DQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBVWxEO0lBSUksc0JBQXFCLGNBQThCO1FBSnZELGlCQVVDO1FBTndCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUhuRCxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBSXJCLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBUEQ7UUFBQyxZQUFLLEVBQUU7OytDQUFBO0lBVlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsVUFBVSxFQUFFLENBQUUsK0JBQVMsQ0FBRTtZQUN6QixTQUFTLEVBQUUsQ0FBRSxnQ0FBYyxFQUFFLHFCQUFjLENBQUU7WUFDN0MsS0FBSyxFQUFFLENBQUUsd0JBQVUsQ0FBRTtTQUN4QixDQUFDOztvQkFBQTtJQVdGLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxvQkFBWSxlQVV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgU3RhdGlvbiB9IGZyb20gJy4vc3RhdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0aW9uU2VydmljZSB9IGZyb20gJy4vc3RhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFBpcGUgfSBmcm9tICcuL3NlYXJjaC5waXBlJztcbmltcG9ydCB7IFNlYXJjaEJveCB9IGZyb20gJy4vc2VhcmNoYm94LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFsgU2VhcmNoQm94IF0sXG4gICAgcHJvdmlkZXJzOiBbIFN0YXRpb25TZXJ2aWNlLCBIVFRQX1BST1ZJREVSUyBdLFxuICAgIHBpcGVzOiBbIFNlYXJjaFBpcGUgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHN0YXRpb25zOiBTdGF0aW9uW10gPSBbXTtcbiAgICBASW5wdXQoKSB2YWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHN0YXRpb25TZXJ2aWNlOiBTdGF0aW9uU2VydmljZSkge1xuICAgICAgICBzdGF0aW9uU2VydmljZS5nZXRTdGF0aW9ucyhcIlwiKS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGlvbnMgPSB4XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
